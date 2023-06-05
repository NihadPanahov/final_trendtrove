import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeFromFavorites, setFavoriteProducts } from '../src/redux/favoriteSlice';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { setItem, getItem } from './helpers/storage';

const FavoriteProducts = () => {
  const favoriteProducts = useSelector((state) => state.favorite);
  const dispatch = useDispatch();

  const handleRemoveFavorite = (productId) => {
    dispatch(removeFromFavorites(productId));
  };

  const [t, i18n] = useTranslation("global");

  const theme = useSelector(state => state.theme.mode);

  useEffect(() => {
    setItem('favoriteProducts', favoriteProducts);
  }, [favoriteProducts]);

  useEffect(() => {
    const storedFavoriteProducts = getItem('favoriteProducts');
    if (storedFavoriteProducts) {
      dispatch(setFavoriteProducts(storedFavoriteProducts));
    }
  }, []);

  if (favoriteProducts.length === 0) {
    return (
      <div className="container text-3xl">
        <p className={`bg-${theme === 'light' ? 'gray-100' : 'gray-600'} text-${theme === 'light' ? 'black' : 'white'}text-4xl font-bold mb-4 my-10 p-10 text-center`}>{t("favdisplay")}</p>
      </div>
    );
  }

  return (
    <div className={`bg-${theme === 'light' ? 'gray-200' : 'gray-600'} text-${theme === 'light' ? 'black' : 'white'}bg-gray-100 p-4 container rounded-2xl`}>
      <h2 className="text-2xl font-bold mb-4 py-5">{t("fav")}</h2>
      {favoriteProducts.map((product) => (
        <div key={product.id} className={`bg-${theme === 'light' ? 'slate-50' : 'gray-700'} text-${theme === 'light' ? 'black' : 'white'} border p-7 mb-5 rounded-lg border-none`}>
          <Link to={`/products/${product.id}`}>
            <div className="flex items-center mb-2">
              <img src={product.image} alt={product.title} className="w-12 h-12 rounded-full mr-4" />
              <div>
                <h3 className="text-xl font-semibold">{product.title}</h3>
                <p className={`text-${theme === 'light' ? 'black' : 'white'}`}>${product.price}</p>
              </div>
            </div>
          </Link>
          <button
            onClick={() => handleRemoveFavorite(product.id)}
            className="bg-red-500 text-white px-4 py-2 rounded"
          >
            {t("rmv")}
          </button>
        </div>
      ))}
    </div>
  );
};

export default FavoriteProducts;
