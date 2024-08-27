"use client"

import PdfViewer from "@/app/main_components/PdfViewer"


const base_URL = 'http://10.10.73.31:4000'

const Page = ({url}) => {
  console.log(`${base_URL}${url.id}`)
  return (
    <div>
      {/* <PdfViewer url={'/check.pdf'} /> */}
      <PdfViewer url={`${base_URL}${url.id}`} />
    </div>
  )
}

export default Page