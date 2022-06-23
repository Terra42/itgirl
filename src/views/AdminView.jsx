import PostForm from '../pages/PostForm';

const AdminView = ({ onLogOut }) => {
  return (
    <>
      <PostForm onLogOut={onLogOut} />
    </>
  );
};

export default AdminView;
