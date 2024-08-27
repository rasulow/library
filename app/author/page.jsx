"use client"
import Link from "next/link"
import Image from "next/image"
import { useEffect, useState } from "react"
import { useAppContext } from "../../context"
import axiosInstance from "@/utils/axiosInstance"

const base_URL = "http://10.10.73.31:4000"

const Author = () => {
    const {
        toggleLeft,
        toggleUp,
        toggleSearch,
    } = useAppContext();

    

    const [authors, setAuthors] = useState([]);
    const [count, setCount] = useState(0)
    const [error, setError] = useState(null)
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
            setCount(response.data.count);
            //next bilen previous galdy
        } catch (err) {
            setError(err);
            console.log(error)
        }
        }
        fetchData();
    }, [text]);

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
                `/api/authors/?page=${currentPage}`,
                {
                    headers: headers
                  }
            );
            setAuthors(response.data.results);
            setCount(response.data.count)
            console.log(response.data)
        } catch (err) {
            setError(err);
            console.log(error)
        }
        }
        fetchData();
    }, [currentPage]);

    



    const allAuthors = authors.map(author => {
        return (
            <div className='flex flex-col items-center bg-white w-[170px] p-3 rounded-md'>
                <div className="h-[170px] w-[145px] flex overflow-hidden self-center rounded-md">
                    <Image
                        alt="check surat kitap"
                        src={author["get_image"] ? `${base_URL}${author["get_image"]}` : "/profile-img.png"}
                        height={170}
                        width={145}
                        className="object-cover object-center contain center"
                    />
                </div>
                <Link 
                    href={`/author/${author["id"]}`}
                    className="mt-[15px] font-custom-sans font-semibold text-[16px] leading-6 whitespace-nowrap overflow-hidden text-ellipsis"
                >
                     { (author["name"]?.length > 14) ? author["name"].slice(0, 14) + '...' : author["name"] }
                </Link>
                {/* <p className="text-blue-500">
                    
                </p> */}
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
                        placeholder="Awtor gözle..."
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
            <div className={toggleLeft ? `flex-col flex-1 ${toggleUp ? "mt-[85px]" : "mt-[30px]"}` : `flex-col flex-1 m-2   ${toggleUp ? "mt-[80px]" : "mt-[30px]"}`}>
                <div className="mx-[7px] max-h-[715px] flex flex-col items-center pb-[60px]">  
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
                    <div className='grid grid-cols-2 md:grid-cols-4 sm:grid-cols-3  lg:grid-cols-5 xl:grid-cols-6  gap-4 mt-[40px]'>
                        {allAuthors}
                    </div>
                </div>
            </div>
        </div>
    )
    }

export default Author
