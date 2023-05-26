import React from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

const BlogPage = () => {
    const { id } = useParams();
    const blogs = useSelector((state) => state.blog);
    const blog = blogs.find((blog) => blog.id === Number(id));

    const theme = useSelector((state) => state.theme.mode);

    if (!blog) {
        return <div>Blog not found</div>;
    }

    const containerClass = `blog-page pt-10 ${theme === 'light' ? 'bg-slate-50 text-black' : 'bg-gray-700 text-white'
        }`;

    const textClass = theme === 'light' ? 'text-gray-700' : 'text-white';

    return (
        <div className={containerClass}>
            <div className="container">
                <h2 className={`text-4xl font-bold mb-2 mt-10 ${textClass}`}>{blog.title}</h2>
                <div className="flex flex-col md:flex-row">
                    <div className="w-full md:w-2/3">
                        <p className={`my-10 ${textClass}`}>{blog.content}</p>
                        <p className={`text-gray-600 ${textClass}`}> <i>Author: {blog.author}</i> </p>
                        <p className={`text-gray-600 mb-20 ${textClass}`}> <i>Date: {blog.date}</i> </p>
                    </div>
                    <div className="w-full md:w-1/3">
                        <img src={blog.image} alt={blog.title} className="w-full h-auto rounded-lg pb-10" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BlogPage;
