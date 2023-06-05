import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { toggleTheme } from '../redux/themeSlice';
import SliderComp from '../components/home/SliderComp';
import Sorting from '../components/home/Sorting';
import Category from '../components/home/Category';
import Products from '../components/home/Products';
import Clock from '../components/Clock';
import { useTranslation } from 'react-i18next';

import { setBlogs } from '../redux/blogSlice';
import jsonData from '../api/blogData.json';
import BlogCard from '../components/BlogCard';
import FavoriteProducts from '../FavoriteProducts';

import fav1 from "../img/fav1.jpg";
import fav2 from "../img/fav2.webp";
import fav3 from "../img/fav3.webp";
import fav4 from "../img/fav4.jpg";
import blogbgpic from "../img/blogbgpic.webp";


const Home = () => {

  const dispatch = useDispatch();
  const theme = useSelector((state) => state.theme.mode)
  const divClass = theme == 'light' ? 'bg-slate-50 text-black' : 'bg-gray-700 text-white'
  const [t, i18n] = useTranslation("global");

  const [sort, setSort] = useState('');
  const [category, setCategory] = useState('');

  const handleToggleTheme = () => {
    dispatch(toggleTheme());
  };

  const blogs = useSelector((state) => state.blog);

  useEffect(() => {
    const fetchData = () => {
      dispatch(setBlogs(jsonData));
    };

    fetchData();
  }, [dispatch]);

  return (
    <div className={divClass}>
      <div className="container mx-auto " style={{ maxWidth: "1200px" }}>
        <SliderComp />
        <Sorting setSort={setSort} />
        <div className='flex flex-wrap'>
          <div className='lg:w-2/12 max-md:w-full '>
            <Category setCategory={setCategory} />
          </div>
          <div className='lg:w-10/12 max-md:w-full'>
            <Products category={category} sort={sort} />
          </div>
        </div>
        <Clock />
        {/* <hr /> */}

        <div className=' bg-custom-bg h-full py-[200px] my-20 rounded-2xl' style={{
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          backgroundAttachment: 'fixed',
        }}>
          <h1 className='flex text-center justify-center align-center text-6xl font-bold  '>{t("blgs")}</h1>
        </div>

        {/* <hr /> */}

        <div className="home-page">
          {blogs.map((blog) => (
            <BlogCard key={blog.id} blog={blog} />
          ))}
        </div>


      </div>

      <div className='flex my-20 justify-center'>
        <div className='w-[40%] ' style={{ clipPath: 'polygon(100% 0, 58% 17%, 74% 100%, 30% 100%, 43% 17%, 0% 0%)' }}>
          <img src={fav3} alt="" />
        </div>
        <div className='w-[40%] mt-20 ' style={{ clipPath: 'polygon(100% 0, 58% 17%, 74% 100%, 30% 100%, 43% 17%, 0% 0%)' }}>
          <img src={fav4} alt="" />
        </div>
        <div className='w-[40%] ' style={{ clipPath: 'polygon(100% 0, 58% 17%, 74% 100%, 30% 100%, 43% 17%, 0% 0%)' }}>
          <img src={fav2} alt="" />
        </div>
        <div className='w-[40%] mt-20 ' style={{ clipPath: 'polygon(100% 0, 58% 17%, 74% 100%, 30% 100%, 43% 17%, 0% 0%)' }}>
          <img src={fav1} alt="" />
        </div>
      </div>



      <FavoriteProducts />
    </div>
  );
};

export default Home;
