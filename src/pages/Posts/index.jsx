import './style.css';
import PostDetail from '../../components/PostDetail';

const Posts = ({ posts }) => {
  return (
    <section className="posts">
      <div className="posts-content">
        <h3 className="posts-heading">All posts</h3>
        <div className="posts-list">
          {posts !== null && posts !== undefined && posts.length > 0
            ? posts.map((post) => <PostDetail post={post} key={post.id} />)
            : null}
        </div>
      </div>
    </section>
  );
};

export default Posts;
