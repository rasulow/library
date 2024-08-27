"use client"

import Link from "next/link";
import { useAppContext } from "../../context"
import Image from "next/image";
import { useRouter, usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import axiosInstance from "@/utils/axiosInstance";


const Nav = () => {
  const {
    toggleUp,
    setToggleLeft,
    setToggleUp,
    toggleRuButton,
    toggleEnButton,
    toggleSearch,
    setToggleSearch,
    // setToggleRuButton,
    // setToggleEnButton,
    toggleSideBar,
    // setToggleSideBar,
    token,
    setToken,
    count,
    setCount,
  } = useAppContext();


  const pathname = usePathname()
  const router = useRouter();
  const [error, setError] = useState(null)
  const [backgroundColor, setBackgroundColor] = useState('bg-slate-400');

  useEffect(()=> {
    setBackgroundColor('bg-green-400');
    setTimeout(() => {
      setBackgroundColor('bg-slate-400');
    }, 2000);
}, [count]
)


  useEffect(() => {
    async function fetchData() {
    try {
        const headers = {
            'Authorization': `Bearer ${localStorage.getItem('token')}`,
            'Content-Type': 'application/json'
            };
        const response = await axiosInstance.get(
            '/api/books/favourites',
            {
                headers: headers
                }
        );
        setCount(response.data.count);
        console.log(response.data.count)
    } catch (err) {
        setError(err);
        console.log(error)
    }
    }
    fetchData();
}, []);

  useEffect(()=> {
    setToken(localStorage.getItem('token'))
  }, [token])


  const logout = () => {
    localStorage.removeItem('token')
    setToken(false)
    router.push('/auth/login')
  }



  return (
    <>
      {toggleUp ? (
      <div className={`flex-col fixed z-10 top-0 right-0 left-0 border-b-[1px] border-slate-300 ${!toggleRuButton && !toggleEnButton && "shadow-xl"}`}>
        <nav className = "flex px-2 bg-slate-200 text-center h-[90px] items-center justify-between">
          <div className='flex-col w-full'>
            <div className='flex ml-2 items-center'>
              <button className='font-semibold mr-2' onClick={()=> setToggleLeft(toggling => !toggling)}>
                    <i className="fas fa-bars text-slate-700 text-[24px] m-2"></i>
              </button>
              <Link href="/" className="font-extrabold  text-blue-800 text-[20px]" onClick={() => setToggleLeft(false)}>
                    Kitaphana
              </Link>
            </div>
            {/* <div className="flex items-center justify-between">
              <ul className = "flex p-2 items-center">
                {/* <li className="font-serif w-[40px] h-[40px]">
                  <button className={`${toggleRuButton && "bg-blue-200 rounded-md pl-[3px]"} px-1 py-[2px] mt-[2px]`} onClick={() => setToggleRuButton(toggle => !toggle)}>
                    <Image 
                      src="/Image/ru-icon.png"
                      alt="ru-icon"
                      width={40}
                      height={40}
                    />
                  </button>
                </li>
                <li className="font-serif w-[40px] h-[40px]">
                  <button className={`${toggleEnButton && "bg-blue-200 rounded-md pl-[3px]"} px-1 py-[2px] mt-[2px]`} onClick={() => setToggleEnButton(toggle => !toggle)}>
                    <Image 
                      src="/Image/en-icon.png"
                      alt="ru-icon"
                      width={40}
                      height={40}
                    />
                  </button>
                </li> 
                <li className="font-serif w-[40px] h-[40px]">
                  <button className={`${toggleSideBar==6 && "bg-blue-200 rounded-md pl-[3px]"} px-1 py-[2px] mt-[2px]`} 
                    onClick={() => {
                      setToggleSideBar(toggle => toggle==6 ? 1 : 6)
                      setToggleLeft(toggle => toggle==6 ? false : true)
                    }}>
                    <Image  
                      src="/Image/liked.png"
                      alt="liked things"
                      width={40}
                      height={40}
                    />
                  </button>
                </li>
                <li className="px-1 mr-1 font-serif w-[40px] h-[40px]">
                  <i className="fas fa-star text-[28px] mt-[6px] text-yellow-600"></i>
                </li>
                <li className="px-1  font-serif w-[40px] h-[40px]">
                <i className="fas fa-question-circle text-green-400 text-[32px] mt-[3px]"></i>
                </li>
              </ul>
              <div className="mr-[-24px]">
                { !token ? 
                  (
                  <div>
                    <Link
                      href={"/auth/login"} 
                      className="font-bold py-1 border-r-[2px] border-r-blue-600 bg-blue-500 px-6 rounded-tl-lg rounded-bl-lg hover:text-white shadow-lg transform hover:scale-105 transition-transform duration-200">
                      Giriş
                    </Link>
                    <Link 
                      href={"/auth/register"}
                      className="font-bold py-1 bg-blue-500 px-6 rounded-tr-lg rounded-br-lg hover:text-white shadow-lg transform hover:scale-105 transition-transform duration-200">
                      Agza bol
                    </Link>
                  </div>
                  ) : 
                  (<div>
                    <Link 
                      href={"/auth/register"}
                      className="font-bold py-1 bg-blue-500 px-6 rounded-lg hover:text-white shadow-lg transform hover:scale-105 transition-transform duration-200"
                      onClick={()=> logout()}
                      >
                      Çykyş
                    </Link>
                  </div>)
                  }
              </div>
            </div> */}
          </div>
          <button className='self-start px-[6px] py-[3px] bg-gray-300 rounded-md m-[3px]' onClick={()=> setToggleUp(toggling => !toggling)}>
            <i className="fas fa-arrow-up font-extrabold text-gray-500 text-[18px]"></i>
          </button>
        </nav>
        <div className={(toggleEnButton || toggleRuButton || toggleSearch) ? `flex flex-col p-1 mt-[-9px] ml-[-13px] mr-[-20px] bg-slate-200  shadow-xl` : "hidden"}>
        { toggleSearch &&
              (<div className='flex p-1 w-full justify-center'>
                  <p className='mx-[5px] text-[13px] font-semibold'>R</p>
                  <p className='mx-[5px] text-[13px] font-semibold'>B</p>
                  <p className='mx-[5px] text-[13px] font-semibold'>C</p>
                  <p className='mx-[5px] text-[13px] font-semibold'>D</p>
                  <p className='mx-[5px] text-[13px] font-semibold'>E</p>
                  <p className='mx-[5px] text-[13px] font-semibold'>F</p>
                  <p className='mx-[5px] text-[13px] font-semibold'>G</p>
                  <p className='mx-[5px] text-[13px] font-semibold'>H</p>
                  <p className='mx-[5px] text-[13px] font-semibold'>I</p>
                  <p className='mx-[5px] text-[13px] font-semibold'>J</p>
                  <p className='mx-[5px] text-[13px] font-semibold'>K</p>
                  <p className='mx-[5px] text-[13px] font-semibold'>L</p>
                  <p className='mx-[5px] text-[13px] font-semibold'>M</p>
                  <p className='mx-[5px] text-[13px] font-semibold'>N</p>
                  <p className='mx-[5px] text-[13px] font-semibold'>O</p>
                  <p className='mx-[5px] text-[13px] font-semibold'>P</p>
                  <p className='mx-[5px] text-[13px] font-semibold'>Q</p>
                  <p className='mx-[5px] text-[13px] font-semibold'>R</p>
                  <p className='mx-[5px] text-[13px] font-semibold'>S</p>
                  <p className='mx-[5px] text-[13px] font-semibold'>T</p>
                  <p className='mx-[5px] text-[13px] font-semibold'>U</p>
                  <p className='mx-[5px] text-[13px] font-semibold'>V</p>
                  <p className='mx-[5px] text-[13px] font-semibold'>W</p>
                  <p className='mx-[5px] text-[13px] font-semibold'>X</p>
                  <p className='mx-[5px] text-[13px] font-semibold'>Y</p>
                  <p className='mx-[5px] text-[13px] font-semibold'>Z</p>
              </div>
              )}
                
                { toggleRuButton &&
                (<div className='flex p-1 w-full justify-center'>
                    <p className='mx-[5px] text-[13px] font-semibold'>R</p>
                    <p className='mx-[5px] text-[13px] font-semibold'>B</p>
                    <p className='mx-[5px] text-[13px] font-semibold'>C</p>
                    <p className='mx-[5px] text-[13px] font-semibold'>D</p>
                    <p className='mx-[5px] text-[13px] font-semibold'>E</p>
                    <p className='mx-[5px] text-[13px] font-semibold'>F</p>
                    <p className='mx-[5px] text-[13px] font-semibold'>G</p>
                    <p className='mx-[5px] text-[13px] font-semibold'>H</p>
                    <p className='mx-[5px] text-[13px] font-semibold'>I</p>
                    <p className='mx-[5px] text-[13px] font-semibold'>J</p>
                    <p className='mx-[5px] text-[13px] font-semibold'>K</p>
                    <p className='mx-[5px] text-[13px] font-semibold'>L</p>
                    <p className='mx-[5px] text-[13px] font-semibold'>M</p>
                    <p className='mx-[5px] text-[13px] font-semibold'>N</p>
                    <p className='mx-[5px] text-[13px] font-semibold'>O</p>
                    <p className='mx-[5px] text-[13px] font-semibold'>P</p>
                    <p className='mx-[5px] text-[13px] font-semibold'>Q</p>
                    <p className='mx-[5px] text-[13px] font-semibold'>R</p>
                    <p className='mx-[5px] text-[13px] font-semibold'>S</p>
                    <p className='mx-[5px] text-[13px] font-semibold'>T</p>
                    <p className='mx-[5px] text-[13px] font-semibold'>U</p>
                    <p className='mx-[5px] text-[13px] font-semibold'>V</p>
                    <p className='mx-[5px] text-[13px] font-semibold'>W</p>
                    <p className='mx-[5px] text-[13px] font-semibold'>X</p>
                    <p className='mx-[5px] text-[13px] font-semibold'>Y</p>
                    <p className='mx-[5px] text-[13px] font-semibold'>Z</p>
                </div>
                )}
                {toggleEnButton && 
                    (<div className='flex p-1 w-full justify-center'>
                    <p className='mx-[5px] text-[13px] font-semibold'>I</p>
                    <p className='mx-[5px] text-[13px] font-semibold'>B</p>
                    <p className='mx-[5px] text-[13px] font-semibold'>C</p>
                    <p className='mx-[5px] text-[13px] font-semibold'>D</p>
                    <p className='mx-[5px] text-[13px] font-semibold'>E</p>
                    <p className='mx-[5px] text-[13px] font-semibold'>F</p>
                    <p className='mx-[5px] text-[13px] font-semibold'>G</p>
                    <p className='mx-[5px] text-[13px] font-semibold'>H</p>
                    <p className='mx-[5px] text-[13px] font-semibold'>I</p>
                    <p className='mx-[5px] text-[13px] font-semibold'>J</p>
                    <p className='mx-[5px] text-[13px] font-semibold'>K</p>
                    <p className='mx-[5px] text-[13px] font-semibold'>L</p>
                    <p className='mx-[5px] text-[13px] font-semibold'>M</p>
                    <p className='mx-[5px] text-[13px] font-semibold'>N</p>
                    <p className='mx-[5px] text-[13px] font-semibold'>O</p>
                    <p className='mx-[5px] text-[13px] font-semibold'>P</p>
                    <p className='mx-[5px] text-[13px] font-semibold'>Q</p>
                    <p className='mx-[5px] text-[13px] font-semibold'>R</p>
                    <p className='mx-[5px] text-[13px] font-semibold'>S</p>
                    <p className='mx-[5px] text-[13px] font-semibold'>T</p>
                    <p className='mx-[5px] text-[13px] font-semibold'>U</p>
                    <p className='mx-[5px] text-[13px] font-semibold'>V</p>
                    <p className='mx-[5px] text-[13px] font-semibold'>W</p>
                    <p className='mx-[5px] text-[13px] font-semibold'>X</p>
                    <p className='mx-[5px] text-[13px] font-semibold'>Y</p>
                    <p className='mx-[5px] text-[13px] font-semibold'>Z</p>
                </div>)}
                </div>
      </div>
    ) : (
      <div className="flex flex-col">
        <div className='flex bg-slate-200 justify-between items-center h-[50px] fixed top-0 right-0 left-0 shadow-xl border-b-[1px] border-slate-300'>
          <div className='flex ml-2 items-center'>
              <button className='font-semibold mr-2' onClick={()=> setToggleLeft(toggling => !toggling)}>
                    <i className="fas fa-bars text-slate-700 text-[24px] m-2"></i>
              </button>
              <Link href="/" className="font-extrabold  text-blue-800 text-[20px]" onClick={() => setToggleLeft(false)}>
                  Kitaphana
                </Link>
            </div>
            <div className="flex items-center mr-[50px]">
              <ul className = "flex p-2 items-center">
                <li>
                  <button className={`${toggleSearch && "bg-blue-200 rounded-md pl-[3px]"} px-1 py-[2px] mt-[2px]`} onClick={() => setToggleSearch(toggle => !toggle)}>
                    <i class="fas fa-search"></i>
                  </button>
                </li>
                {token && 
                (<li className="font-serif mr-[12px]">
                  <Link className={`${toggleSideBar==6 && "bg-blue-200 rounded-md pl-[3px]"} px-1 py-[2px] mt-[2px] relative`} 
                    // onClick={() => {
                    //   setToggleSideBar(toggle => toggle==6 ? 1 : 6)
                    //   setToggleLeft(toggle => toggle==6 ? false : true)
                    // }}
                    href={"/liked"}
                    >
                    <Image  
                      src="/Image/liked.png"
                      alt="liked things"
                      width={40}
                      height={40}
                    />
                    <div className={`flex absolute top-[25px] text-center left-[25px] ${backgroundColor} rounded-full w-[22px] h-[22px] pl-[2px] text-[17px]  items-cente`}>
                      <p>
                        {count}
                      </p>
                    </div>
                  </Link>
                </li>)
                }
                {/* <li className="px-1  font-serif w-[40px] h-[40px]">
                <i className="fas fa-question-circle text-green-400 text-[32px] mt-[3px]"></i>
                </li> */}
              </ul>
              <div className="mr-[-24px]">
                { !token ? 
                  (
                  <div>
                    <Link
                      href={"/auth/login"} 
                      className="font-bold py-1 border-r-[2px] border-r-blue-600 bg-blue-500 px-6 rounded-tl-lg rounded-bl-lg hover:text-white shadow-lg transform hover:scale-105 transition-transform duration-200">
                      Giriş
                    </Link>
                    <Link 
                      href={"/auth/register"}
                      className="font-bold py-1 bg-blue-500 px-6 rounded-tr-lg rounded-br-lg hover:text-white shadow-lg transform hover:scale-105 transition-transform duration-200">
                      Agza bol
                    </Link>
                  </div>
                  ) : 
                  (<div>
                    <Link 
                      href={"/auth/register"}
                      className="font-bold py-1 bg-blue-500 px-6 rounded-lg hover:text-white shadow-lg transform hover:scale-105 transition-transform duration-200"
                      onClick={()=> logout()}
                      >
                      Çykyş
                    </Link>
                  </div>)
                  }
              </div>
            </div>
            {/* <button className='self-start px-[6px] py-[3px] bg-gray-300 rounded-md m-[3px]' onClick={()=> setToggleUp(toggling => !toggling)}>
              <i className="fas fa-arrow-down font-extrabold text-gray-500 text-[18px]"></i>
            </button> */}
        </div>
      </div>
    )}
  </>
    
  )
}

export default Nav
