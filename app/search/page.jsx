"use client"

import { useEffect, useState } from "react";
import useDebounce from "./useDebounce";

export default function App() {
    const [search, setSearch] = useState("");
    const [data, setData] = useState([]);
    const debounceValue = useDebounce(search, 1000);

    useEffect(() => {
        console.log("useEffect run")
        fetch(`https://dummyjson.com/products/search?q=${debounceValue}`, {
            method: "GET",
            "content-type": "application/json"
        })
            .then((res) => res.json())
            .then((data) => setData(data.products));
    }, [debounceValue]);

    return (
        <div className="flex flex-col justify-center items-center w-full h-auto overflow-auto">
            <h1>Search</h1>
            <input
                type="text"
                className="border border-red-300"
                defaultValue={search}
                onChange={(e) => setSearch(e.target.value)}
            />
            {data.map((ele) => <div key={ele.title}>{ele.title}</div>)}
        </div>
    );
}