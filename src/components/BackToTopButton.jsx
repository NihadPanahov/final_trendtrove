import React from 'react'
import { useEffect, useState } from 'react'

const BackToTopButton = () => {

  const [backToTopButton, setBackToTopButton] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        setBackToTopButton(true)
      } else {
        setBackToTopButton(false)
      }
    })
  }, [])

  const scrollUp = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    })
  }

  return (
    <>
      {backToTopButton && (
        <button onClick={scrollUp} className='fixed bottom-5 right-7 h-[50px] w-[50px]  bg-gray-500 text-white rounded-full text-2xl font-bold align-center justify-center  opacity-70 transition-opacity duration-300 ease-in-out hover:opacity-100'>^</button>
      )}
    </>
  )
}

export default BackToTopButton