import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart } from '../../redux/cartSlice';
import { AiFillStar } from 'react-icons/ai';
import { useTranslation } from 'react-i18next';
import { toast } from 'react-toastify';

const DetailComp = ({ productDetail }) => {
  const [t, i18n] = useTranslation('global');
  const dispatch = useDispatch();
  const [quantity, setQuantity] = useState(0);

  const decrement = () => {
    if (quantity > 0) setQuantity(quantity - 1);
  };

  const increment = () => {
    if (quantity < productDetail?.rating?.count) setQuantity(quantity + 1);
  };

  const addBasket = () => {
    dispatch(
      addToCart({
        id: productDetail?.id,
        title: productDetail?.title,
        image: productDetail?.image,
        price: productDetail?.price,
        quantity: quantity,
      })
    );
  };

  const notify = () =>
    toast.success('Added to cart', {
      position: toast.POSITION.TOP_LEFT,
    });

  const handleBothClicks = () => {
    addBasket();
    notify();
  };

  const theme = useSelector((state) => state.theme.mode);

  const containerClass = `flex gap-20 py-[100px] items-center ${
    theme === 'light' ? 'bg-slate-50' : 'bg-gray-700 text-white'
  }`;

  const containerrClass = `w-12 text-center text-6xl font-bold ${
    theme === 'light' ? 'text-black bg-slate-50' : 'text-white bg-gray-700'
  }`;

  const textClass = theme === 'light' ? 'text-black' : 'text-gray-400';

  return (
    <div className={containerClass}>
      <div className="container flex flex-col md:flex-row gap-20">
        <div className="md:w-[400px] md:h-[400px]">
          <img className="w-full h-full object-contain" src={productDetail?.image} alt="" />
        </div>
        <div className="">
          <div className={`text-4xl font-bold ${textClass}`}>{productDetail?.title}</div>
          <div className={`my-2 text-2xl ${textClass}`}>{productDetail?.description}</div>
          <div className={`my-2 text-xl ${textClass} flex`}>
            <AiFillStar />
            {t('rating')}
            <AiFillStar />: {productDetail?.rating?.rate}
          </div>
          <div className={`my-2 text-xl ${textClass}`}>
            {t('count')}: {productDetail?.rating?.count}
          </div>
          <div className="text-5xl font-bold">
            {productDetail?.price} <span className="text-sm">$</span>
          </div>
          <div className="flex items-center gap-5 my-4">
            <div
              onClick={decrement}
              className={`text-5xl cursor-pointer rounded-full bg-gray-400 p-1 hover:text-white hover:bg-black transition duration-300 ease-in-out hover:scale-90 border-none btn shadow-[0_9px_0_gray] hover:shadow-[0_4px_0px_gray] ${textClass} ${
                theme === 'light' ? 'bg-white' : 'bg-gray-700'
              } ease-out hover:translate-y-1 transition-all rounded`}
            >
              -
            </div>
            <input className={containerrClass} type="text" value={quantity} />
            <div
              onClick={increment}
              className={`text-4xl cursor-pointer rounded-full bg-gray-400 p-1 hover:text-white hover:bg-black transition duration-300 ease-in-out hover:scale-90 border-none btn shadow-[0_9px_0_gray] hover:shadow-[0_4px_0px_gray] ${textClass} ${
                theme === 'light' ? 'bg-white' : 'bg-gray-700'
              } ease-out hover:translate-y-1 transition-all rounded`}
            >
              +
            </div>
          </div>
          <div
            onClick={handleBothClicks}
            className={`my-4 border w-[200px] text-2xl rounded-md cursor-pointer h-16 flex items-center justify-center hover:text-white hover:bg-black transition duration-300 ease-in-out hover:scale-90 border-none btn shadow-[0_9px_0_gray] hover:shadow-[0_4px_0px_gray] ${textClass} ${
              theme === 'light' ? 'bg-white' : 'bg-gray-700'
            } ease-out hover:translate-y-1 transition-all rounded`}
          >
            {t('atc')}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailComp;
