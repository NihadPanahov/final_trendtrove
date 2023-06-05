import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { toggleTheme } from '../redux/themeSlice';
import { Helmet } from 'react-helmet';
import { useTranslation } from 'react-i18next';


import letterSvg from "../assets/icons/letter-office-letter-svgrepo-com (1).svg";
import letterDark from "../assets/icons/letter-office-letter-svgrepo-com-DARK.svg";

import phoneSvg from "../assets/icons/call-svgrepo-com-LIGHT.svg";
import phoneeDark from "../assets/icons/call-svgrepo-com-DARK.svg";

import chatSvg from "../assets/icons/chat-conversation-svgrepo-com-LIGHT.svg";
import chatDark from "../assets/icons/chat-conversation-svgrepo-com-DARK.svg";
import ChatWidget from '../components/ChatWidget';
import LiveChat from '../LiveChat';


const ContactUs = () => {
  const dispatch = useDispatch();
  const theme = useSelector(state => state.theme.mode)
  const [t, i18n] = useTranslation("global");

  const handleToggleTheme = () => {
    dispatch(toggleTheme());
  };

  return (
    <>
      <Helmet>
        <title>Contact Us. Trend Trove</title>
        <meta name="description" content="Learn more about our company and what we do." />
      </Helmet>

      <div className={`bg-${theme === 'light' ? 'slate-50' : 'gray-700'} text-${theme === 'light' ? 'black' : 'white'} `}>
        <div>
          <h1 className='text-6xl flex justify-center font-bold  py-14'>{t("contactuss")}</h1>
        </div>

        <div className='flex flex-wrap justify-center container pb-20'>
          <div className='flex flex-col items-center px-4 py-6 mx-4 my-8 bg-gray rounded-lg shadow-lg lg:w-1/3 md:w-1/2'>
            <img className='w-[200px] my-[50px] animate-pulse' src={theme === 'light' ? phoneSvg : phoneeDark} alt="" />
            <h3 className='text-2xl font-bold my-4'>{t("bp")}</h3>
            <p>{t("bpinfo1")}</p>
            <span>{t("bpinfo2")}</span>
          </div>
          <div className='flex flex-col items-center px-4 py-6 mx-4 my-8 bg-gray rounded-lg shadow-lg lg:w-1/3 md:w-1/2'>
            <img className='w-[200px] my-[50px] animate-pulse' src={theme === 'light' ? letterSvg : letterDark} alt="" />
            <h3 className='text-2xl font-bold my-4'>{t("luyt")}</h3>
            <p className='text-center'>{t("luyttext")}</p>
          </div>
          <div className='flex flex-col items-center px-4 py-6 mx-4 my-8 bg-gray rounded-lg shadow-lg lg:w-1/3 md:w-1/2'>
            <img className='w-[200px] my-[50px] animate-pulse' src={theme === 'light' ? chatSvg : chatDark} alt="" />
            <h3 className='text-2xl font-bold my-4'>{t("livechat")}</h3>
            <p>{t("lctext")}</p>
          </div>
        </div>
        <LiveChat/>

        {/* <ChatWidget/> */}
      </div>
    </>
  );
};

export default ContactUs;
