import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getCategories } from '../../redux/categorySlice';

const Category = ({ setCategory }) => {
  const dispatch = useDispatch();
  const { categories } = useSelector((state) => state.categories);
  const theme = useSelector((state) => state.theme.mode);

  useEffect(() => {
    dispatch(getCategories());
  }, [dispatch]);

  const containerClass = `bg-gray-100 p-4 max-h-screen rounded-xl h-screen ${theme === 'light' ? 'text-black' : 'text-white bg-gray-600'
    }`;
  const categoryClass = `text-lg cursor-pointer hover:bg-gray-200 p-2 ${theme === 'light' ? 'text-black' : 'text-white bg-gray-600 hover:bg-gray-700'
    }`;

  return (
    <div className='md:text-center lg:w-[100%] md:w-[500px] md:ml-[23%] lg:ml-0'>
      <div className={containerClass}>
        <div className="border-b pb-1 px-2 text-xl font-bold">Category</div>
        {categories?.map((category, i) => (
          <div
            onClick={() => setCategory(category)}
            className={categoryClass}
            key={i}
          >
            {category}
          </div>
        ))}
      </div>
    </div>

  );
};

export default Category;
