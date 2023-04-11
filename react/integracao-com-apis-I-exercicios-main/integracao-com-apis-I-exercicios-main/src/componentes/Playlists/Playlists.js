import axios from "axios";
import React, {  useEffect, useState } from "react";
import Musicas from "../Musicas/Musicas";

const playlistsLocal = [
    {
        id: 1,
        name: "Playlist 1"
    },
    {
        id: 2,
        name: "Playlist 2"
    },
    {
        id: 3,
        name: "Playlist 3"
    },
    {
        id: 4,
        name: "Playlist 4"
    },
]
const headers={headers:{Authorization:"bruno-moura-ozemela"}}

function Playlists() {
    const [playlists, setPlaylists] = useState([])

    const getAllPlayList = ()=>{
        axios.get("https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists", headers)
        .then((response)=>{            
            setPlaylists(response.data.result.list)
        })
        .catch((error)=>{
            console.log(error.response)//.data.message)
        })  
    }

    useEffect(()=>{getAllPlayList()},[])
  
    return (
        <div>
            {playlists.map((playlist) => {
                return <Musicas 
                key={playlist.id} 
                playlist={playlist}
                headers={headers}
                />
            })}
        </div>
    );
}

export default Playlists;
