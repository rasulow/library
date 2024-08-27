"use client"
import Link from "next/link"
import Image from "next/image"
import { useEffect, useState } from "react"
import { useAppContext } from "../../../context"
import axiosInstance from "@/utils/axiosInstance"

const base_URL = 'http://10.10.73.31:4000'

const Series = ({params}) => {
    const {
        toggleLeft,
        toggleUp,
    } = useAppContext();
    const [series, setSeries] = useState({});
    const [error, setError] = useState(null);
    const [books, setBooks] = useState([]);
    const [count, setCount] = useState(0)
    const [id, setId] = useState(false)

    useEffect(() => {
        async function fetchData() {
        try {
            const headers = {
                'Authorization': `Bearer ${localStorage.getItem('token')}`,
                'Content-Type': 'application/json'
              };
            const response = await axiosInstance.get(
                `/api/books/by-author/${params.id}`,
                {
                    headers: headers
                  }
            );
            setSeries(response.data);
            setCount(response.data.count)
            setBooks(response.data.results)
            console.log(response.data)
        } catch (err) {
            setError(err);
            console.log(error)
        }
        }
        fetchData();
    }, []);

    useEffect(() => {
        async function fetchData() {
            const headers = {
                'Authorization': `Bearer ${localStorage.getItem('token')}`,
                'Content-Type': 'application/json'
              };
        try {
            const response = await axiosInstance.post(
                `/api/books/favourites/add`, {'book_id': id},
                {
                    headers: headers
                  }
            );
            console.log(response.data)
            //next bilen previous galdy
        } catch (err) {
            setError(err);
            console.log(error)
            console.error('Error response:', err.response);
        }
        }
        if (id) { 
            fetchData();
        }
    }, [id]);

    const allBooks = books.map(book => {
        return (
            <div className='flex items-center bg-white w-[280px] p-3 rounded-md'>
                <div className="h-[120px] w-[95px] overflow-hidden rounded-md">
                    <Image
                        alt="check surat kitap"
                        src={`${base_URL}${book["get_image"]}`}
                        height={120}
                        width={95}
                        className="object-cover object-center"
                    />
                </div>
                <div className="flex flex-col ml-[3px] px-[8px] h-[120px] w-[170px]">
                    <Link href={`/book/${book["id"]}`} className="font-custom-sans font-semibold text-[16px]">
                        {book["title"]}
                    </Link>
                    <table className="table-auto  mt-3 w-full">
                        <tbody>
                            <tr>
                                <td className='custom-table-td-main-book-card'>
                                    DILI:
                                </td>
                                <td className='custom-table-td-part-book-card'>
                                    {book["author"]["biography"]}
                                </td>
                            </tr>
                            <tr>
                                <td className='custom-table-td-main-book-card'>
                                    AWTOR:
                                </td>
                                <td className='custom-table-td-part-book-card'>
                                    {book["author"]["name"]}
                                </td>
                            </tr>
                            <tr>
                                <td className='custom-table-td-main-book-card'>
                                    Žanr:
                                </td>
                                <td className='custom-table-td-part-book-card'>
                                    {book["genre"]["name"]}
                                </td>
                            </tr>
                        </tbody>
                    </table>
                    <div className="flex items-center justify-between">
                        <div>
                            <button className="px-1">
                                <i class="fas fa-thumbs-down text-blue-400"></i>
                            </button>
                            <button className="px-1">
                                <i class="fas fa-thumbs-down transform rotate-180 text-blue-400"></i>
                            </button>
                        </div>
                        <div className="flex items-center">
                            <button className="mb-[2px] mr-[3px]" onClick={()=> setId(book["id"])}>
                                <Image  
                                    src="/Image/liked.png"
                                    alt="liked things"
                                    width={25}
                                    height={25}
                                />
                            </button>
                            <button className="px-1">
                                <i class="fas fa-download text-blue-500"></i>    
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        )
    })

    return (
        <div className={toggleLeft ? `flex-col flex-1 ${toggleUp ? "mt-[85px]" : "mt-[30px]"}` : `flex-col flex-1 m-2   ${toggleUp ? "mt-[80px]" : "mt-[30px]"}`}>
            <div className="mx-[7px] max-h-[715px] flex-col ">  
                <div className="flex flex-col mt-[5px] md:justify-center">
                    <div className='flex mt-[10px] items-center'>
                        <div className="h-[185px] w-[145px] overflow-hidden rounded-md">
                            <Image
                                alt="check surat kitap"
                                src={"/kitap.png"}
                                height={185}
                                width={145}
                                className="object-cover object-center"
                            />
                        </div>
                        <div className="ml-[7px] mt-[7px] flex-1 px-[16px] h-[205px] ">
                            <p className=" font-custom-sans font-semibold text-[24px]">
                                {books[0] ? books[0]["author"]["name"] : "Author"}
                            </p>
                            <div className="table-auto mt-1 bg-gray-300 p-2 font-custom-sans font-semibold
                                    rounded-lg h-[150px] min-w-[220px] max-w-[420px]">
                                {books[0] ? books[0]["author"]["biography"] : "Author"}
                            </div>
                        </div>
                    </div>
                </div>
                <div className='grid sm:grid-cols-2 
                lg:grid-cols-3 xl:grid-cols-4  gap-4 mt-[40px]'
                >
                    {allBooks}
                </div>    
            </div>
        </div>
            
    )
    }

export default Series
