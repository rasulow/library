"use client"


import { useAppContext } from "@/context";
import axiosInstance from "@/utils/axiosInstance";
import Link from "next/link";
import { useEffect, useState } from "react";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination"
import Image from "next/image";

const base_URL = 'http://10.10.73.31:4000'

const Page = () => {
    const {
      toggleUp,
      setToggleLeft,
      toggleLeft,
  } = useAppContext();

  const [error, setError] = useState(null)
  const [count, setCount] = useState(0)
  const [books, setBooks] = useState([])
  const [id, setId] = useState(null)
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(11);
  const [pagesToShow, setPageToShow] = useState(5);

  useEffect(()=> {
    if (count%10 !== 0) {
        setTotalPages(parseInt(count/10)+1);
    } else {
        setTotalPages(parseInt(count/10))
    }
}, [count]
)

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
      try {
          const headers = {
              'Authorization': `Bearer ${localStorage.getItem('token')}`,
              'Content-Type': 'application/json'
              };
          const response = await axiosInstance.get(
              `/api/books/favourites/?page=${currentPage}`,
              {
                  headers: headers
                  }
          );
          setBooks(response.data.results);
          setCount(response.data.count);
      } catch (err) {
          setError(err);
          console.log(error)
      }
      }
      fetchData();
  }, [currentPage]);

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
            <div className="h-[120px] w-[95px] flex overflow-hidden rounded-md">
                <Image
                    alt="check surat kitap"
                    src={`${base_URL}${book["book"]["get_image"]}`}
                    height={120}
                    width={95}
                    className="object-cover object-center"
                />
            </div>
            <div className="flex flex-col ml-[3px] px-[8px] h-[120px] w-[170px]">
            <Link href={`/book/${book["book"]["id"]}`} className="font-custom-sans  whitespace-nowrap overflow-hidden text-ellipsis font-semibold text-[16px] leading-6 pb-6">
                { (book["book"]["title"]?.length > 16) ? book["book"]["title"].slice(0, 16).toLowerCase().charAt(0).toUpperCase() + book["book"]["title"].slice(0, 16).toLowerCase().slice(1) + '...' : book["book"]["title"] }
                        </Link>
                <table className="table-auto  mt-3 w-full">
                <tbody>
                                <tr>
                                    <td className='custom-table-td-main-book-card'>
                                        AWTOR:
                                    </td>
                                    <td className='custom-table-td-part-book-card'>
                                        { (book["book"]["author"]["name"]?.length > 12) ? book["book"]["author"]["name"].slice(0, 12) + '...' : book["book"]["author"]["name"] }
                                    </td>
                                </tr>
                                <tr>
                                    <td className='custom-table-td-main-book-card'>
                                        Žanr:
                                    </td>
                                    <td className='custom-table-td-part-book-card'>
                                        { (book["book"]["genre"]["name"]?.length > 12) ?book["book"]["genre"]["name"].slice(0, 12) + '...' : book["book"]["genre"]["name"] }  
                                    </td>
                                </tr>
                            </tbody>
                        </table>
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
                        <button className="mb-[2px] mr-[3px]" onClick={() => setId(book["book"]["id"])}>
                            <Image  
                                src="/Image/liked.png"
                                alt="liked things"
                                width={25}
                                height={25}
                            />
                        </button>
                        <button className="px-1" onClick={()=> {downloadFileAtURL(`${base_URL}${book["book"]["get_book"]}`)}}>
                            <i class="fas fa-download text-blue-500"></i>    
                        </button>
                    </div>
                </div>
            </div>
        </div>
      )
  })
  return (
    <div className={toggleLeft ? `flex flex-col flex-1 items-center ${toggleUp ? "mt-[85px]" : "mt-[30px]"}` : `flex flex-col items-center flex-1 m-2   ${toggleUp ? "mt-[80px]" : "mt-[30px]"}`}>
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
  )
}

export default Page