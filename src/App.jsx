import React, { useContext, useEffect } from 'react';
import './App.css';
import Home from './pages/Home';
import BlogPage from './pages/BlogPage'
import TagPage from './pages/TagPage';
import CategoryPage from './pages/CategoryPage';
import { AppContext } from './context/Appcontext';
import { Route, Routes, useLocation, useSearchParams } from 'react-router-dom';




function App() {
  const {fatchBlogPosts} = useContext(AppContext);
  const [searchParams , setSearchParams] = useSearchParams()
  const location = useLocation();

  useEffect(()=>{
    const page = searchParams.get("page") ?? 1;
    if(location.pathname.includes("tags")){
      //iska mathlab tag wala page show karna h
      const tag = location.pathname.split("/").at(-1).replaceAll("-"," ");
      fatchBlogPosts(Number(page), tag);
    }
    else if(location.pathname.includes("categeries")){
      const cotegory = location.pathname.split("/").at(-1).replaceAll("-"," ");
      fatchBlogPosts(Number(page),null, cotegory);
    }
    else{
      fatchBlogPosts(Number(page));
    }
  },[ location.pathname, location.search]);
  return (
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/blog/:blogId' element={<BlogPage/>}/>
      <Route path='/tags/:tag' element={<TagPage/>}/>
      <Route path='/categories/:category' element={<CategoryPage/>}/>
    </Routes>
  );
}

export default App;