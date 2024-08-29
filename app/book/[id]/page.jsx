"use client"

import Link from "next/link";
import { useState, useEffect } from "react";
import PdfViewer from "../../main_components/PdfViewer";
import Image from "next/image";
import { useAppContext } from "../../../context";
import axiosInstance from "../../../utils/axiosInstance";
import Book from "../../main_components/epub";
import { usePathname, useRouter } from "next/navigation";
import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
    TableFooter
  } from "../../../components/ui/table"



const base_URL = "http://10.10.73.31:4000"

const Page = ({params}) => {
    const router = useRouter();
    

    const {
        toggleUp,
        readBook,
        setReadBook,
    } = useAppContext()
    const [book, setBook] = useState({});
    const [error, setError] = useState(null)

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
                `/api/books/${params.id}/`,
                {
                    headers: headers
                  }
            );
            setBook(response.data);
            console.log(response.data)
            //next bilen previous galdy
        } catch (err) {
            setError(err);
            console.log(error)
        }
        }
        fetchData();
    }, []);


    return (
    <>
        <div className={`flex flex-col items-center w-full ${!toggleUp ? "mt-[50px]" : "mt-[90px]"}`}>
            <div className="flex flex-col md:flex-row w-full md:items-start md:justify-center">
                <div className="flex flex-col items-center">
                        <div className="overflow-hidden object-cover object-center bg-white h-[400px] w-[300px] flex items-center justify-center rounded-md md:mt-[18px]">
                        <Image 
                            alt="Umumy kitap surat"
                            height={390}
                            width={270}
                            src={book["get_image"] ? `${base_URL}${book["get_image"]}` : "/kitap.png"}
                            className="object-cover object-center overflow-hidden"
                    />
                    </div>
                    <div className="flex justify-around w-[300px] mt-[20px] items-center">
                    <button className="flex flex-col items-center" onClick={()=> {downloadFileAtURL(`${base_URL}${book["get_book"]}`)}}>
                        <i class="fas fa-download text-blue-500 text-[20px] mb-[2px]"></i>
                        <span className="font-bold text-[14px] text-blue-500">
                        Ýükle ýa-da oka
                        </span>
                    </button>
                    <Link 
                        className="flex flex-col items-center" 
                        href={{ 
                            pathname : book["get_book_ext"] === ".pdf" ? `bookReaderPDF${book["get_book"]}` :  `bookReaderEPUB${book["get_book"]}`
                    
                    }}
                    >
                        <i class="fas fa-book text-blue-500 text-[20px] mb-[2px]"></i>
                        <span className="font-bold text-[14px] text-blue-500">
                        Kitaby oka
                        </span>
                    </Link>
                    </div>
                </div>
                <div className="flex flex-col mb-[180px] md:ml-[40px]">
                    <div className='flex items-center'>
                        <div className="flex flex-col mx-[30px] md:ml-[25px] mt-[10px] flex-1 px-[16px]  md:w-[400px] justify-center  sm:ml-[35px] ">
                            <p className="md:mt-[10px] mt-[20px]   font-custom-sans font-semibold text-[34px] md:text-[45px] self-center md:self-start md:ml-[14px] md:mb-[10px]">
                                {book["title"]}
                            </p>
                            <p className="font-custom-sans font-semibold text-[18px] self-start ml-[16px] md:self-start text-gray-500 mt-[20px]">
                                {book["published_at"]}
                            </p>
                            <Table className="table-auto  mt-[15px] sm:max-w-[500px] ">
                                <TableBody>
                                    <TableRow>
                                        <TableCell className='custom-table-td-main-book-1'>
                                            DILI:
                                        </TableCell>
                                        <TableCell className='custom-table-td-main-book-1'>
                                        {book?.["language"]}
                                        </TableCell>
                                    </TableRow>
                                    <TableRow>
                                        <TableCell className='custom-table-td-main-book-1'>
                                            AWTOR:
                                        </TableCell>
                                        <TableCell className='custom-table-td-main-book-1'>
                                            {book["author"] && (<span>{book["author"]["name"]}</span>)}
                                        </TableCell>
                                    </TableRow>
                                    <TableRow>
                                        <TableCell className='custom-table-td-main-book-1'>
                                            Žanr:
                                        </TableCell>
                                        <TableCell className='custom-table-td-main-book-1'>
                                            {book["genre"] && (<span>{book["genre"]["name"]}</span>)}
                                        </TableCell>
                                    </TableRow>
                                    <TableRow>
                                        <TableCell className='custom-table-td-main-book-1'>
                                            SAHYPA:
                                        </TableCell>
                                        <TableCell className='custom-table-td-main-book-1'>
                                            yok
                                        </TableCell>
                                    </TableRow>
                                    <TableRow>
                                        <TableCell className='custom-table-td-main-book-1'>
                                            FORMATY:
                                        </TableCell>
                                        <TableCell className='custom-table-td-main-book-1'>
                                            {book["get_book_ext"]}
                                        </TableCell>
                                    </TableRow>
                                    <TableRow>
                                        <TableCell className='custom-table-td-main-book-1'>
                                            GÖWRÜMI:
                                        </TableCell>
                                        <TableCell className='custom-table-td-main-book-1'>
                                            {book["get_book_size"]}
                                        </TableCell>
                                    </TableRow>

                                </TableBody>
                            </Table>
                            <div className="bg-gray-200 mt-[30px] p-3 rounded-md font-custom-sans font-semibold md:hidden">
                                {book["description"]}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="bg-gray-200 p-3 
                rounded-md font-custom-sans font-semibold 
                md:block hidden flex-1 w-[700px]">
                {book["description"]}
            </div>
        </div>
    </>
    );
};
export default Page;







