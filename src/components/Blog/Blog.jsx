import PropTypes from 'prop-types';
import { FaBookmark } from "react-icons/fa";

const Blog = ({blog, bookmarkHandeler, bookmarkTime}) => {
    const { cover, author_img, author, posted_date, reading_time, title, hashtags, id } = blog;
    return (
        <div className="mb-16 space-y-3">
            <img className="rounded-md" src={cover} alt="" />
            <div className="flex justify-between items-center">
                <div className="flex">
                    <img className="w-14 mr-2" src={author_img} alt="" />
                    <div>
                        <h3 className="text-lg font-bold">{author}</h3>
                        <p className="text-gray-500">{posted_date}</p>
                    </div>
                </div>
                <div className="flex">
                    <p className="text-gray-500">{reading_time} min read</p>
                    <button onClick={() => bookmarkHandeler(blog)} className="text-orange-600 ml-3"><FaBookmark /></button>
                </div>
            </div>
            <h3 className="text-3xl font-bold">{title}</h3>
            <p className="text-gray-500">
                {
                    hashtags.map((hashtag, idx) => <span key={idx} className="mr-3">#{hashtag}</span>)
                }
            </p>
            <button onClick={() => bookmarkTime(reading_time, id)} className="text-blue-700 underline">Mark as read</button>
        </div>
    );
};

Blog.propTypes = {
    blog: PropTypes.object.isRequired,
    bookmarkHandeler: PropTypes.func.isRequired,
    bookmarkTime: PropTypes.func.isRequired
}

export default Blog;