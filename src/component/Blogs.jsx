import React, { useContext } from 'react';
import { AppContext } from '../context/Appcontext';
import Spinner from './Spinner';

const Blogs = () => {

  const {loading, posts} = useContext(AppContext)
  
  return (
    <div>
      {
      loading ? (<Spinner/>) :(posts.length === 0 ? (<div><p>No post Found</p></div> ):(posts.map((post)=> (
        <div key={post.id}>
          <p>{post.title}</p>
          <p>
            by <span>{post.author}</span> on <span>{post.category}</span>
          </p>
          <p>post on {post.date}</p>
          <p>{post.content}</p>
          <div>
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