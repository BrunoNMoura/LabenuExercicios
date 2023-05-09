import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Botao, ContainerInputs, ContainerMusicas, InputMusica, Musica } from './styled'

const musicasLocal = [{
    artist: "Artista 1",
    id: "1",
    name: "Musica1",
    url: "http://spoti4.future4.com.br/1.mp3"
},
{
    artist: "Artista 2",
    id: "2",
    name: "Musica2",
    url: "http://spoti4.future4.com.br/2.mp3"
},
{
    artist: "Artista 3",
    id: "3",
    name: "Musica3",
    url: "http://spoti4.future4.com.br/3.mp3"
}]

export default function Musicas(props) {
    const [musicas, setMusicas] = useState([])
    const [newArtist, setNewArtist] = useState("")
    const [newSing, setNewSing] = useState("")
    const [newUrl, setNewUrl] =useState("")

    const getPlayListTtracks = ()=>{
        axios.get(`https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${props.playlist.id}/tracks`,props.headers)
        .then((response)=>{
            setMusicas(response.data.result.tracks)
        })
        .catch((error)=>{
            console.log(error.response)
        })
    }
    useEffect(()=>{getPlayListTtracks()},[])

    const addTrackToPlaylist = (newArtist,newSing,newUrl)=>{
        const body = {
            name:newArtist,
            artist: newSing,
            url: newUrl
        }
        axios.post(`https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${props.playlist.id}/tracks`,body,props.headers)
        .then((response)=>{
            console.log(response)
            alert("Música adicionada!")
            getPlayListTtracks()
        })
        .catch((error)=>{
            console.log(error.response)
        })
    }

    const removeTrackFromPlaylist = (tracksId) =>{
        axios.delete(`https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${props.playlist.id}/tracks/${tracksId}`, props.headers)
        .then(()=>{           
            alert("Música deleta!")
            getPlayListTtracks()
        })
        .catch((error)=>{
            console.log(error.response)
        })
    }

    return (
        <ContainerMusicas>
            <h2>{props.playlist.name}</h2>
            {musicas.map((musica) => {
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

