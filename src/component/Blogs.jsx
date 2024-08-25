import React, { useContext } from 'react';
import { AppContext } from '../context/Appcontext';
import Spinner from './Spinner';
import './Blogs.css'
import BlogDetails from './BlogDetails'

const Blogs = () => {

  const {loading, posts} = useContext(AppContext)
  
  return (
    <div>
      {
      loading ? (<Spinner/>) :posts.length === 0 ? (<div className='no-post'><p>No post Found</p></div> ):(posts.map((post)=> (
        <BlogDetails key={post.id} post={post} />
      )) ) 
      }
    </div>
  );
};

export default Blogs;