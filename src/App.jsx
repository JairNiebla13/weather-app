import { useState } from 'react'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Logo from './assets/homepage/logo.png';
import logout from './assets/logout.png';
import HomePage from './pages/HomePage';
import Login from './pages/Login';
import UserPage from './pages/UserPage';
import { auth } from './firebase-config';
import { signOut } from 'firebase/auth';

function App() {

  const [isAuth, setIsAuth] = useState(localStorage.getItem("isAuth"));

  const signUserOut = () => {
    signOut(auth).then(() => {
      localStorage.clear();
      window.location.pathname = "/login";
    });
  };

  console.log(isAuth);
  return (
    <BrowserRouter>
      <nav className="bg-slate-700 flex justify-between items-center border-gray-500">
        <div className="flex-1 text-start">
          <Link to="/" className=""><img className="w-32 h-auto rounded-sm" src={Logo} alt="logo app" /></Link>
        </div>
        <div className='flex justify-between'>
          {
            isAuth ? (
              <button onClick={signUserOut}><img src={logout} alt="logout-image" className='w-10' /></button>
            ) : (
              <Link to="/login" className="bg-sky-300 rounded-sm flex space-x-4 mr-4">Login</Link>
            )
          }
        </div>
      </nav>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/login' element={<Login setIsAuth={setIsAuth} />} />
        <Route path='/userpage' element={<UserPage isAuth={isAuth} />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
