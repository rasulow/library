"use client"
import Link from "next/link"
import Image from "next/image"
import { useEffect, useState } from "react"
import { useAppContext } from "../context"
import axiosInstance from "../utils/axiosInstance";
import { useRouter, usePathname } from "next/navigation"



const base_URL = 'http://10.10.73.31:4000'

const Home = () => {
    const router = useRouter()
    const pathname = usePathname();

    useEffect(() => {
        const isLoggedIn = localStorage.getItem('token'); 
        if (!isLoggedIn) {
        router.push('/auth/login');
        }
    }, [router]);
    
    const {
        toggleLeft,
        toggleUp,
        toggleSearch,
        countLiked,
        setCountLiked,
    } = useAppContext();
    const [books, setBooks] = useState([]);
    const [count, setCount] = useState(0);
    const [error, setError] = useState(null);
    const [id, setId] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages, setTotalPages] = useState(11);
    const [pagesToShow, setPageToShow] = useState(5);
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

    

    useEffect(()=> {
        if (count%10 !== 0) {
            setTotalPages(parseInt(count/10)+1);
        } else {
            setTotalPages(parseInt(count/10))
        }
    }, [count]
    )
    
    useEffect(() => {
        async function fetchData() {
        try {
            const headers = {
                'Authorization': `Bearer ${localStorage.getItem('token')}`,
                'Content-Type': 'application/json'
              };
            const response = await axiosInstance.get(
                `/api/books/?search=${text}`,
                {
                    headers: headers
                  }
            );
            setBooks(response.data.results);
            setCount(response.data.count);
            //next bilen previous galdy
        } catch (err) {
            setError(err);
            console.log(error)
        }
        }
        fetchData();
    }, [text]);

    const handlePageClick = (page) => {
        setCurrentPage(page);
      };

      const renderPageButtons = () => {
        const pageButtons = [];
        const startPage = Math.max(1, currentPage - Math.floor(pagesToShow / 2));
        const endPage = Math.min(totalPages, startPage + pagesToShow - 1);
        
        if (startPage > 1) {
            pageButtons.push(
              <button
                key="start-dots"
                className="bg-gray-200 text-gray-700 px-4 py-2 mx-1 cursor-default"
                disabled
              >
                ...
              </button>
            );
          }
  
        for (let i = startPage; i <= endPage; i++) {
          pageButtons.push(
            <button
              key={i}
              className={`bg-gray-200 text-gray-700 px-4 py-2 mx-1 ${
                currentPage === i ? 'bg-green-500 text-white' : ''
              }`}
              onClick={() => handlePageClick(i)}
            >
              {i}
            </button>
          );
        }
        return pageButtons;
      };
      
      const handlePrevPage = () => {
          if (currentPage > 1) {
            setCurrentPage(currentPage - 1);
          }
        };
      
        const handleNextPage = () => {
          if (currentPage < totalPages) {
            setCurrentPage(currentPage + 1);
          }
        };
      
  
      console.log(currentPage)
      useEffect(() => {
          async function fetchData() {
          try {
              const headers = {
                  'Authorization': `Bearer ${localStorage.getItem('token')}`,
                  'Content-Type': 'application/json'
                };
              const response = await axiosInstance.get(
                  `/api/books/?page=${currentPage}`,
                  {
                      headers: headers
                    }
              );
              setBooks(response.data.results);
              setCount(response.data.count);
              //next bilen previous galdy
          } catch (err) {
              setError(err);
              console.log(error)
          }
          }
          fetchData();
      }, [currentPage]);

    const downloadFileAtURL = (url) => {
        const fileName = url.split("/").pop();
        const aTag = document.createElement("a");
        aTag.href = url
        aTag.setAttribute("download", fileName);
        document.body.appendChild(aTag);
        aTag.click();
        aTag.remove();
    }

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
                <div className="h-[120px] flex w-[95px] overflow-hidden rounded-md">
                    <Image
                        alt="check surat kitap"
                        src={`${base_URL}${book["get_image"]}`}
                        height={120}
                        width={95}
                        className="object-cover object-center rounded-md"
                    />
                </div>
                <div className="flex flex-col ml-[3px] px-[8px] h-[120px] w-[170px] justify-between">
                    <div>
                        <Link href={`/book/${book["id"]}`} className="font-custom-sans w-[100px] whitespace-nowrap overflow-hidden leading-6 text-ellipsis font-semibold text-[16px] ">
                             { (book["title"]?.length > 16) ? book["title"].slice(0, 16).toLowerCase().charAt(0).toUpperCase() + book["title"].slice(0, 16).toLowerCase().slice(1) + '...' : book["title"] }
                        </Link>
                        <table className="table-auto  mt-3 w-full h-[50px] overflow-hidden">
                        <tbody>
                                <tr>
                                    <td className='custom-table-td-main-book-card'>
                                        AWTOR:
                                    </td>
                                    <td className='custom-table-td-part-book-card'>
                                        { (book["author"]["name"]?.length > 12) ? book["author"]["name"].slice(0, 12) + '...' : book["author"]["name"] }
                                    </td>
                                </tr>
                                <tr>
                                    <td className='custom-table-td-main-book-card'>
                                        Žanr:
                                    </td>
                                    <td className='custom-table-td-part-book-card'>
                                        { (book["genre"]["name"]?.length > 12) ?book["genre"]["name"].slice(0, 12) + '...' : book["genre"]["name"] }  
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                        </div>
                        <div className="flex items-center justify-between">
                            {/* <div>
                                <button className="px-1">
                                    <i class="fas fa-thumbs-down text-blue-400"></i>
                                </button>
                                <button className="px-1">
                                    <i class="fas fa-thumbs-down transform rotate-180 text-blue-400"></i>
                                </button>
                            </div> */}
                        <div className="flex items-center">
                            <button className="mb-[2px] mr-[3px]" onClick={() => {
                                setId(book["id"])
                                setCountLiked(count=>count+1)
                                }}>
                                <Image  
                                    src="/Image/liked.png"
                                    alt="liked things"
                                    width={25}
                                    height={25}
                                />
                            </button>
                            <button className="px-1" onClick={()=> {downloadFileAtURL(`${base_URL}${book["get_book"]}`)}}>
                                <i class="fas fa-download text-blue-500"></i>    
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        )
    })

    return (
        <div className="flex flex-col w-full ">
            <div className={toggleSearch ? `flex flex-col self-center w-full  mt-[44px] mb-[-35px] ` : "hidden"}>
            { toggleSearch &&
                    (<div>
                    <form onSubmit={onSubmit} className="bg-gray-200 p-5">
                        <input
                        type="text"
                        name="text"
                        placeholder="Kitap gözle..."
                        value={text}
                        onChange={onChange}
                        className="bg-white p-2 w-5/6 outline-none"
                        />
                        <button type="submit" className="p-2 text-center text-blue-500 w-1/6 bg-white border-l">
                            <i class="fas fa-search"></i>
                        </button>
                    </form>
                    </div>
                    )}
            </div>

            <div className={toggleLeft ? `flex flex-col items-center flex-1 ${toggleUp ? "mt-[85px]" : "mt-[30px]"}` : `flex flex-col flex-1 m-2 items-center   ${toggleUp ? "mt-[80px]" : "mt-[30px]"}`}>
                <div className = "flex p-2 h-[40px] mt-[25px]  items-center">
                    <div className="flex justify-center mt-5">
                        <button
                        className={`bg-gray-200 text-gray-700 px-4 py-2 mx-1 ${
                            currentPage === 1 ? 'opacity-50 cursor-not-allowed' : ''
                        }`}
                        onClick={handlePrevPage}
                        disabled={currentPage === 1}
                        >
                        Öňki
                        </button>
                        {renderPageButtons()}
                        <button
                        className={`bg-gray-200 text-gray-700 px-4 py-2 mx-1 ${
                            currentPage === totalPages ? 'opacity-50 cursor-not-allowed' : ''
                        }`}
                        onClick={handleNextPage}
                        disabled={currentPage === totalPages}
                        >
                        Indiki
                        </button>
                    </div>
                </div>  
                <div className='grid sm:grid-cols-2  lg:grid-cols-3 xl:grid-cols-4  gap-4 mt-[40px]'>  
                    {...allBooks}
                </div>
            </div>       
        </div>
    )
    }

export default Home

// import { useState, useEffect } from 'react';
// import axios from 'axios';

// const ItemList = () => {
//   const [items, setItems] = useState([]);
//   const [currentPage, setCurrentPage] = useState(1);
//   const [totalPages, setTotalPages] = useState(0);

//   useEffect(() => {
//     const fetchItems = async () => {
//       try {
//         const response = await axios.get(`/api/items?page=${currentPage}&page_size=10`);
//         setItems(response.data.results);
//         setTotalPages(Math.ceil(response.data.count / 10));
//       } catch (error) {
//         console.error('Error fetching items:', error);
//       }
//     };
//     fetchItems();
//   }, [currentPage]);
//};

// return (
//     <div>
//       <ul>
//         {items.map((item) => (
//           <li key={item.id}>{item.name}</li>
//         ))}
//       </ul>
//       <div>
//         {Array.from({ length: totalPages }, (_, index) => index + 1).map((page) => (
//           <button
//             key={page}
//             onClick={() => setCurrentPage(page)}
//             disabled={currentPage === page}
//           >
//             {page}
//           </button>
//         ))}
//       </div>
//     </div>
//   );

