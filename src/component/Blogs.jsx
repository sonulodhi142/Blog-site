import React, { useContext } from 'react';
import { AppContext } from '../context/Appcontext';
import Spinner from './Spinner';
import './Blogs.css'

const Blogs = () => {

  const {loading, posts} = useContext(AppContext)
  
  return (
    <div>
      {
      loading ? (<Spinner/>) :(posts.length === 0 ? (<div className='no-post'><p>No post Found</p></div> ):(posts.map((post)=> (
        <div className='blog' key={post.id}>
          <p className='blog-title'>{post.title}</p>
          <p className='blog-author'>
            by <span>{post.author}</span> on <span>{post.category}</span>
          </p>
          <p>{post.img}</p>
          <p blog-date>post on {post.date}</p>
          <p className='blog-contant'>{post.content}</p>
          <div className='blog-tag'>
            {post.tags.map((tag,index)=>{
              return <span key={index}>{`#${tag}`}</span>
            })}
          </div>
        </div>
      )) )) 
      }
    </div>
  );
};

export default Blogs;