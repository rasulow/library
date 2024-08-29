"use client"

import Authors from "../../components/components2/Authors";
import Genres from "../../components/components2/Genres";
import FavouriteBooks from "../../components/components2/FavouriteBooks";
import SearchForm from "../../components/components2/search-form";
import { useAppContext } from "../../context"
import Image from "next/image";
import Link from "next/link";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

const LeftSideBar = () => {
  const {
    toggleLeft,
    setToggleLeft,
    toggleSideBar,
    toggleUp,
    setToggleSideBar,
  } = useAppContext();

  const lists = [{id:"2", name:"programmirleme"}, {id:"13", name:"Çeper eser"}, {id:"18", name:"Hukuk"}, {id:"19", name:"Taryh"}, {id:"20", name:"Kiberhowpsuzlyk"}]

  const allPart = lists.map(book=> {
    console.log(book)
    return (
      <div className="flex items-center">
      <div className="flex  w-[75px] h-[75px] p-1  overflow-hidden rounded-full">
                      <Image 
                        alt="group image"
                        height={75}
                        width={75}
                        src={`/genre/${book.id}.png`}
                        className="rounded-full object-cover object-center"
                      />
                    </div>
                    <div className="flex flex-col ml-[7px]">
                      <Link 
                        className="font-custom-sans font-bold text-[20px]"
                        href={`/genre/${book.id}`}
                        >
                        {book.name}
                      </Link>
                    </div>
                  </div>
    )
  })

  return (
    <div className={toggleLeft ? `fixed shadow-2xl z-10 ${toggleSideBar==1 ? "w-[277px]" : "w-[300px]"} shadow-xl border-r-[1px] border-slate-300 pl-2 h-screen left-0 flex-col bg-slate-200 ${toggleUp ? "mt-[74px]" : "mt-[23px]"}` : "hidden"}>  
            <ul className="flex h-[30px] bg-slate-200 ml-[14px] pr-2 mt-[10px]">
              <li> 
                <Link 
                  className="
                    border-r-[1px]
                    border-white
                    bg-indigo-600
                    hover:bg-indigo-700
                    text-white
                    text-[14px]
                    font-semibold
                    py-[5px] px-2
                    rounded-l-xl
                    shadow-lg
                    hover:shadow-xl
                    transition-all
                    duration-300
                    ease-in-out
                    transform
                    hover:-translate-y-1
                    hover:scale-110
                    focus:outline-none
                    focus:ring-2
                    focus:ring-indigo-500
                    focus:ring-offset-2
                  "
                  onClick={() => setToggleSideBar(1)}
                  href={"/author"}
                >
                  Awtor
                </Link>
              </li>
              {/* <li>
                <Link 
                  href="/series"
                  className="custom-leftbar-button"
                  onClick={() => setToggleSideBar(2)}
                >
                  serii
                </Link>
              </li> */}
              <li>
                <Link 
                  href="/genre"
                  className="
                    border-r-[1px]
                    border-white
                    bg-indigo-600
                    hover:bg-indigo-700
                    text-white
                    text-[14px]
                    font-semibold
                    py-[5px] px-2
                    shadow-lg
                    hover:shadow-xl
                    transition-all
                    duration-300
                    ease-in-out
                    transform
                    hover:-translate-y-1
                    hover:scale-110
                    focus:outline-none
                    focus:ring-2
                    focus:ring-indigo-500
                    focus:ring-offset-2
                  "
                  onClick={() => setToggleSideBar(3)}
                >
                  Žanr
                </Link>
              </li>
              <li>
                <Link
                  href="/" 
                  className="
                    border-r-[1px]
                    border-white
                    bg-indigo-600
                    hover:bg-indigo-700
                    text-white
                    text-[14px]
                    font-semibold
                    py-[5px] px-2
                    shadow-lg
                    hover:shadow-xl
                    transition-all
                    duration-300
                    ease-in-out
                    transform
                    hover:-translate-y-1
                    hover:scale-110
                    focus:outline-none
                    focus:ring-2
                    focus:ring-indigo-500
                    focus:ring-offset-2
                  "
                  onClick={() => setToggleSideBar(4)}
                >
                    gözleg
                </Link>
              </li>
              <li>
                <Link 
                  href={"/genre"}
                  className="
                    bg-indigo-600
                    hover:bg-indigo-700
                    text-white
                    text-[14px]
                    font-semibold
                    rounded-r-xl
                    py-[5px] px-2
                    shadow-lg
                    hover:shadow-xl
                    transition-all
                    duration-300
                    ease-in-out
                    transform
                    hover:-translate-y-1
                    hover:scale-110
                    focus:outline-none
                    focus:ring-2
                    focus:ring-indigo-500
                    focus:ring-offset-2
                    
                  "
                  onClick={() => setToggleSideBar(5)}
                >
                    bölüm
                </Link>
              </li>
            </ul>
            { toggleSideBar == 1 && (
              <Authors />
            )}
            { toggleSideBar == 2 && (
              <div>
                <div className = "flex gap-1 p-2 h-[40px] bg-slate-200 items-center">
                  <p>poisk</p>
                  <input className="px-2 w-full shadow-inner border-slate-300 border-[2px] rounded-md h-[30px]" />
                  <button className="mx-[5px]"><i class="fas fa-search"></i></button>
                </div>
                <div className={toggleUp ? "h-[76vh] shadow-inner p-2 border-[1px] border-slate-600 bg-white mr-[8px] mt-[10px] overflow-y-scroll" : "h-[82vh] shadow-inner p-2 border-[1px] border-slate-600 bg-white mr-[8px] mt-[10px] overflow-y-scroll"} >
                  <Link 
                    href={"/series"}
                    className='font-semibold'
                    onClick={()=> setToggleLeft(false)}
                  >
                    serii
                  </Link>
                  <p>
                    serii
                  </p>
                  <p>
                    serii
                  </p>
                </div>
              </div>
            )}
            { toggleSideBar == 3 && (
              <Genres />
            )}
            { toggleSideBar == 4 && (
              <div className="pl-[8px] pr-[10px] mt-[7px]">
                <SearchForm />
              </div>
            )}
            { toggleSideBar == 5 && (
              <div>
                <div className={toggleUp ? "h-[78vh] shadow-inner p-2 bg-slate-200 mr-[8px] mt-[10px] overflow-y-scroll" : "h-[85vh] shadow-inner p-2 bg-slate-200 mr-[8px] mt-[10px] overflow-y-scroll"} >
                  {allPart}
                </div>
             </div>
            )}
            { toggleSideBar == 6 && (
              <FavouriteBooks />
            )}
          </div>
  )
}

export default LeftSideBar
