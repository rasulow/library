"use client"
import Link from "next/link"
import Image from "next/image"
import { useEffect } from "react"
import { useAppContext } from "../../context"

const MainBar = () => {
    const {
        toggleLeft,
        toggleUp,
    } = useAppContext();
    return (
        <div className={toggleLeft ? `flex-col flex-1 ${toggleUp ? "mt-[85px]" : "mt-[30px]"}` : `flex-col flex-1 m-2   ${toggleUp ? "mt-[80px]" : "mt-[30px]"}`}>
            <div className="mx-[7px] max-h-[715px] flex-col ">  
                <div className = "flex p-2 h-[40px] mt-2 items-center  sm:justify-end">
                    <ul className="flex h-[30px] bg-slate-200 pr-2 mt-[10px]">
                        <li>
                            <button 
                            className="custom-leftbar-button rounded-tl-md rounded-bl-md pl-[2px]"
                            onClick={() => setToggleSideBar(1)}
                            >
                            Awtor
                            </button>
                        </li>
                        <li>
                            <button 
                            className="custom-leftbar-button"
                            onClick={() => setToggleSideBar(2)}
                            >
                            serii
                            </button>
                        </li>
                        <li>
                            <button 
                            className="custom-leftbar-button"
                            onClick={() => setToggleSideBar(3)}
                            >
                            genre
                            </button>
                        </li>
                        <li>
                            <button 
                            className="custom-leftbar-button"
                            onClick={() => setToggleSideBar(4)}
                            >
                                poisk
                            </button>
                        </li>
                        <li>
                            <button 
                            className="custom-leftbar-button rounded-tr-md rounded-br-md pr-[2px]"
                            onClick={() => setToggleSideBar(5)}
                            >
                                gruppy
                            </button>
                        </li>
                    </ul>
                </div>
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
                            <p className="mt-[-6px] font-custom-sans font-semibold text-[24px]">
                                NAME OF AUTHOR
                            </p>
                            <p className="font-custom-sans text-[13px] font-semibold">2020</p>
                            <table className="table-auto mt-3 min-w-[420px]">
                                <tbody>
                                    <tr>
                                        <td className='custom-table-td-main-book'>
                                            DILI:
                                        </td>
                                        <td className='custom-table-td-part-book'>
                                            Inlis
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className='custom-table-td-main-book'>
                                            AWTOR:
                                        </td>
                                        <td className='custom-table-td-part-book'>
                                            Stephen King
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className='custom-table-td-main-book'>
                                            Žanr:
                                        </td>
                                        <td className='custom-table-td-part-book'>
                                            Thriller
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className='custom-table-td-main-book'>
                                            BÖLÜM:
                                        </td>
                                        <td className='custom-table-td-part-book'>
                                            Çeper Eser
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className='custom-table-td-main-book'>
                                            GÖWRÜMI:
                                        </td>
                                        <td className='custom-table-td-part-book'>
                                            2,11 MB
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
                
                
                <div className='grid sm:grid-cols-2  lg:grid-cols-3 xl:grid-cols-4  gap-4 mt-[40px]'>
                    <div className='flex items-center bg-white w-[280px] p-3 rounded-md'>
                        <div className="h-[120px] w-[95px] overflow-hidden rounded-md">
                            <Image
                                alt="check surat kitap"
                                src={"/kitap.png"}
                                height={120}
                                width={95}
                                className="object-cover object-center"
                            />
                        </div>
                        <div className="flex flex-col ml-[3px] px-[8px] h-[120px] w-[170px]">
                            <p className="font-custom-sans font-semibold text-[16px]">
                                NAME OF BOOK
                            </p>
                            <table className="table-auto  mt-3 w-full">
                                <tbody>
                                    <tr>
                                        <td className='custom-table-td-main-book-card'>
                                            DILI:
                                        </td>
                                        <td className='custom-table-td-part-book-card'>
                                            Inlis
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className='custom-table-td-main-book-card'>
                                            AWTOR:
                                        </td>
                                        <td className='custom-table-td-part-book-card'>
                                            Stephen King
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className='custom-table-td-main-book-card'>
                                            Žanr:
                                        </td>
                                        <td className='custom-table-td-part-book-card'>
                                            Thriller
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
                                    <button className="mb-[2px] mr-[3px]">
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
                    <div className='flex items-center bg-white w-[280px] p-3 rounded-md'>
                        <div className="h-[120px] w-[95px] overflow-hidden rounded-md">
                            <Image
                                alt="check surat kitap"
                                src={"/kitap.png"}
                                height={120}
                                width={95}
                                className="object-cover object-center"
                            />
                        </div>
                        <div className=" ml-[3px] px-[8px] h-[120px] w-[170px]">
                            <p className="font-custom-sans font-semibold text-[16px]">
                                NAME OF BOOK
                            </p>
                            <table className="table-auto  mt-3 w-full">
                                <tbody>
                                    <tr>
                                        <td className='custom-table-td-main-book-card'>
                                            DILI:
                                        </td>
                                        <td className='custom-table-td-part-book-card'>
                                            Inlis
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className='custom-table-td-main-book-card'>
                                            AWTOR:
                                        </td>
                                        <td className='custom-table-td-part-book-card'>
                                            Stephen King
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className='custom-table-td-main-book-card'>
                                            Žanr:
                                        </td>
                                        <td className='custom-table-td-part-book-card'>
                                            Thriller
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                    <div className='flex items-center bg-white w-[280px] p-3 rounded-md'>
                        <div className="h-[120px] w-[95px] overflow-hidden rounded-md">
                            <Image
                                alt="check surat kitap"
                                src={"/kitap.png"}
                                height={120}
                                width={95}
                                className="object-cover object-center"
                            />
                        </div>
                        <div className=" ml-[3px] px-[8px] h-[120px] w-[170px]">
                            <p className="font-custom-sans font-semibold text-[16px]">
                                NAME OF BOOK
                            </p>
                            <table className="table-auto  mt-3 w-full">
                                <tbody>
                                    <tr>
                                        <td className='custom-table-td-main-book-card'>
                                            DILI:
                                        </td>
                                        <td className='custom-table-td-part-book-card'>
                                            Inlis
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className='custom-table-td-main-book-card'>
                                            AWTOR:
                                        </td>
                                        <td className='custom-table-td-part-book-card'>
                                            Stephen King
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className='custom-table-td-main-book-card'>
                                            Žanr:
                                        </td>
                                        <td className='custom-table-td-part-book-card'>
                                            Thriller
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                    <div className='flex items-center bg-white w-[280px] p-3 rounded-md'>
                        <div className="h-[120px] w-[95px] overflow-hidden rounded-md">
                            <Image
                                alt="check surat kitap"
                                src={"/kitap.png"}
                                height={120}
                                width={95}
                                className="object-cover object-center"
                            />
                        </div>
                        <div className=" ml-[3px] px-[8px] h-[120px] w-[170px]">
                            <p className="font-custom-sans font-semibold text-[16px]">
                                NAME OF BOOK
                            </p>
                            <table className="table-auto  mt-3 w-full">
                                <tbody>
                                    <tr>
                                        <td className='custom-table-td-main-book-card'>
                                            DILI:
                                        </td>
                                        <td className='custom-table-td-part-book-card'>
                                            Inlis
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className='custom-table-td-main-book-card'>
                                            AWTOR:
                                        </td>
                                        <td className='custom-table-td-part-book-card'>
                                            Stephen King
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className='custom-table-td-main-book-card'>
                                            Žanr:
                                        </td>
                                        <td className='custom-table-td-part-book-card'>
                                            Thriller
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                    <div className='flex items-center bg-white w-[280px] p-3 rounded-md'>
                        <div className="h-[120px] w-[95px] overflow-hidden rounded-md">
                            <Image
                                alt="check surat kitap"
                                src={"/kitap.png"}
                                height={120}
                                width={95}
                                className="object-cover object-center"
                            />
                        </div>
                        <div className=" ml-[3px] px-[8px] h-[120px] w-[170px]">
                            <p className="font-custom-sans font-semibold text-[16px]">
                                NAME OF BOOK
                            </p>
                            <table className="table-auto  mt-3 w-full">
                                <tbody>
                                    <tr>
                                        <td className='custom-table-td-main-book-card'>
                                            DILI:
                                        </td>
                                        <td className='custom-table-td-part-book-card'>
                                            Inlis
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className='custom-table-td-main-book-card'>
                                            AWTOR:
                                        </td>
                                        <td className='custom-table-td-part-book-card'>
                                            Stephen King
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className='custom-table-td-main-book-card'>
                                            Žanr:
                                        </td>
                                        <td className='custom-table-td-part-book-card'>
                                            Thriller
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
            
    )
    }

export default MainBar
