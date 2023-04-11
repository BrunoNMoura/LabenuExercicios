import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { BaseUrl } from '../../Constants/BaseUrl'
import { Botao, ContainerInputs, ContainerMusicas, InputMusica, Musica } from './styled'

export default function Musicas(props) {
    
    const [newArtist, setNewArtist] = useState("")
    const [newSing, setNewSing] = useState("")
    const [newUrl, setNewUrl] =useState("")
   

    const getPlayListTtracks = async ()=>{
        try {
            const response = await axios.get(`${BaseUrl}/${props.playlist.id}/tracks`,props.headers)
           props.setMusicas(response.data.result.tracks)
        } catch (error) {
            console.log(error.response)
        }        
       
    }
    useEffect(()=>{getPlayListTtracks()},[])

    const addTrackToPlaylist = async (newArtist,newSing,newUrl)=>{
        try {
            const body = {
            name:newArtist,
            artist: newSing,
            url: newUrl
        }
        await axios.post(`${BaseUrl}/${props.playlist.id}/tracks`,body,props.headers)
        
            alert("Música adicionada!")
            getPlayListTtracks()
        } catch (error) {
             console.log(error.response)
        }        
    }

    
    const removeTrackFromPlaylist = async (tracksId) =>{
        try {
            await axios.delete(`${BaseUrl}/${props.playlist.id}/tracks/${tracksId}`, props.headers)           
            alert("Música deleta!")
            getPlayListTtracks()
        } catch (error) {
             console.log(error.response)
        }       
    }

    const deletePlaylist = async () =>{
        try {
            await axios.delete(`${BaseUrl}/${props.playlist.id}`,props.headers)
            alert ("Playlist deletada!")
            props.getAllPlayList()
        } catch (error) {
            console.log(error.response)
        }
    }

    return (
        <ContainerMusicas>
            <h2>{props.playlist.name}</h2>
            <button onClick={deletePlaylist}>X</button>
            {props.musicas.map((musica) => {
                return (
                    <Musica key={musica.id}>
                        <h3>{musica.name} - {musica.artist}</h3>
                        <audio src={musica.url} controls />
                        <button onClick={()=>{removeTrackFromPlaylist(musica.id)}}>X</button>
                    </Musica>)
            })}
           
            <ContainerInputs>
            
                <InputMusica 
                placeholder="artista"
                value={newArtist}
                onChange={(e)=>{setNewArtist(e.target.value)}} 
                />
                <InputMusica 
                placeholder="musica"
                value={newSing}
                onChange={(e)=>{setNewSing(e.target.value)}} 
                />
                <InputMusica 
                placeholder="url"
                value={newUrl}
                onChange={(e)=>{setNewUrl(e.target.value)}} 
                />
                <Botao onClick={()=>{addTrackToPlaylist(newArtist,newSing,newUrl)}}>Adicionar musica</Botao>
                
            </ContainerInputs>
        </ContainerMusicas>
    )
}

