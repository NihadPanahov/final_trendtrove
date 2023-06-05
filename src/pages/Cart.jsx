import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation, useNavigate } from 'react-router-dom';
import { getCartTotal } from '../redux/cartSlice';
import CartComp from '../components/cart/CartComp';
import { TbShoppingCartX } from 'react-icons/tb';
import { useTranslation } from 'react-i18next';

const Cart = () => {
    const [t, i18n] = useTranslation('global');
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const { carts, totalAmount, itemCount } = useSelector((state) => state.carts);
    const theme = useSelector((state) => state.theme.mode);

    useEffect(() => {
        dispatch(getCartTotal({}));
    }, [dispatch]);

    const containerClass = `py-[81px] ${theme === 'light' ? 'bg-slate-50' : 'bg-gray-700 text-white'}`;

    const textClass = theme === 'light' ? 'text-black' : 'text-gray-400';

    return (
        <div className={containerClass}>
            <div className="container">
                {carts?.length > 0 ? (
                    <div className={`font-bold text-lg cursor-default ${textClass}`}>
                        {carts?.map((cart, i) => (
                            <div key={i} className="mb-4">
                                <CartComp cart={cart} />
                            </div>
                        ))}
                        <div className="flex items-center justify-end text-2xl font-light mt-16">
                            {/* <span className="mr-[10%] sm:text-[20px] text-[15px]"><i>{t("note")}</i> </span> */}
                            <div className='sm:text-2xl text-[17px]'>{t('ta')} :{' '}</div>

                            <span className="font-bold sm:text-3xl text-sm ml-2 underline">{totalAmount} $</span>
                        </div>
                    </div>
                ) : (
                    <div className="text-3xl align-center font-bold mt-[10%] text-center pb-12">
                        {t('ec')}
                        <TbShoppingCartX className="mt-[15px] animate-spin flex justify-center align-center m-auto ml-[48.5%]" />
                    </div>
                )}
            </div>
        </div>
    );
};

export default Cart;
