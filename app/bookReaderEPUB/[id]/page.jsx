"use client"

import Book from "@/app/main_components/epub"

const base_URL = 'http://10.10.73.31:4000'

const Page = ({url}) => {
  return (
    <div>
      {/* <Book 
          url={"/alice.epub"}
      /> */}
      <Book 
          url={`${base_URL}${url.id}`}
      />
    </div>
  )
}

export default Page