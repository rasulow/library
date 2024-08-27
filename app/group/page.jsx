

"use client"
import Link from "next/link"
import Image from "next/image"
import { useEffect } from "react"
import { useAppContext } from "@/context"

const Home = () => {
    const {
        toggleLeft,
        toggleSideBar,
        toggleUp,
        toggleEnButton,
        toggleRuButton,
        toggleView,
        setToggleView,
    } = useAppContext();
    return (
        <div className={toggleLeft ? `flex flex-col items-center flex-1 ${toggleUp ? "mt-[85px]" : "mt-[30px]"}` : `flex flex-col flex-1 m-2 items-center ${toggleUp ? "mt-[80px]" : "mt-[30px]"}`}>
            <div className="mx-[7px] max-h-[715px]">  
          
                <div className = "flex p-2 h-[40px] mt-2 items-center  sm:justify-end">
                  <div className='flex items-center gap-1 self-end'>
                      <p>dili:</p>
                      <select className="w-[80px] bg-slate-200 mx-2 p-1 rounded-md text-center h-[30px]">
                      <option>1</option>
                      <option>2</option>
                      </select>
                      <p>(2)</p>
                  </div>
                </div> 
                <div className="flex flex-col items-center overflow-hidden mt-[14px]">
                    <Image
                        alt="check surat kitap"
                        src={"/fizika.png"}
                        height={200}
                        width={200}
                        className="object-cover object-center rounded-lg"
                    />
                    <p className="mt-2 font-bold text-[32px] font-custom-sans">Fizika</p>
                </div>
                <div className='grid sm:grid-cols-2  lg:grid-cols-3 xl:grid-cols-4  gap-4 mt-[25px]'>
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

export default Home

