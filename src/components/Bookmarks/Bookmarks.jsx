import PropTypes from 'prop-types';

const Bookmarks = ({ bookMarks, readingTime }) => {
    
    return (
        <div className="w-1/3">
            <h2 className="text-xl bg-blue-50 text-blue-500 border-blue-500 border font-bold mb-4 bg-white p-4 rounded-md">Spent time on read : {readingTime} min</h2>
            <div className="p-4 rounded-md bg-slate-100">
                <h2 className="text-xl font-bold mb-2 p-4">Bookmarked Blogs : {bookMarks.length}</h2>
                {
                    bookMarks.map((bookMark, idx) => <h3 key={idx} className="text-lg font-semibold bg-white mb-2 p-4 rounded-md">{bookMark.title}</h3>)
                }
            </div>
        </div>
    );
};

Bookmarks.propTypes = {
    bookMarks: PropTypes.array.isRequired,
    readingTime: PropTypes.number.isRequired
}

export default Bookmarks;