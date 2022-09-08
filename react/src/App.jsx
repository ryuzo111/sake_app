import logo from './logo.svg';
import './App.css';
import Login from './pages/login';
import Home from './pages/home';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/login" element={<Login />} />
      </Routes>
    </div>
  );
}

export default App;
