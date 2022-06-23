import './style.css';
import { useState } from 'react';
//import Content from '../../components/Content/index.jsx';
import { db } from '../../db.js';
import { collection, addDoc } from 'firebase/firestore';

const PostForm = ({ onLogOut }) => {
  const [author, setAuthor] = useState('Petra');
  const [img, setImg] = useState('');
  const [heading, setHeading] = useState('');
  const [subheading, setSubheading] = useState('');
  const [posted, setPosted] = useState('');
  const [readTime, setReadTime] = useState(0);
  const [views, setViews] = useState(0);
  const [comments, setComments] = useState(0);
  const [content, setContent] = useState([]);

  const [type, setType] = useState('p');
  const [text, setText] = useState('');

  const publishPost = (event) => {
    event.preventDefault();
    setViews(0);
    setComments(0);
    addDoc(collection(db, 'posts'), {
      author,
      img,
      heading,
      subheading,
      posted,
      readTime,
      views,
      comments,
      content,
    });
  };

  const addContent = (event) => {
    event.preventDefault();
    setContent((content) => [...content, { type, text }]);
  };

  /*   const showPreview = (event) => {
    event.preventDefault();
    document.querySelector('.preview-article').style.display = 'block';
  }; */

  return (
    <>
      <div className="post-form">
        <button className="logout" onClick={onLogOut}>
          Log Out
        </button>
        <form>
          <h3>Post info</h3>
          <div className="post-form--info">
            <label htmlFor="author">Author</label>
            <input
              type="text"
              name="author"
              id="author"
              value={author}
              onChange={(e) => setAuthor(e.target.value)}
              required
            />
            <label htmlFor="img">Img</label>
            <input
              type="text"
              name="img"
              id="img"
              value={img}
              onChange={(e) => setImg(e.target.value)}
              required
            />
            <label htmlFor="heading">Heading</label>
            <input
              type="text"
              name="heading"
              id="heading"
              value={heading}
              onChange={(e) => setHeading(e.target.value)}
              required
            />
            <label htmlFor="subhead">Subheading</label>
            <input
              type="text"
              name="subhead"
              id="subhead"
              value={subheading}
              onChange={(e) => setSubheading(e.target.value)}
            />
            <label htmlFor="posted">Posted</label>
            <input
              type="datetime-local"
              name="posted"
              id="posted"
              value={posted}
              onChange={(e) => setPosted(e.target.value)}
              required
            />
            <label htmlFor="readTime">Read Time</label>
            <input
              type="number"
              name="readTime"
              id="readTime"
              value={readTime}
              onChange={(e) => setReadTime(e.target.value)}
              required
            />
          </div>
          <div className="post-form--content">
            <h3>Post content</h3>
            <label htmlFor="type">Type</label>
            <select
              id="type"
              name="type"
              required
              value={type}
              onChange={(e) => setType(e.target.value)}
            >
              <option value="h2">h2</option>
              <option value="h3">h3</option>
              <option value="p">p</option>
            </select>
            <label htmlFor="text">Text</label>
            <textarea
              name="text"
              id="text"
              value={text}
              onChange={(e) => setText(e.target.value)}
              required
            />
          </div>
          <div className="post-form--controls">
            <button className="add" onClick={(event) => addContent(event)}>
              Add content
            </button>

            {/* <button onClick={(event) => showPreview(event)}>Preview</button> */}
            <button className="publish" onClick={(event) => publishPost(event)}>
              Publish
            </button>
          </div>
        </form>
      </div>
      {/*       <article className="preview-article">
        <div className="article-container">
          <div className="article-header">
            <img src="../../img/logo.jpg" alt="Logo" className="article-logo" />
            <p className="article-author">{author}</p>
            <span className="round-divider"></span>
            <p className="article-posted">{posted} days ago</p>
            <span className="round-divider"></span>
            <p className="readTime">{readTime} min read</p>
          </div>
          <div className="article-content">
            <h2>{heading}</h2>
            <p>{subheading}</p>
            {content.map((line) => (
              <Content line={line} key={line.text} />
            ))}
          </div>
          <div className="article-footer">
            <p className="article-views">{views} views</p>
            <span className="round-divider"></span>
            <p className="article-comments">{comments} comments</p>
          </div>
        </div>
      </article> */}
    </>
  );
};

export default PostForm;
