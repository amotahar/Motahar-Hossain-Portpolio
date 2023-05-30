import React, { useEffect, useState } from 'react'
import { motion } from "framer-motion"

function DarkButton() {

    const [darkMode, setDarkMode] = useState(true)
    const handleModeSwitch = () => { setDarkMode(!darkMode) };

    // if local storage is empty save darkMode as light
    useEffect(() => {
        if (localStorage.getItem('darkMode') === null) {
            localStorage.setItem('darkMode', 'light');
        }
    }, []);

    useEffect(() => {
        // select html elem
        const html = document.querySelector('html');
        if (localStorage.getItem('darkMode') === 'dark') {
            html.classList.add('dark');
            setDarkMode('dark');
        } else {
            html.classList.remove('dark');
            setDarkMode('light');
        }
    }, [darkMode]);

    // handle switch darkMode
    const handledarkModeSwitch = () => {
        if (localStorage.getItem('darkMode') === 'light') {
            setDarkMode('dark');
            localStorage.setItem('darkMode', 'dark');
        } else {
            setDarkMode('light');
            localStorage.setItem('darkMode', 'light');
        }
    };

    return (
        <motion.button

            whileTap={{ scale: 2 }}
            transition={{
                type: "spring",
                stiffness: 140
            }}
            className={`w-10 h-4 rounded-full ${darkMode==='light'? "bg-black":"bg-white"}  flex items-center transition duration-300 focus:outline-none shadow  `}
            onClick={() => handledarkModeSwitch()}
        >
            <div
                className={`w-5 h-5 relative rounded-full transition duration-500 transform ${darkMode === 'dark' ? "bg-gray-700 translate-x-full" : "bg-yellow-500 -translate-x-2 "} p-1 text-white`}>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
                {/* {darkMode? darkIcon :lightIcon} */}
            </div>
        </motion.button>
    )
}

export default DarkButton