import React from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { useTranslation } from 'react-i18next';
import { TbArticleOff } from 'react-icons/tb'


const Blog = () => {

  const theme = useSelector((state) => state.theme.mode);

  const containerClass = `blog py-[100px]  ${theme === 'light' ? 'bg-slate-50 text-black' : 'bg-gray-700 text-white'
    }`;

  const [t, i18n] = useTranslation("global");

  const { id } = useParams();
  const blogs = useSelector((state) => state.blog);
  const blog = blogs.find((blog) => blog.id === parseInt(id));

  if (!blog) {
    return (
      <>
        <Helmet>
          <title>Blog - Not Found</title>
          <meta name="description" content="Blog article not found." />
        </Helmet>
        <div className='text-3xl align-center font-bold text-center'>
          <div className={containerClass}>
            {t("noblog")} <TbArticleOff className='mt-[15px] animate-spin flex justify-center align-center m-auto mb-[130px]' />
          </div>
        </div>
      </>
    );
  }

  return (
    <>
      <Helmet>
        <title>{blog.title}</title>
        <meta name="description" content={blog.content} />
      </Helmet>

      <div className="blog">
        <h2>{blog.title}</h2>
        <p>{blog.content}</p>
        <p>Author: {blog.author}</p>
        <p>Date: {blog.date}</p>
      </div>
    </>
  );
};

export default Blog;
