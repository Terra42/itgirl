import Intro from '../../components/Intro';
import NewPost from '../../components/NewPost';

function Homepage({ newPost }) {
  return (
    <div className="homepage">
      <Intro />
      {newPost !== null || newPost !== undefined ? (
        <NewPost newPost={newPost} />
      ) : null}
    </div>
  );
}

export default Homepage;
