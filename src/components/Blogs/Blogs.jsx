import PropTypes from 'prop-types';

import { useEffect } from "react";
import { useState } from "react";
import Blog from "../Blog/Blog";

const Blogs = ({bookmarkHandeler, bookmarkTime}) => {
    const [blogs, setBlogs] = useState([]);

    useEffect(() => {
        fetch('blogs.json')
        .then(res => res.json())
        .then(data => setBlogs(data))
    }, [])

    return (
        <div className="w-2/3">
            {
                blogs.map(blog => <Blog key={blog.id} blog={blog} bookmarkHandeler={bookmarkHandeler} bookmarkTime={bookmarkTime}></Blog>)
            }
        </div>
    );
};

Blogs.propTypes = {
    bookmarkHandeler: PropTypes.func.isRequired,
    bookmarkTime: PropTypes.func.isRequired
}

export default Blogs;