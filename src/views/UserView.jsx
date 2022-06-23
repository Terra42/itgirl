import Homepage from '../pages/Homepage';
import Posts from '../pages/Posts';
import Login from '../pages/Login';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Article from '../pages/Article';
import { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import { db } from '../db';
import { collection, onSnapshot, query } from 'firebase/firestore';

const UserView = ({ onLogin }) => {
  const [posts, setPosts] = useState([]);
  const [newPost, setNewPost] = useState(null);

  const newQuery = query(collection(db, 'posts'));

  useEffect(() => {
    return onSnapshot(newQuery, (querySnapshot) => {
      setPosts(
        querySnapshot.docs.map((dokument) => {
          return { ...dokument.data(), id: dokument.id };
        }),
      );
    });
  }, [newQuery]);

  useEffect(() => {
    setNewPost(posts[0]);
  }, [posts]);

  const handleLogin = (loggedIn) => {
    onLogin(loggedIn);
  };

  return (
    <>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Homepage newPost={newPost} />} />
          <Route path="posts" element={<Posts posts={posts} />} />
          <Route path="login" element={<Login onLogin={handleLogin} />} />
          <Route path="article/:postId" element={<Article />} />
          <Route
            path="*"
            element={
              <main style={{ padding: '1rem' }}>
                <p>There's nothing here!</p>
              </main>
            }
          />
        </Routes>
      </main>
      <Footer />
    </>
  );
};

export default UserView;
