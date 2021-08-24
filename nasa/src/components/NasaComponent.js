import React from 'react'
import { useState, useEffect } from 'react';
import {    useParams  } from "react-router-dom";

export default function NasaComponent(){

    const [photoData, setPhotoData] = useState(null);
    const date = ""

    useEffect(() => {
        fetchPhoto();
        async function fetchPhoto(){
            const res = await fetch(
                'https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY&date=' + window.location.href.split("/?date=")[1]
            );
            const data = await res.json();
            setPhotoData(data);
    }
}, []);

if (!photoData) return <div />;

return(
<div>
    {photoData.media_type == "image" ? (
    <img src={photoData.url} alt={photoData.title}/>) : (
    <iframe
        title="space-video"
        src={photoData.url}
        frameBorder='0'
        gesture="media"
        allow="encrypted-media"
        allowFullScreen
        className="photo"
    />)}
    <p>{photoData.title}</p>
    <p>{photoData.explanation}</p>
    <form action="/" method="GET">
    <input type="text" name="date" ></input>
    <button type="submit" onClick={(e) => this.date = this.document.getbyName("date").value}>Change date</button>
    </form>
</div>
)

}