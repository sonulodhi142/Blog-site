import React, { useContext } from 'react';
import { AppContext } from '../context/Appcontext';
import Spinner from './Spinner';

const Blogs = () => {

  const {loading} = useContext(AppContext)
  
  return (
    <div>
      loading ? <Spinner/> : ;
    </div>
  );
};

export default Blogs;