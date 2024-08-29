"use client"
import Link from "next/link"
import Image from "next/image"
import { useEffect, useState } from "react"
import { useAppContext } from "../../context"
import axiosInstance from "@/utils/axiosInstance"

const base_URL = "http://10.10.73.31:4000"

const Genre = () => {
    const {
        toggleLeft,
        toggleUp,
    } = useAppContext();

    

    const [genres, setGenres] = useState([]);
    const [error, setError] = useState(null)
    const [count, setCount] = useState(0)
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

    useEffect(() => {
        async function fetchData() {
        try {
            const headers = {
                'Authorization': `Bearer ${localStorage.getItem('token')}`,
                'Content-Type': 'application/json'
              };
            const response = await axiosInstance.get(
                `/api/genres/?page=${currentPage}`,
                {
                    headers: headers
                  }
            );
            setGenres(response.data);
            setCount(response.data.count)
        } catch (err) {
            setError(err);
            console.log(error)
        }
        }
        fetchData();
    }, [currentPage]);

    



    const allGenres = genres.map(genre => {
        return (
            <div className='flex flex-col items-center bg-white w-[170px] p-3 rounded-md'>
                <div className="h-[170px] w-[145px] flex overflow-hidden rounded-md">
                    <Image
                        alt="check surat kitap"
                        src={`/genre/${genre["id"]}.png`}
                        height={170}
                        width={145}
                        className="object-cover object-center"
                    />
                </div>
                <Link 
                    href={`/genre/${genre["id"]}`}
                    className="mt-[15px] font-custom-sans font-semibold text-[16px] leading-6 whitespace-nowrap overflow-hidden text-ellipsis"
                >
                    { (genre["name"]?.length > 14) ? genre["name"].slice(0, 14) + '...' : genre["name"] }
                </Link>
                {/* <p className="text-blue-500">
                    kitap sany
                </p> */}
            </div>
        )
    })
    return (
        <div className={toggleLeft ? `flex-col flex-1 ${toggleUp ? "mt-[85px]" : "mt-[30px]"}` : `flex-col flex-1 m-2   ${toggleUp ? "mt-[80px]" : "mt-[30px]"}`}>
            <div className="mx-[7px] max-h-[715px] flex flex-col items-center pb-[60px]">  
                <div className='grid grid-cols-2 md:grid-cols-4 sm:grid-cols-3  lg:grid-cols-5 xl:grid-cols-6  gap-4 mt-[40px]'>
                    {allGenres}
                </div>
            </div>
        </div>
            
    )
    }

export default Genre
