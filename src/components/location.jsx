import React, { useCallback, useState } from 'react'

export default function Location({ data, setData, error }) {
    return (
        <div>
            {data && !error ? <div className='border-dashed border-2 border-sky-200 p-2 mt-5'>
                {data.places.map((place, index) => <div key={index}>{index + 1}. {place["place name"]}, {place.state}, {data.country}
                    <a target="_blank" href={`https://maps.google.com?q=${place.latitude},${place.longitude}`}><button 
                    className="nxt-btn text-white bg-red-400 font-medium 
               mx-2 rounded-md text-lg px-3 py-1">Map</button></a>
                </div>)}
                { <button onClick={() => setData('')} className='bg-black text-white block ml-auto px-2 py-1 rounded-md mt-1
                 hover:bg-white hover:text-black active:opacity-60'>Clear Location</button>}
            </div> : error}
        </div>
    )



}
