import './App.css';
import { useState } from 'react';
import { BrowserRouter } from 'react-router-dom';
import UserView from './views/UserView/index';
import AdminView from './views/AdminView/index';
import { useEffect } from 'react';

function App() {
  const [loggedIn, setLoggedIn] = useState(false);

  useEffect(() => {
    if (localStorage.getItem('loggedIn') === 'true') {
      setLoggedIn(true);
    }
  }, []);

  const handleLogin = (loggedIn) => {
    setLoggedIn(loggedIn);
    localStorage.setItem('loggedIn', loggedIn);
  };

  const handleLogOut = () => {
    setLoggedIn(false);
    localStorage.removeItem('loggedIn');
  };

  return (
    <BrowserRouter>
      <div className="App">
        {loggedIn ? (
          <AdminView onLogOut={handleLogOut} />
        ) : (
          <UserView onLogin={handleLogin} />
        )}
      </div>
    </BrowserRouter>
  );
}

export default App;
