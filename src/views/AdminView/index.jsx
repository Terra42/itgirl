import PostForm from '../../pages/PostForm';
import './style.css';

const AdminView = ({ onLogOut }) => {
  return (
    <>
      <header className="admin-header">
        <div>
          <h2>Admin view</h2>
        </div>
        <div>
          <button className="logout-btn" onClick={onLogOut}>
            Log Out
          </button>
        </div>
      </header>
      {window.innerWidth > 1200 ? (
        <PostForm />
      ) : (
        <h3>
          Admin dashboard is optimized only for laptops with the minimum screen
          width: 1200px.
        </h3>
      )}
    </>
  );
};

export default AdminView;
