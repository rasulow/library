import { useState, useEffect } from "react"
import axiosInstance from "../../utils/axiosInstance"
import { useAppContext } from "../../context";
import Link from "next/link";


import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

const Genres = () => {
  const {
    setToggleLeft,
    toggleUp,
  } = useAppContext();
  const [genres, setGenres] = useState([]);
  const [error, setError] = useState(null)

  useEffect(() => {
    async function fetchData() {
    try {
        const headers = {
            'Authorization': `Bearer ${localStorage.getItem('token')}`,
            'Content-Type': 'application/json'
          };
        const response = await axiosInstance.get(
            '/api/genres/',
            {
                headers: headers
              }
        );
        setGenres(response.data);
        console.log(response.data)
    } catch (err) {
        setError(err);
        console.log(error)
    }
    }
    fetchData();
  }, []);



  const  allGenres = genres?.map(genre => {
    return (
      <Link 
          href={`/genre/${genre.id}`} 
          className='font-semibold'
          onClick={()=> setToggleLeft(false)}
      >
      <li
          key={genre["id"]}
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
          {genre.name}
      </li>
      </Link>
    )
  })



  return (
      // <div className={toggleUp ? "h-[79vh] shadow-inner border-[1px] border-slate-600 bg-white mr-[8px] mt-[10px] overflow-y-scroll" : "h-[85vh] shadow-inner p-2 border-[1px] border-slate-600 bg-white mr-[8px] mt-[10px] overflow-y-scroll"}>
      //   <Accordion type="single" collapsible className="w-full px-[10px]">
      //     <AccordionItem value="item-1">
      //       <AccordionTrigger>Fantastika</AccordionTrigger>
      //       <AccordionContent>
      //         <div className='flex flex-col text-[13px] font-semibold ml-3'>
      //           <Link
      //               href={"/genre"}
      //               onClick={()=> setToggleLeft(false)}
      //             >
      //               Naucnaya fantastika
      //           </Link>
      //           <Link
      //               href={"/genre"}
      //               onClick={()=> setToggleLeft(false)}
      //             >
      //               Naucnaya fantastika
      //           </Link>
      //         </div>
      //       </AccordionContent>
      //     </AccordionItem>
      //       <AccordionItem value="item-2">
      //         <AccordionTrigger>Detektivy</AccordionTrigger>
      //         <AccordionContent>
      //           <div className='flex flex-col text-[13px] font-semibold ml-3'>
      //             <Link
      //                 href={"/genre"}
      //                 onClick={()=> setToggleLeft(false)}
      //               >
      //                 Naucnaya fantastika
      //             </Link>
      //             <Link
      //                 href={"/genre"}
      //                 onClick={()=> setToggleLeft(false)}
      //               >
      //                 alternativnaya istoriya
      //             </Link>
      //           </div>
      //         </AccordionContent>
      //     </AccordionItem>
      //   </Accordion>
      // </div>
      <div>
        <div className={toggleUp ? "flex flex-col h-[80vh] shadow-inner p-[1px] border-[1px] border-slate-600 bg-white mr-[8px] mt-[10px] overflow-y-scroll" : "flex flex-col h-[88vh] shadow-inner p-[1px] border-[1px] pr-[3px] border-slate-600 bg-white mr-[8px] mt-[10px] overflow-y-scroll"} >
        <ul
                className={`
                text-gray-800
                dark:text-gray-200
                pl-[1px]
                pt-[1px]
                `}
            >
            {allGenres}
        </ul>
        </div>
    </div>
  )
}

export default Genres