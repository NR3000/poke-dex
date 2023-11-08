"use client"

import { useState, useRef, useEffect } from 'react';
// import './SportInteractiveInterview.css';

// import Axois from 'axios';
import PlayerCard from './PlayerCard';

let backupResult = []

function SportInteractiveInterview() {

    const [result, setResult] = useState([])
    const search = useRef(null)

    const handleSearch = () => {
        try {
            let pattern = new RegExp(search.current.value, 'i')
            let newResult = []
            backupResult.forEach(
                ele => {
                    if (pattern.test(ele.PFName) || pattern.test(ele.TName)) {
                        newResult.push(ele)
                    }
                }
            )
            newResult = newResult.sort((a, b) => a.Value - b.Value)
            setResult(newResult)
        }
        catch (e) {
            console.log(e.message)
            setResult([])
        }
    }

    useEffect(
        () => {
            fetch("https://api.npoint.io/20c1afef1661881ddc9c", { method: "GET", headers: { "content-type": "application/json" } }).
            then((res) => res.json()).
            then((res) => {
                let sortedResult = res?.playerList?.sort((a, b) => a.Value - b.Value)
                backupResult = sortedResult
                // console.log(backupResult)
                console.log(res)
                setResult(backupResult)
            })
        }
        , [])

    return (
        <div className="flex flex-col w-full gap-4 p-2">
            <div className='px-2'>
                <input type='search' className='px-4 py-2 rounded-md' onChange={() => handleSearch()} placeholder='Search your player...' ref={search} />
            </div>
            {
                result.length === 0 ?
                    <div className='alert-msg text-white w-full text-center'>No result found</div>
                    :
                    <div className='grid bg-neutral-100 items-stretch gap-4 grid-cols-5 w-full h-[calc(100vh_-_7.5rem)] overflow-auto p-2'>
                        {result?.map(
                            (playerData, index) => <PlayerCard playerData={playerData} key={index} />
                        )}
                    </div>
            }
        </div>
    );
}

export default SportInteractiveInterview;
