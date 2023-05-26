import React from 'react';
import { useNavigate } from 'react-router-dom';
import Slider from 'react-slick';


import { animateScroll } from 'react-scroll';

import { toast } from 'react-toastify';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';

import playstation from "../../img/playstation-5.webp";
import shirt from "../../img/shirt.jpg";
import jwlry from "../../img/jwlry.jpg";

const SliderComp = () => {
  const [t, i18n] = useTranslation('global');

  const settings = {
    infinite: true,
    speed: 1000,
    autoplay: true,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  const handleClick = () => {
    animateScroll.scrollTo(760);
  };

  const notifyy = () =>
    toast("Let's start shopping!", {
      position: toast.POSITION.BOTTOM_CENTER,
    });

  const handleBothClickss = () => {
    handleClick();
    notifyy();
  };

  const navigate = useNavigate();
  const theme = useSelector((state) => state.theme.mode)
  let divClass = "flex items-center   px-6 py-5 "
  divClass +=  theme == 'light' ? 'bg-slate-100 text-black' : 'bg-gray-600 text-white'  
  let divvClass = "flex items-center   px-6 py-5 "
  divvClass +=  theme == 'light' ? 'bg-slate-100 text-black' : 'bg-black text-white'  

  return (
    <div>
      <Slider {...settings}>
        <div className={divClass}>
          <div className="flex flex-col lg:flex-row">
            <div className="sm:w-2/1 md:w-1/2 lg:w-2/1 mt-[130px]">
              <div className="text-5xl font-bold">{t('tbqpah')}</div>
              <div className="text-lg my-6">{t('slidertext1')}</div>
              <div
                onClick={handleBothClickss}
                className="border rounded-full cursor-pointer lg:text-2xl text-md lg:w-[300px] w-[240px] mb-4 h-16 flex items-center justify-center text-white bg-gray-400 border-gray-400 hover:border-black hover:text-white hover:bg-black  transition duration-300 ease-in-out"
              >
                {t('sn')}
              </div>
            </div>
            <div className="md:w-1/2 flex justify-center">
              <img src={jwlry} alt="" className="w-full md:max-w-none" />
            </div>
          </div>
        </div>
        <div className={divClass}>
          <div className="flex flex-col lg:flex-row">
            <div className="md:w-1/2 mt-[130px]">
              <div className="text-5xl font-bold">{t('tbqpah')}</div>
              <div className="text-lg my-6">{t('slidertext2')}</div>
              <div
                onClick={handleBothClickss}
                className="border rounded-full cursor-pointer lg:text-2xl text-md lg:w-[300px] w-[240px] mb-4 h-16 flex items-center justify-center text-white bg-gray-400 border-gray-400 hover:border-black hover:text-white hover:bg-black transition duration-300 ease-in-out"
              >
                {t('sn')}
              </div>
            </div>
            <div className="md:w-1/2 flex justify-center">
              <img src={playstation} alt="" className="w-full md:max-w-none" />
            </div>
          </div>
        </div>
        <div className={divClass}>
          <div className="flex flex-col lg:flex-row">
            <div className="md:w-1/2 lg:1/1 mt-[130px]">
              <div className="text-5xl font-bold">{t('tbqpah')}</div>
              <div className="text-lg my-6">{t('slidertext3')}</div>
              <div className="divvClass">
                <div
                onClick={handleBothClickss}
                className="border rounded-full cursor-pointer lg:text-2xl text-md  lg:w-[300px] w-[240px] mb-4 h-16 flex items-center justify-center text-white bg-gray-400 border-gray-400 hover:border-black hover:text-white hover:bg-black transition duration-300 ease-in-out"
              >
                {t('sn')}
              </div>
              </div>
              
            </div>
            <div className="md:w-1/2 flex justify-center">
              <img src={shirt} alt="" className="w-full md:max-w-none" />
            </div>
          </div>
        </div>
      </Slider>
    </div>
  );
};

export default SliderComp;
