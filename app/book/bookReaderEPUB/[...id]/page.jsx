"use client"

import Book from "@/app/main_components/epub"
import { useRouter } from "next/navigation"
const base_URL = 'http://10.10.73.31:4000'

const Page = ({params}) => {
  console.log(params.id.join("/"))
  return (
    <div className="w-[100vh] h-[100vh] mt-[-15px] ml-[-13px]" >
      {/* <Book 
          url={"/alice.epub"}
      /> */}
      <Book 
         url={`${base_URL}/${params.id.join("/")}`}
      />
    </div>
  )
}

export default Page