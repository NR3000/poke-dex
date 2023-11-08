"use client"

import React, { useState, useRef } from "react";
import "./PrimeNumbers.css";

const PrimeNumber = () => {
    const [result, setResult] = useState([]);
    const inputValue = useRef(null);

    function printResult(num) {
        let arr = [
            <div className="bg-neutral-950 text-center text-slate-400" key={1}>
                1
            </div>,
        ];
        for (let i = 2; i <= num; i++) {
            var counter = 0;
            for (let j = 1; j <= i; j++) {
                // console.log( i + " / " + j + " = " +(i % j));
                if (i % j === 0) {
                    counter = counter + 1;
                }
            }
            if (counter < 3) {
                arr.push(
                    <div className="bg-slate-900 text-center text-slate-400" key={i}>
                        {i}
                    </div>
                );
            } else {
                arr.push(
                    <div className="bg-neutral-950 text-center text-slate-400" key={i}>
                        {i}
                    </div>
                );
            }
        }
        setResult(arr);
    }

    return (
        <div className="w-full flex flex-col h-full overflow-auto bg-slate-950">
            <div className="bg-slate-800 w-full inline-flex justify-center p-2 gap-4">
                <header className="text-slate-300">Prime Numbers:</header>
                <input
                    type="text"
                    ref={inputValue}
                    className="px-2 py-1 text-sm font-medium bg-slate-700 rounded-md text-slate-400 outline-none w-96 shadow-none hover:shadow=[0_0_0_1px] hover:shadow-white"
                    placeholder="Enter number till you want to view prime numbers."
                />
                <button
                    className="px-8 py-1 text-sm font-medium bg-slate-700 rounded-sm text-slate-950"
                    onClick={() => {
                        printResult(inputValue.current.value);
                    }}
                >
                    Get it!
                </button>
            </div>
            {result.length === 0 ? (
                <div className="note">
                    <p className="text-slate-100 w-full text-center p-8 text-xl">
                        Note: Enter big numbers only if your system is capable of that much
                        calculation. Max you can try of 20,000
                    </p>
                </div>
            ) : (
                <div className="grid grid-cols-12 gap-px bg-slate-700 p-px" >{result}</div>
            )}
        </div>
    );
}

export default PrimeNumber