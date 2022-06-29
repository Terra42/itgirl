import './style.css';
import { useState, useEffect } from 'react';
import { db } from '../../db';
import { doc, getDoc } from 'firebase/firestore';

const Login = ({ onLogin }) => {
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const [loginInfo, setLoginInfo] = useState(null);

  useEffect(() => {
    const usersRef = doc(db, 'users', 'admin');
    getDoc(usersRef)
      .then((doc) => {
        if (doc.exists) {
          setLoginInfo(doc.data());
        } else {
          // doc.data() will be undefined in this case
          console.log('No such document!');
        }
      })
      .catch((error) => {
        console.log('Error getting document:', error);
      });
  }, []);

  const evaluateData = (event) => {
    event.preventDefault();
    if (loginInfo.username === userName && loginInfo.password === password) {
      onLogin(true);
    } else {
      document.querySelector('.login-incorrect').style.display = 'block';
      setUserName('');
      setPassword('');
    }
  };

  return (
    <div className="login">
      <h2 className="login-heading">Admin access</h2>
      <p className="login-incorrect">Incorrect login details. Access denied!</p>
      <form className="login-form">
        <label htmlFor="username">Username:</label>
        <input
          type="text"
          name="username"
          id="username"
          value={userName}
          onChange={(e) => setUserName(e.target.value)}
        />
        <label htmlFor="password">Password:</label>
        <input
          type="password"
          name="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button onClick={(e) => evaluateData(e)}>Login</button>
      </form>
    </div>
  );
};

export default Login;
