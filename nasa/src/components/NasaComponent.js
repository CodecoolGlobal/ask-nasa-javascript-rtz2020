import React from 'react'
import { useState, useEffect } from 'react';

export default function NasaComponent(){

    const [photoData, setPhotoData] = useState(null);

    useEffect(() => {
        fetchPhoto();
        async function fetchPhoto(){
            const res = await fetch(
                'https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY'
            );
            const data = await res.json();
            setPhotoData(data);
    }
}, []);

if (!photoData) return <div />;

return(
<div>
    <img src={photoData.url} alt={photoData.title}/>
    <p>{photoData.title}</p>
    <p>{photoData.explanation}</p>
</div>
)

}