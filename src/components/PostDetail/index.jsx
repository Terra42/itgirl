import './style.css';
import { Link } from 'react-router-dom';
import { getTimePosted } from '../../utils.js';

const PostDetail = ({ post }) => {
  let {
    img,
    author,
    posted,
    readTime,
    heading,
    subheading,
    views,
    comments,
    id,
  } = post;

  return (
    <div className="post-detail">
      <div
        className="post-image"
        style={{
          backgroundImage: `url(${img})`,
        }}
      ></div>
      <div className="post-content">
        <div className="post-header">
          <div className="post-header-container1">
            <img src="./img/logo.jpg" alt="Logo" className="author-logo" />
            <p className="author-name">{author}</p>
          </div>
          <div className="post-header-container2">
            <p className="posted">{getTimePosted(posted)}</p>
            <span className="round-divider"></span>
            <p className="read-time">{readTime} min</p>
          </div>
        </div>
        <div className="post-intro">
          <Link to={`/article/${id}`}>
            <h3 className="post-heading">{heading}</h3>
            <p className="post-subheading">{subheading}</p>
          </Link>
        </div>
        <div className="post-divider"></div>
        <div className="post-info">
          <p className="post-views">{views} views</p>
          <p className="post-comments">{comments} comments</p>
        </div>
      </div>
    </div>
  );
};

export default PostDetail;
