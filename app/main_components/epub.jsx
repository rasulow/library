"use client"
import React, { useState } from "react";
import { ReactReader } from 'react-reader'

export const Book = ({url}) => {
  const [location, setLocation] = useState(0)
  const [book, setBook] = React.useState(null);
  const handleError = (error) => {
    console.error("Error opening book:", error);
  };
  return (
    <div style={{ height: '100vh', width: '100vw' }}>
      {book ? 
      (<ReactReader
        url={url}
        location={location}
        locationChanged={(epubcfi) => setLocation(epubcfi)}
        onError={handleError} 
        epubOptions={{
          manager: "continuous",
          flow: "scrolled"
       }}
      />) : (
        <>
        <button 
          onClick={() => setBook(url)}
          className="mt-[50px] ml-[20px] font-bold"
        >Load Book</button>
        </>
      )}
    </div>
  )
}
export default Book