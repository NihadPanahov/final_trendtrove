import React from 'react';
import { useNavigate } from 'react-router-dom';
import Slider from 'react-slick';
import { animateScroll } from 'react-scroll';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';

import playstation from "../../img/playstation-5.webp";
import shirt from "../../img/shirt.jpg";
import jwlry from "../../img/jwlry.jpg";


import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


const SliderComp = () => {
  const [t, i18n] = useTranslation('global');
  const navigate = useNavigate();
  const theme = useSelector((state) => state.theme.mode);

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

  const handleBothClickss = () => {
    handleClick();
  };

  const divClass = `flex items-center px-6 py-5 bg-${theme === 'light' ? 'slate-100' : 'gray-600'} text-${theme === 'light' ? 'black' : 'white'}`;
  const buttonClass = `border rounded-full cursor-pointer lg:text-2xl text-md lg:w-[300px] md:w-full w-[240px] mb-4 h-16 flex items-center justify-center text-white bg-gray-400 border-gray-400 hover:border-black hover:text-white hover:bg-black transition duration-300 ease-in-out lg:ml-0`;

  return (
    <div>
      <Slider {...settings} prevArrow={null} nextArrow={null}>
        <div className={divClass}>
          <div className="flex flex-col lg:flex-row text-center lg:text-start">
            <div className="sm:w-2/1 md:w-1/2 lg:w-2/1 mt-[130px] md:ml-[25%] lg:ml-0">
              <div className="text-5xl font-bold">{t('tbqpah')}</div>
              <div className="text-lg my-6">{t('slidertext1')}</div>
              <div onClick={handleBothClickss} className={buttonClass}>
                {t('sn')}
              </div>
            </div>
            <div className="md:w-1/2 flex justify-center">
              <img src={jwlry} alt="" className="lg:w-full md:w-[300px] md:ml-[100%] lg:ml-0 md:max-w-none" />
            </div>
          </div>
        </div>

        <div className={divClass}>
          <div className="flex flex-col lg:flex-row text-center lg:text-start">
            <div className="sm:w-2/1 md:w-1/2 lg:w-2/1 mt-[130px] md:ml-[25%] lg:ml-0">
              <div className="text-5xl font-bold">{t('tbqpah')}</div>
              <div className="text-lg my-6">{t('slidertext2')}</div>
              <div onClick={handleBothClickss} className={buttonClass}>
                {t('sn')}
              </div>
            </div>
            <div className="md:w-1/2 flex justify-center">
              <img src={playstation} alt="" className="lg:w-full md:w-[300px] md:ml-[100%] lg:ml-0 md:max-w-none" />
            </div>
          </div>
        </div>

        <div className={divClass}>
          <div className="flex flex-col lg:flex-row text-center lg:text-start">
            <div className="sm:w-2/1 md:w-1/2 lg:w-2/1 mt-[130px] md:ml-[25%] lg:ml-0">
              <div className="text-5xl font-bold">{t('tbqpah')}</div>
              <div className="text-lg my-6">{t('slidertext3')}</div>
              <div className="divvClass">
                <div onClick={handleBothClickss} className={buttonClass}>
                  {t('sn')}
                </div>
              </div>
            </div>
            <div className="md:w-1/2 flex justify-center">
              <img src={shirt} alt="" className="lg:w-full md:w-[300px] md:ml-[100%] lg:ml-0 md:max-w-none" />
            </div>
          </div>
        </div>
      </Slider>
    </div>
  );
};

export default SliderComp;
