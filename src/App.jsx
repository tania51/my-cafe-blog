import { useState } from 'react'
import './App.css'
import Blogs from './components/Blogs/Blogs'
import Bookmarks from './components/Bookmarks/Bookmarks'
import Header from './components/Header/Header'

function App() {
  const [bookMarks, setBookmarks] = useState([]);
  const [readingTime, setReadingtime] = useState(0);

  const bookmarkHandeler = blog => {
    const newBookmarksarr = [...bookMarks, blog];
    setBookmarks(newBookmarksarr);
  }

  // time function
  const bookmarkTime = (time, id) => {
    const newTime = readingTime + time;
    setReadingtime(newTime)
    const removeBlogItem = bookMarks.filter(bookMark => bookMark.id !== id);
    setBookmarks(removeBlogItem)

  }

  return (
    <div className='mx-36'>
      <Header></Header>
      <div className='flex gap-6 mt-10'>
        <Blogs bookmarkHandeler={bookmarkHandeler} bookmarkTime={bookmarkTime}></Blogs>
        <Bookmarks bookMarks={bookMarks} readingTime={readingTime}></Bookmarks>
      </div>
    </div>
  )
}

export default App
