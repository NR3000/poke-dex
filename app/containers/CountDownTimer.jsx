"use client"
import React, { useEffect, useRef, useState } from 'react'

const CountDownTimer = () => {

    const [isPaused, setIsPaused] = useState(false)
    const [counterID, setCounterID] = useState(null)

    const mins = useRef(null)
    const secs = useRef(null)
    const minsInput = useRef(null)
    const secsInput = useRef(null)

    const pause = () => {
        // console.log(counterID + " paused called"); 
        clearInterval(counterID);
        // console.log(counterID + " paused after clearing") 
        setIsPaused(false)
    }

    let startMins, startSecs

    const start = (isStart) => {
        pause()
        if (minsInput.current.value === '' && secsInput.current.value === '') {
            return
        }
        setIsPaused(true)
        if (isStart) {
            let secsToMin = Math.floor(secsInput.current.value / 60)
            startMins = Number(minsInput.current.value) + secsToMin
            startSecs = secsInput.current.value - (secsToMin * 60)
            console.log(startMins)
            console.log(startSecs)
            mins.current.innerText = startMins < 10 && startMins >= 0? '0' + startMins : startMins
            secs.current.innerText = startSecs < 10 && startSecs >= 0? '0' + startSecs : startSecs
        }
        setCounterID(setInterval(() => {
            // console.log(counterID)
            // console.log("mins : " + mins.current.innerText + " sec: " + secs.current.innerText + " : " + (secs.current.innerTextsecond === '00' && mins.current.innerText === '00'))
            counter()
        }, 1000))
    }

    const counter = () => {
        let minutes = mins.current.innerText - 0
        let seconds = secs.current.innerText - 0
        if (minutes === 0 && seconds === 0) {
            pause()
            return 0
        }
        if (seconds === 0) {
            mins.current.innerText = minutes < 11 ? '0' + (minutes - 1) : minutes - 1
            secs.current.innerText = '59'
        }
        else {
            secs.current.innerText = seconds < 11 ? '0' + (seconds - 1) : seconds - 1
        }
    }

    const reset = () => {
        pause()
        mins.current.innerText = '00'
        secs.current.innerText = '00'
        minsInput.current.value = ''
        secsInput.current.value = ''
    }

    useEffect(
        () => {
            mins.current.innerText = '00'
            secs.current.innerText = '00'
        }
        , [])

    return (
        <div className='flex flex-col items-center justify-center w-full h-full border-solid border-e-red-100 gap-12 p-4 rounded-md'>
            <h1 className='text-4xl font-semibold text-indigo-100'>This was react question in uplers : Implement React JS</h1>
            <div className='inline-flex w-full gap-8 justify-center'>
                <input className='px-4 py-2 rounded-md text-white  bg-indigo-500/40 outline-none hover:shadow-[0_0_0_1px] shadow-neutral-50' placeholder='Enter Mins' ref={minsInput} />
                <input className='px-4 py-2 rounded-md text-white  bg-indigo-500/40 outline-none hover:shadow-[0_0_0_1px] shadow-neutral-50' placeholder='Enter Mins' ref={secsInput} />
            </div>
            <div className='inline-flex w-full gap-8 justify-center'>
                <button className='py-2 px-8 text-xl bg-indigo-500 rounded-md' onClick={() => start(true)}>Start/Restart</button>
                {
                    isPaused ?
                        <button className='py-2 px-8 text-xl bg-indigo-500 rounded-md' onClick={() => pause()}>
                            Pause
                        </button>
                        :
                        <button className='py-2 px-8 text-xl bg-indigo-500 rounded-md' onClick={() => start(false)}>
                            Resume
                        </button>
                }
                <button className='py-2 px-8 text-xl bg-indigo-500 rounded-md' onClick={() => reset()}>Reset</button>
            </div>
            <div className='text-9xl font-extrabold text-indigo-300'>
                <span ref={mins}></span>
                :
                <span ref={secs}></span>
            </div>
        </div>
    )
}

export default CountDownTimer