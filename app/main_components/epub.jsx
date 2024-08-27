"use client"
import React, { useState } from "react";
import { ReactReader } from 'react-reader'

export const Book = ({url}) => {
  const [location, setLocation] = useState(0)
  return (
    <div style={{ height: '100vh', width: '100vw' }}>
      <ReactReader
        url={url}
        location={location}
        locationChanged={(epubcfi) => setLocation(epubcfi)}
      //   epubOptions={{
      //     manager: "continuous",
      //     flow: "scrolled"
      //  }}
      />
    </div>
  )
}
export default Book