import React, { useState , useEffect} from 'react'
import { imgUrl, API_KEY} from "../../Const/constant";
import axios from "../../axios";
import "./People.css"

var peopleAPI = `?api_key=${API_KEY}`;
const baseURL = "https://api.themoviedb.org/3/person/"
function EachPerson(props) {    
    const [people, setPeople] =useState({}) 
    useEffect(() => {
        axios.get(baseURL+props.id+peopleAPI).then((res)=>{
            setPeople(res.data)
        })
    }, []);

function handleClick(url) {
    return window.open(url, '_blank').focus();
}
     
    return (
        <div className="header-people col-lg-3"  > 
        <img src={imgUrl+people.profile_path}  alt="" className="img-fluid" />
        <p className="p-1">{people.name}</p>
        <p className="text-center" onClick={()=>handleClick()}> </p>
     </div> 
    )
}

export default EachPerson
