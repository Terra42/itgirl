import './App.css';
import { useState } from 'react';
import { BrowserRouter } from 'react-router-dom';
import UserView from './views/UserView';
import AdminView from './views/AdminView';

function App() {
  const [loggedIn, setLoggedIn] = useState(false);

  const handleLogin = (loggedIn) => {
    setLoggedIn(loggedIn);
    localStorage.setItem('loggedIn', loggedIn);
  };

  const handleLogOut = () => {
    setLoggedIn(false);
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
