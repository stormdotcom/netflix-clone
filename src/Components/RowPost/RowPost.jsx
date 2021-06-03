import React, {useEffect, useState} from 'react'
import Youtube from "react-youtube"
import "./RowPost.css"
import axios from "../../axios"
import {imgUrl, API_KEY} from "../../Const/constant"


function RowPost(props) {
  
    const [movies, setMovies] = useState([])
    const [urlId, setUrlId] =useState("")
    useEffect(() => {
        axios.get(props.url).then((res)=>{
            setMovies(res.data.results)
        })
    
    }, []);
    const opts = {
        height: '390',
        width: '100%',
        playerVars: {
          // https://developers.google.com/youtube/player_parameters
          autoplay: 1,
        }, };
        const handleMovieClick=(id)=> {
            axios.get(`/movie/${id}/videos?api_key=${API_KEY}&language=en-US`).then((res)=>{
                if (res.data.results.length!==0) {
                    setUrlId(res.data.results[0])
                }
               
            })
        }

    return ( 
        <div className="row" >
            <h3 className="fw-bolder">   <img alt="netflix" src=  { props.isOrg ?  "./nf-logo.png"  : "./log.png"} className="nfo"  />   {props.title} </h3>
            <div className="posters"  id={props.id}>
            {movies.map((each, index)=> {
                return (
                    <div key={index}> 
                <img onClick={()=>handleMovieClick(each.id)} className={props.isSize ? "small-poster" : "poster"} src={`${imgUrl+each.backdrop_path}`} alt="" />
                <h4 className="content-title"> {each.name}</h4>
                    </div>
                )
                
            } 
    )}
            </div>
            { urlId && <Youtube videoId={urlId.key} opts={opts}    />}

        </div>
     
    )
}

export default RowPost;
