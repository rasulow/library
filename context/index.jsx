"use client"

import {createContext, useState, useContext } from 'react'

const AppContext = createContext({
    hello:'world'
});

export function AppWrapper({children}) {
    let [name, setName] = useState('Dowlet')
    const [toggleUp, setToggleUp] = useState(false)
    const [toggleLeft, setToggleLeft] = useState(false)
    const [toggleView, setToggleView] = useState(false)
    const [toggleSideBar, setToggleSideBar] = useState(1)
    const [toggleSearchBook, setToggleSearhBook] = useState(true)
    const [toggleSearchFile, setToggleSearhFile] = useState(true)
    const [toggleSearchDif, setToggleSearhDif] = useState(true)
    const [toggleRuButton, setToggleRuButton] = useState(false)
    const [toggleEnButton, setToggleEnButton] = useState(false)
    const [showMenu, setShowMenu] = useState(false)
    const [readBook, setReadBook] = useState(false)
    const [token, setToken] = useState(localStorage.getItem('token'))
    const [countLiked, setCountLiked] = useState(0)
    const [toggleSearch, setToggleSearch] = useState(false)
    // const [toggleGenre1, setToggleGenre1] = useState(false)
    // const [toggleGenre2, setToggleGenre2] = useState(false) 
    // const [toggleGenre3, setToggleGenre3] = useState(false) 
    // const [toggleGenre4, setToggleGenre4] = useState(false)   
    // const [toggleGenre5, setToggleGenre5] = useState(false) 
    // const [toggleGenre6, setToggleGenre6] = useState(false) 
    // const [toggleGenre7, setToggleGenre7] = useState(false) 
    // const [toggleGenre8, setToggleGenre8] = useState(false) 
    // const [toggleGenre9, setToggleGenre9] = useState(false) 
    // const [toggleGenre10, setToggleGenre10] = useState(false) 
    // const [toggleGenre11, setToggleGenre11] = useState(false) 
    // const [toggleGenre12, setToggleGenre12] = useState(false) 
    // const [toggleGenre13, setToggleGenre13] = useState(false) 
    // const [toggleGenre14, setToggleGenre14] = useState(false) 
    // const [toggleGenre15, setToggleGenre15] = useState(false) 
    // const [toggleGenre16, setToggleGenre16] = useState(false) 

    return (
        <AppContext.Provider value={
        {
            name,
            countLiked,
            token,
            toggleUp,
            toggleLeft,
            toggleView,
            toggleSideBar,
            toggleSearchBook,
            toggleSearchFile,
            toggleSearchDif,
            toggleRuButton,
            toggleEnButton,
            showMenu,
            readBook,
            toggleSearch,
            // toggleGenre1,
            // toggleGenre2,
            // toggleGenre3,
            // toggleGenre4,
            // toggleGenre5,
            // toggleGenre6,
            // toggleGenre7,
            // toggleGenre8,
            // toggleGenre9,
            // toggleGenre10,
            // toggleGenre11,
            // toggleGenre12,
            // toggleGenre13,
            // toggleGenre14,
            // toggleGenre15,
            // toggleGenre16,
            setToggleSearch,
            setToken,
            setCountLiked,
            setName,
            setReadBook,
            setToggleUp,
            setToggleLeft,
            setToggleView,
            setToggleSideBar,
            setToggleSearhBook,
            setToggleSearhFile,
            setToggleSearhDif,
            setToggleRuButton,
            setToggleEnButton,
            setShowMenu,
            // setToggleGenre1,
            // setToggleGenre2,
            // setToggleGenre3,
            // setToggleGenre4,
            // setToggleGenre5,
            // setToggleGenre6,
            // setToggleGenre7,
            // setToggleGenre8,
            // setToggleGenre9,
            // setToggleGenre10,
            // setToggleGenre11,
            // setToggleGenre12,
            // setToggleGenre13,
            // setToggleGenre14,
            // setToggleGenre15,
            // setToggleGenre16,  
        }
        }>
            {children}
        </AppContext.Provider>
    )
}

export function useAppContext() {
    return useContext(AppContext);
}