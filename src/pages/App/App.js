import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';


// Components
import AuthPage from '../AuthPage/AuthPage';

import NavBar from '../../components/NavBar/NavBar';

// Helpers
import { getUser } from '../../utilities/services/users';

import './App.css';

export default function App() {
  const [user, setUser] = useState(getUser());

  return (
    <main className="App">
      { user ?
          <>
          <NavBar user={user} setUser={setUser} />
            <Routes>
              {/* Route components in here */}
              <Route path="/orders/new" element={<h1>Page 1</h1>} />
              <Route path="/orders" element={<h1>Page 2</h1>} />
            </Routes>
          </>
          :
          <AuthPage setUser={setUser}/>
      }
    </main>
  );
}
