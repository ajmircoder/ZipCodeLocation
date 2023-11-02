import React, { useEffect, useState } from 'react'
import Location from './location';

export default function Code() {
    const [data, setData] = useState();
    const [pinCode, setPinCode] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState('');
    const getData = () => {
        if (!pinCode) return
        setData('');
        setIsLoading(true);
        setError('');
        fetch(`https://api.zippopotam.us/in/${pinCode}`)
            .then(res => res.json())
            .then(data => {
                if (Object.keys(data).length) setData(data);
                else setError("Match not found")
                setIsLoading(false);
            })
    }
    return (
        <div className='body p-10 lg:p-40'>
        <div className='text-center bg-gray-600 text-white p-4 text-3xl rounded-md '>
            <h1>Please enter Zip Code</h1>
            <div>
                <input className='text-black px-1 w-full md:w-2/4 xl:w-1/4 ' type="text"
                    onChange={(e) => {
                        setPinCode(e.target.value);
                    }} />
                <button onClick={() => getData()} className=' bg-yellow-500 py-0 m-3 px-2 text-black rounded-md active:opacity-70 hover:text-white'>Submit</button>
            </div>
            {isLoading ? <div className='loader'></div> : ""}
            <Location error={error} data={data} setData={setData} />
        </div>
        </div>
    )
}
