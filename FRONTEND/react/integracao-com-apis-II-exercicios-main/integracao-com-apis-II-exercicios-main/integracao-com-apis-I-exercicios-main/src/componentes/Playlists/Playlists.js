import axios from "axios";
import React, {  useEffect, useState } from "react";
import { BaseUrl } from "../../Constants/BaseUrl";
import Musicas from "../Musicas/Musicas";

const headers={headers:{Authorization:"bruno-moura-ozemela"}}

function Playlists() {
    const [playlists, setPlaylists] = useState([])
    const [musicas, setMusicas] = useState([])
    const [searchMusic, setSearchMusic] = useState("")
    
    const searchPlaylist = async (pesquisa)=>{
        try {
            const response = await axios.get(`${BaseUrl}/search?name=${pesquisa}`, headers)
            setPlaylists(response.data.result.playlist)
        } catch (error) {
            console.log(error.response)
        }
    }

    const getAllPlayList = async ()=>{
        try {
           const response = await axios.get(BaseUrl, headers)                  
            setPlaylists(response.data.result.list)
        } catch (error) {
             console.log(error.response)
        }       
    }

  
    useEffect(()=>{getAllPlayList()},[])
  
    return (
        <div>
             <input
                placeholder="musica"
                value={searchMusic}
                onChange={(e)=>{setSearchMusic(e.target.value)}}
                />
                <button onClick={()=>{searchPlaylist(searchMusic)}}>
                    Buscar Playlist
                </button>
            {playlists.map((playlist) => {
                return <Musicas 
                key={playlist.id} 
                playlist={playlist}
                headers={headers}   
                musicas={musicas}  
                setMusicas={setMusicas}   
                getAllPlayList={getAllPlayList}        
                />
            })}
        </div>
    );
}

export default Playlists;
