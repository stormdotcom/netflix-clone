import React, {useEffect, useState} from 'react'
import "./News.css"
import axios from "../../axios"
// import axios from "axios"



function News(props) {
  
    const [news, setNews] = useState([])
    useEffect(() => {
        axios.get(props.url).then((res)=>{
                setNews(res.data.sources)
              
            })
        
    
    }, []);

function handleClick(url) {
    return window.open(url, '_blank').focus();
}
    return ( 
        <div className="news-row" id={props.id}>
            <h3 className="news-title fw-bolder"> {props.title} </h3>
            <div className="row d-flex align-items-center justify-content-center" >
            {news.map((each, index)=> {
                return ( <div className="header col-lg-3" key={index} >
                        <img className="poster" alt="" />
                        <p onClick={()=>handleClick(each.url)}>{ each.description} </p>
                        <small onClick={()=>handleClick(each.url)}> #{each.id}</small>
                
                     </div> );
            } 
    )}
            </div>

        </div>
     
    )
}

export default News;
