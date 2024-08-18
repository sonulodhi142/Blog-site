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
    <div className='app'>
      
      <Header/>
      <div className='blogss'>
      <Blogs/>
      </div>
      <Pagination/>
    </div>
  );
}

export default App;