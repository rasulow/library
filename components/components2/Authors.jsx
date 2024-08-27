"use client"

import axiosInstance from "../../utils/axiosInstance"
import { useState, useEffect } from 'react';
import { useAppContext } from "../../context";
import Link from "next/link";

const Authors = () => {
    const {
        setToggleLeft,
        toggleUp,
    } = useAppContext();
    const [authors, setAuthors] = useState([]);
    const [error, setError] = useState(null)

    useEffect(() => {
        async function fetchData() {
        try {
            const headers = {
                'Authorization': `Bearer ${localStorage.getItem('token')}`,
                'Content-Type': 'application/json'
              };
            const response = await axiosInstance.get(
                '/api/authors/',
                {
                    headers: headers
                  }
            );
            setAuthors(response.data.results);
            console.log(response.data)
        } catch (err) {
            setError(err);
            console.log(error)
        }
        }
        fetchData();
    }, []);


    console.log(authors)
    
    const  allAuthors = authors?.map(author => {
        return (
            <Link 
                href={`/author/${author.id}`} 
                className='font-semibold'
                onClick={()=> setToggleLeft(false)}
            >
                {author.name}
            </Link>
        )
    })
    
    return (
    <div>
        <div className = "flex gap-1 p-2 h-[40px] bg-slate-200 items-center">
            <p>poisk</p>
            <input className="px-2 w-full shadow-inner border-slate-300 border-[2px] rounded-md h-[30px]" />
            <button className="mx-[5px]"><i class="fas fa-search"></i></button>
        </div>
        <div className={toggleUp ? "flex flex-col h-[76vh] shadow-inner p-2 border-[1px] border-slate-600 bg-white mr-[8px] mt-[10px] overflow-y-scroll" : "flex flex-col h-[82vh] shadow-inner p-2 border-[1px] border-slate-600 bg-white mr-[8px] mt-[10px] overflow-y-scroll"} >
            {allAuthors}
        </div>
    </div>
    )
}

export default Authors
