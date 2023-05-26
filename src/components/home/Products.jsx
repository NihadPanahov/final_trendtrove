import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getCategoryProducts, getProducts } from '../../redux/productSlice';
import Loading from '../Loading';
import Product from './Product';
import ReactPaginate from 'react-paginate';
import { useTranslation } from 'react-i18next';

const Products = ({ category, sort }) => {
  const [t, i18n] = useTranslation('global');

  const dispatch = useDispatch();
  const { products, productsStatus } = useSelector((state) => state.products);

  const [itemOffset, setItemOffset] = useState(0);
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredProducts, setFilteredProducts] = useState([]);

  const itemsPerPage = 6;
  const endOffset = itemOffset + itemsPerPage;
  console.log(`Loading items from ${itemOffset} to ${endOffset}`);
  const currentItems = filteredProducts.slice(itemOffset, endOffset);
  const pageCount = Math.ceil(filteredProducts.length / itemsPerPage);

  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % filteredProducts.length;
    console.log(
      `User requested page number ${event.selected}, which is offset ${newOffset}`
    );
    setItemOffset(newOffset);
  };

  useEffect(() => {
    if (category) {
      dispatch(getCategoryProducts(category));
    } else {
      dispatch(getProducts());
    }
  }, [dispatch, category]);

  useEffect(() => {
    const filtered = products.filter((product) =>
      product.title.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setFilteredProducts(filtered);
    setItemOffset(0);
  }, [products, searchQuery]);

  return (
    <div>
      <div>
        <input
          className="border-double hover:border-dotted rounded-lg shadow opacity-50 text-gray-900 drop-shadow outline-0 shadow-gray-100 border-gray p-2 m-5 mt-1 border-4"
          type="text"
          value={searchQuery}
          onChange={(event) => setSearchQuery(event.target.value)}
          placeholder={t('srchbyt')}
        />
      </div>
      {productsStatus === 'LOADING' ? (
        <Loading />
      ) : (
        <>
          <div className="flex flex-wrap ">
            {currentItems
              .sort((a, b) =>
                sort === 'inc' ? a.price - b.price : sort === 'dec' ? b.price - a.price : null
              )
              .map((product, i) => (
                 <div >  <Product key={i} product={product} /> </div>
              ))}
          </div>
          <ReactPaginate
            className="paginate"
            breakLabel="..."
            nextLabel=">"
            onPageChange={handlePageClick}
            pageRangeDisplayed={5}
            pageCount={pageCount}
            previousLabel="<"
            renderOnZeroPageCount={null}
          />
        </>
      )}
    </div>
  );
};

export default Products;
