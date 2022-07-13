import './style.css';
import PostPreview from '../../components/PostPreview';
import { db } from '../../db.js';
import { collection, addDoc } from 'firebase/firestore';
import { useState, useEffect } from 'react';

const PostPublish = ({ onPublish }) => {
  const [views, setViews] = useState(0);
  const [comments, setComments] = useState(0);

  const [author, setAuthor] = useState('Petra');
  const [img, setImg] = useState('');
  const [heading, setHeading] = useState('');
  const [subheading, setSubheading] = useState('');
  const [posted, setPosted] = useState('');
  const [readTime, setReadTime] = useState(0);

  const [content, setContent] = useState([]);

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
    if (localStorage.getItem('postContent') !== null) {
      const postContent = JSON.parse(localStorage.getItem('postContent'));
      setContent(postContent);
    }
  }, []);

  const publishPost = () => {
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
    localStorage.clear();
    onPublish();
  };

  return (
    <>
      <div className="post-publish">
        <h3>3. Review &amp; publish your Post</h3>
        <PostPreview
          heading={heading}
          subheading={subheading}
          content={content}
        />
        <div className="controls post-publish--controls">
          <button className="action-btn publish" onClick={publishPost}>
            Publish
          </button>
        </div>
      </div>
    </>
  );
};

export default PostPublish;
