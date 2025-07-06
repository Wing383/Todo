import React, { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import './index.css';

import Login from './pages/Login/Login';
import Signup from './pages/Signup/Signup';
import Add from './pages/Add/Add';


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        {/* ログイン画面をルートに */}
        <Route path="/" element={<Login />} />
        {/* サインアップ画面 */}
        <Route path="/signup" element={<Signup />} />

        <Route path="/Add" element={<Add />} />

      </Routes>
    </BrowserRouter>
  </StrictMode>
);
