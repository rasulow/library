"use client"

import { useState } from "react";
import PdfViewer from "../main_components/PdfViewer";
import Image from "next/image";

const Page = () => {
  const [readBook, setReadBook] = useState(false)
  return (
    <>
      <div className="flex flex-col md:flex-row md:items-start md:ml-[45px]">
        <div className="flex flex-col items-center mt-[50px]">
          <div className="bg-white h-[400px] w-[300px] flex items-center justify-center rounded-md">
            <Image 
              alt="Umumy kitap surat"
              height={300}
              width={230}
              src={"/kitap.png"}
            />
          </div>
          <div className="flex justify-around w-[300px] mt-[20px] items-center">
            <button className="flex flex-col items-center">
              <i class="fas fa-download text-blue-500 text-[20px] mb-[2px]"></i>
              <span className="font-bold text-[14px] text-blue-500">
                Ýükle
              </span>
            </button>
            <button className="flex flex-col items-center">
              <i class="fas fa-book text-blue-500 text-[20px] mb-[2px]"></i>
              <span className="font-bold text-[14px] text-blue-500">
                Kitaby oka
              </span>
            </button>
          </div>
      </div>
        {(false) && (
          <div>
            <PdfViewer url={"./check.pdf"} />
          </div>)
        }
        <div className="flex flex-col mt-[30px] mb-[180px] md:ml-[40px]">
          <p className="mt-[-6px] md:mt-[10px] font-custom-sans font-semibold text-[34px] md:text-[45px] self-center md:self-start">
            NAME OF BOOK
          </p>
          <div className='flex mt-[10px] items-center'>
              <div className="flex flex-col ml-[65px] md:ml-[0px] mt-[10px] flex-1 px-[16px] h-[205px] max-w-[500px] md:w-[400px]">
                  <p className="font-custom-sans font-semibold text-[18px] self-center ml-[30px] md:self-start">
                    2018
                  </p>
                  <table className="table-auto w-full mt-[10px] ml-[30px]">
                      <tbody>
                          <tr>
                              <td className='custom-table-td-main-book-1'>
                                  DILI:
                              </td>
                              <td className='custom-table-td-part-book-1'>
                                  Inlis
                              </td>
                          </tr>
                          <tr>
                              <td className='custom-table-td-main-book-1'>
                                  AWTOR:
                              </td>
                              <td className='custom-table-td-part-book-1'>
                                  Stephen King
                              </td>
                          </tr>
                          <tr>
                              <td className='custom-table-td-main-book-1'>
                                  Žanr:
                              </td>
                              <td className='custom-table-td-part-book-1'>
                                  Thriller
                              </td>
                          </tr>
                          <tr>
                              <td className='custom-table-td-main-book-1'>
                                  BÖLÜM:
                              </td>
                              <td className='custom-table-td-part-book-1'>
                                  Çeper Eser
                              </td>
                          </tr>
                          <tr>
                              <td className='custom-table-td-main-book-1'>
                                  SAHYPA:
                              </td>
                              <td className='custom-table-td-part-book-1'>
                                  267
                              </td>
                          </tr>
                          <tr>
                              <td className='custom-table-td-main-book-1'>
                                  FORMATY:
                              </td>
                              <td className='custom-table-td-part-book-1'>
                                  .pdf
                              </td>
                          </tr>
                          <tr>
                              <td className='custom-table-td-main-book-1'>
                                  GÖWRÜMI:
                              </td>
                              <td className='custom-table-td-part-book-1'>
                                  2,11 MB
                              </td>
                          </tr>
                      </tbody>
                  </table>
              </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Page;







