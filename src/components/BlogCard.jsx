import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

const BlogCard = ({ blog }) => {
  const { id, title, content, image } = blog;

  const truncatedContent = content.slice(0, 100) + '...';

  const isImageOnLeft = id % 2 === 0; 
  const theme = useSelector((state) => state.theme.mode);

  const containerClass = `flex flex-wrap items-center bg-gray-300 shadow-md rounded-lg p-6 mb-4 hover:scale-105 transition-transform duration-300 cursor-default my-10 ${
    theme === 'light' ? 'hover:bg-gray-200' : 'hover:bg-gray-700 bg-gray-600'
  }`;
  const textClass = theme === 'light' ? 'text-gray-700' : 'text-gray-300';
  const linkClass = theme === 'light' ? 'text-blue-500' : 'text-blue-600';

  return (
    <div className={containerClass}>
      {isImageOnLeft && (
        <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5 mb-4 md:mb-0">
          <img src={image} alt={title} className="w-full h-auto rounded-lg" />
        </div>
      )}

      <div className="w-full sm:w-1/2 md:w-2/3 lg:w-3/4 xl:w-4/5 px-6">
        <h2 className="text-xl font-bold mb-2">{title}</h2>
        <p className={`${textClass} mb-4`}>{truncatedContent}</p>
        <Link to={`/blog/${id}`} className={`${linkClass} font-bold hover:underline`}>
          Read More
        </Link>
      </div>

      {!isImageOnLeft && (
        <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5 mb-4 md:mb-0">
          <img src={image} alt={title} className="w-full h-auto rounded-lg" />
        </div>
      )}
    </div>
  );
};

export default BlogCard;
