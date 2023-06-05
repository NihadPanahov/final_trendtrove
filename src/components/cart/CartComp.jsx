import React from 'react';
import { removeFromCart } from '../../redux/cartSlice';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import { useTranslation } from 'react-i18next';

const CartComp = ({ cart }) => {
  const [t, i18n] = useTranslation('global');
  const dispatch = useDispatch();
  const theme = useSelector((state) => state.theme.mode);

  // setTimeout(() => {
  //   window.location.reload();
  // }, 6000);

  const handleFirstClick = () => {
    dispatch(removeFromCart(cart?.id));
  };

  const handleSecondClick = () => {
    toast.error('Deleted from cart', {
      position: toast.POSITION.TOP_RIGHT,
    });
  };

  const containerClass = `py-10 flex items-center justify-between container ${theme === 'light' ? 'bg-slate-50' : 'bg-gray-700 text-white'
    }`;

  const textClass = theme === 'light' ? 'text-black' : 'text-gray-400';

  const buttonClass = `bg-red-700 text-white lg:w-[150px] w-[150px] lg:text-xl text-[10px] cursor-pointer lg:rounded-md rounded-full h-16 flex items-center justify-center font-normal ${textClass} ${theme === 'light' ? 'bg-red-700' : 'bg-red-600'
    }`;

  return (
    <>
      <div className={`grid grid-cols-2 gap-4 lg:grid-cols-4 text-start justify-around ${containerClass}`}>
        <img className="lg:w-[150px] h-[150px] md:w-[100px]  object-contain  sm:h-full w-[100px] my-4" src={cart?.image} alt="" />
        <div className="col-span-2 lg:col-span-1">
          <div className={` text-xl md:text-2xl text-[10px] lg:ml-0 md:ml-[30px] sm:ml-[10px] mr-4 ${textClass}`}>{cart?.title}</div>
          <div className={textClass}>{cart?.description}</div>
        </div>
        <div className={`font-bold lg:text-2xl text-sm mr-4 ${textClass}`}>
          {cart?.price} $ ({cart?.quantity})
        </div>
        <div onClick={() => {
          handleFirstClick();
          handleSecondClick();
        }} className={buttonClass}>
          {t('delete')}
        </div>
      </div>
      <hr className='text-green-900 mt-5' />

    </>

  );
};

export default CartComp;
