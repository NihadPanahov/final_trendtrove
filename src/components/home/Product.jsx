import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react'

import Data from '../../Data.json'
import { useSelector } from 'react-redux'

const Product = ({ product }) => {

  const theme = useSelector((state) => state.theme.mode);


  const [searchTerm, setSearchTerm] = useState("");

  const navigate = useNavigate();

  const textchanger = ` ${theme === 'light' ? 'text-gray-600' : 'text-white '
    }`;
  const bgchanger = ` md:w-[439px] p-3 mb-5 ml-5 border rounded-md relative cursor-pointer hover:scale-105  w-[270px]   transition duration-500 ease-in-out hover:scale-90 border-none  btn shadow-[0_2px_0_gray] hover:shadow-[0_5px_0px_gray] text-black bg-gray text-gray-400 ease-out hover:translate-y-1 transition-all ${theme === 'light' ? 'bg-white' : 'bg-gray-700 '
    }`;

  return (
    <>

      <div className={bgchanger}>
        <div onClick={() => navigate(`products/${product?.id}`)} className=' '>
          <div className={textchanger}>
            <div className='text-3xl font-bold absolute rounded-md top-0 right-0 bg-black text-white p-2 m-1'>{product?.price} <span className='text-sm'>$</span></div>
            <img className='w-[200px] h-[200px] object-contain m-auto' src={product?.image} alt="" />
            <div className='text-center px-3 mt-3 text-xl font-bold'>{product?.title}</div>
          </div>
        </div>
      </div>




    </>

  )
}

export default Product

