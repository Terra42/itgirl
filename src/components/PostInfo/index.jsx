import './style.css';
import { useState, useEffect } from 'react';
import { getTodayDateTime } from '../../utils';

const PostInfo = () => {
  const [author, setAuthor] = useState('Petra');
  const [img, setImg] = useState('');
  const [heading, setHeading] = useState('');
  const [subheading, setSubheading] = useState('');
  const [posted, setPosted] = useState(getTodayDateTime());
  const [readTime, setReadTime] = useState(3);

  useEffect(() => {
    if (localStorage.getItem('postInfo') !== null) {
      const postInfo = JSON.parse(localStorage.getItem('postInfo'));
      const { author, img, heading, subheading, posted, readTime } = postInfo;
      setAuthor(author);
      setImg(img);
      setHeading(heading);
      setSubheading(subheading);
      setPosted(posted);
      setReadTime(readTime);
    }
  }, []);

  const createPost = () => {
    const postInfo = {
      author,
      img,
      heading,
      subheading,
      posted,
      readTime,
    };
    localStorage.setItem('postInfo', JSON.stringify(postInfo));
  };

  return (
    <>
      <div className="post-info">
        <h3 className="post-info--title">1. Fill in Post details</h3>
        <div className="post-info--inputs">
          <div className="post-info--container">
            <div className="input-field">
              <label htmlFor="author">Author</label>
              <input
                type="text"
                name="author"
                id="author"
                value={author}
                onChange={(e) => setAuthor(e.target.value)}
              />
            </div>
            <div className="input-field">
              <label htmlFor="img">Img</label>
              <input
                type="text"
                name="img"
                id="img"
                placeholder="Image url"
                value={img}
                onChange={(e) => setImg(e.target.value)}
              />
            </div>
            <div className="input-field">
              <label htmlFor="posted">Posted</label>
              <input
                type="datetime-local"
                name="posted"
                id="posted"
                value={posted}
                onChange={(e) => setPosted(e.target.value)}
              />
            </div>
          </div>
          <div className="post-info--container">
            <div className="input-field">
              <label htmlFor="heading">Heading</label>
              <input
                type="text"
                name="heading"
                id="heading"
                placeholder="Eg. Welcome to my site..."
                value={heading}
                onChange={(e) => setHeading(e.target.value)}
              />
            </div>
            <div className="input-field">
              <label htmlFor="subhead">Subheading</label>
              <input
                type="text"
                name="subhead"
                id="subhead"
                placeholder="Eg. My name is Petra and this is my blog.."
                value={subheading}
                onChange={(e) => setSubheading(e.target.value)}
              />
            </div>
            <div className="input-field">
              <label htmlFor="readTime">Read Time</label>
              <input
                type="number"
                name="readTime"
                id="readTime"
                value={readTime}
                onChange={(e) => setReadTime(e.target.value)}
              />
            </div>
          </div>
        </div>
        <div className="controls">
          <button className="action-btn" onClick={createPost}>
            Save
          </button>
        </div>
      </div>
    </>
  );
};

export default PostInfo;
