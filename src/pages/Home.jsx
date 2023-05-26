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
        <hr />
        <h1 className='flex text-center justify-center align-center text-6xl font-bold my-[100px] '>{t("blgs")}</h1>
        <hr />

        <div className="home-page">
          {blogs.map((blog) => (
            <BlogCard key={blog.id} blog={blog} />
          ))}
        </div>


      </div>
    </div>
  );
};

export default Home;
