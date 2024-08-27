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
          {genre.name}
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
        <div className={toggleUp ? "flex flex-col h-[80vh] shadow-inner p-2 border-[1px] border-slate-600 bg-white mr-[8px] mt-[10px] overflow-y-scroll" : "flex flex-col h-[88vh] shadow-inner p-2 border-[1px] border-slate-600 bg-white mr-[8px] mt-[10px] overflow-y-scroll"} >
            {allGenres}
        </div>
    </div>
  )
}

export default Genres