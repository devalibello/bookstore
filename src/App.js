import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Books from './components/Books';
import Navbar from './components/Navbar';

const App = () => (
  <div>
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" Component={Books} />
      </Routes>
    </BrowserRouter>
  </div>
);

export default App;
