import './style.css';
import PostDetail from '../PostDetail';
import { Link } from 'react-router-dom';

const NewPost = ({ newPost }) => {
  return (
    <section className="new-post">
      <div className="new-post--content">
        <h3 className="new-post--heading">New post</h3>
        <div className="new-post--list">
          {newPost !== null && newPost !== undefined ? (
            <PostDetail post={newPost} />
          ) : null}
        </div>
        <p className="new-post--more">
          Do you want to see more
          <span>
            {' '}
            <Link to="posts">articles</Link>
          </span>
          ?
        </p>
      </div>
    </section>
  );
};

export default NewPost;
