import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios"
import "./GalleryDetails.scss"

const GalleryDetail = () => {
    const {id} = useParams()
    const [character, setCharacter] = useState({})
    const [origin, setOrigin] = useState({})
    const [episodes, setEpisodes] = useState([])

    useEffect(() => {
        const getCharacterById = async () => {
            const res = await axios.get(`https://rickandmortyapi.com/api/character/${id}`)
            setCharacter(res.data)
            const originRes = await axios.get(res.data.origin.url)
            setOrigin(originRes.data)
            const episodeUrls = res.data.episode
            const episodePromises = episodeUrls.map(url => axios.get(url))
            const episodeRes = await Promise.all(episodePromises)
            setEpisodes(episodeRes.map(res => res.data))
        }
        getCharacterById()
    }, [id])

    return (
       <div className="container">
         <div className="card">
             <>
             <h2>{character.name}</h2>
             <p>{character.species}</p>
             <img src={character.image} alt={character.name}/>
             <p><strong>Origin:</strong> {origin.name}</p>
             <p>{character.created}</p>
             <p><strong>Episodes:</strong></p>
             <ul>
                 {episodes.map((episode) => (
                     <li key={episode.id}>{episode.name}</li>
                 ))}
             </ul>
             </>
         </div>
       </div>
    )
}

export default GalleryDetail
