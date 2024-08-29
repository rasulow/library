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
    const [error, setError] = useState(null);
    const [text, setText] = useState("");

    const onSubmit = evt => {
      evt.preventDefault();
      if (text === "") {
        alert("Please enter something!");
      } else {
        alert(text);
        setText("");
      }
    };
  
    const onChange = evt => setText(evt.target.value);

    useEffect(() => {
        async function fetchData() {
        try {
            const headers = {
                'Authorization': `Bearer ${localStorage.getItem('token')}`,
                'Content-Type': 'application/json'
              };
            const response = await axiosInstance.get(
                `/api/authors/?search=${text}`,
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
    }, [text]);


    console.log(authors)
    
    const  allAuthors = authors?.map(author => {
        return (
            <Link 
                href={`/author/${author.id}`} 
                className='font-semibold'
                onClick={()=> setToggleLeft(false)}
            >
            <li
          key={author["id"]}
          className={`
            flex
            border-b-[1px]
            border-white
            items-center
            p-3
            text-[14px]
            bg-gray-100
            dark:bg-gray-800
            hover:bg-gray-200
            dark:hover:bg-gray-700
            transition-colors
            duration-300
          `}
        >
                {author.name}
            </li>
            </Link>
        )
    })
    
    
    return (
        <div className="mr-[1px]">
            <div className = "flex gap-1 p-1 h-[40px] bg-slate-200 items-center">
                
                <input 
                    type="text"
                    name="text"
                    placeholder="Awtor gözle..."
                    value={text}
                    onChange={onChange} 
                    className="px-2 w-full shadow-inner border-slate-300 border-[2px] rounded-md h-[30px]" 
                />
                <button className="mx-[7px]"><i class="fas fa-search"></i></button>
            </div>
            <div className={toggleUp ? "flex flex-col h-[76vh] p-[1px] pr-[4px] shadow-inner border-[1px] border-slate-600 bg-gray-800 mr-[8px] mt-[10px] overflow-y-scroll" : "flex flex-col h-[82vh] shadow-inner p-[1px] pr-[4px] border-[1px] border-slate-600 bg-gray-800 mr-[8px] mt-[10px]  overflow-y-scroll"} >
            <ul
                className={`
                text-gray-800
                dark:text-gray-200
                pl-[1px]
                pt-[1px]
                `}
            >
                {allAuthors}
                </ul>
            </div>
        </div>
    )
}

export default Authors
