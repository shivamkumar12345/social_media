import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {  BrowserRouter as Router, Route, Routes, BrowserRouter } from 'react-router-dom';
import { CreateAccount } from './component/signup';
import { Login } from './component/login';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
          <Route exact path='/' element={<Login/>}/>
          <Route exact path='/signup' element={<CreateAccount/>}/>
          <Route exact path="/home" element={<App />} />
      </Routes>
      </BrowserRouter>
  </React.StrictMode>
);

