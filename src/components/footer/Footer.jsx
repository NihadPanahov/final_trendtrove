import React from 'react'
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import logo from "../../img/LogoMain2.png"
const Footer = () => {

    const [t, i18n] = useTranslation("global");
    const theme = useSelector(state => state.theme.mode)
    const navigate = useNavigate();

    return (
        <footer className='bg-gray-600  '  >
            <hr className='h-2 bg-gray-100 border-gray-100' />
            <hr className='h-2 bg-gray-200 border-gray-200' />
            <hr className='h-2 bg-gray-300 border-gray-300' />
            <hr className='h-2 bg-gray-400 border-gray-400' />
            <hr className='h-2 bg-gray-500 border-gray-500' />
            <hr className='h-2 bg-gray-600 border-gray-600' />

            <div className='container  flex justify-center gap-5  max-md:flex-col    text-white py-10'>
                <div className='md:w-full lg:w-7/12'>
                    <p className='font-bold text-2xl mb-[20px]'><img src={logo} alt="" /></p>
                    <p>{t("belowlogo")}</p>
                </div>
                <div className=''>
                    <p className='my-6 font-bold text-lg'>{t("tc")}</p>
                    <ul>
                        <li className='mb-2 cursor-default'>{t("electronics")}</li>
                        <li className='mb-2 cursor-default'>{t("jewelry")}</li>
                        <li className='mb-2 cursor-default'>{t("mc")}</li>
                        <li className='mb-2 cursor-default'>{t("wc")}</li>
                    </ul>
                </div>
                <div className=''>
                    <p className='my-6 font-bold text-lg'>{t("ul")}</p>
                    <ul>
                        <li  onClick={()=> navigate('')} className='mb-[7px] cursor-pointer hover:underline'>{t("home")}</li>
                        <li onClick={() => navigate('aboutus') }  className='mb-2 cursor-pointer hover:underline'>{t("aboutus")}</li>
                        <li onClick={() => navigate('blog')  } className='mb-2 cursor-pointer hover:underline'>{t("blog")}</li>
                        <li onClick={()=> navigate('contactus') }  className='mb-2 cursor-pointer hover:underline'>{t("contactus")}</li>

                    </ul>
                </div>
                <div className=''>
                    <p className='my-6 font-bold text-lg '>{t("contact")}</p>
                    <ul>
                        <li className="text-gray-400 mb-[15px]">{t("Baku")}</li>
                        <li className="text-gray-400 mb-[15px]">(+994) 55 555-55-55</li>
                        <li className="text-gray-400 mb-[15px]">example123@gmail.com</li>
                    </ul>
                </div>
            </div>

            <div className='text-white flex justify-center text-md'><h3 className='text-center'>COPYRIGHT © 2023 LOGO. ALL RIGHTS RESERVED</h3></div>
        </footer>
    )
}

export default Footer
