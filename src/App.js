import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './App.css';
import Header from './Header';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Cars from './pages/Cars'
import { loadPosts } from './store/posts/postActions'



function App() {
  const dispatch = useDispatch() 

  useEffect(() => {
    dispatch(loadPosts())
  })

 
  
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/cars" element={<Cars />} />
        </Routes>
      </div>
    </Router>

  );
}

export default App;
