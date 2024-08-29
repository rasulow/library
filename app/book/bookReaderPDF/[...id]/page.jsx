"use client"

import { useState } from "react";
import PdfViewer from "../../../main_components/PdfViewer";



const base_URL = 'http://10.10.73.31:4000'

const Page = ({params}) => {
  return (
      <div className="h-[100vh] w-[100vw]">
        <PdfViewer url={`${base_URL}/${params.id.join("/")}`} />
      </div>
  );
};
export default Page;







