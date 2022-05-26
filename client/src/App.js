import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Home from './Home';
import LoginPage from './components/LoginPage';
import React from 'react';
import Register from './components/Register';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route exact path='/login' element={<LoginPage />} />
        <Route exact path='/register' element={<Register />} />
      </Routes>
    </BrowserRouter>
  );
}


export default App;
