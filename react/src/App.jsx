import logo from './logo.svg';
import './App.css';

//pages
import Login from './pages/login';
import Home from './pages/home';
import Register from './pages/register';

import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </div>
  );
}

export default App;
