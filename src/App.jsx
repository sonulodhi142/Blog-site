import React from 'react';
import './App.css';
import Header from './component/Header';
import Blogs from './component/Blogs';
import Pagination from './component/Pagination';




function App() {
  return (
    <div>
      <h1>My name is sonu lodhi</h1>
      <Header/>
      <Blogs/>
      <Pagination/>
    </div>
  );
}

export default App;