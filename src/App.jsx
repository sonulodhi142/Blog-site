import React, { useContext, useEffect } from 'react';
import './App.css';
import Header from './component/Header';
import Blogs from './component/Blogs';
import Pagination from './component/Pagination';
import { AppContext } from './context/Appcontext';




function App() {
  const {fatchBlogPosts} = useContext(AppContext);

  useEffect(()=>{
    fatchBlogPosts();
  },[])
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