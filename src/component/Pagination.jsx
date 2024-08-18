import React, { createContext } from 'react';
import { AppContext } from '../context/Appcontext';

const Pagination = () => {

  const {page, handlePage,totalPages} = createContext(AppContext)
  return (
    <div>
      <div>
        {
          page>1 && (
            <button onClick={() => handlePage(page - 1)}>previous</button>
          )
        }
        {
          page<totalPages && (
            <button onClick={() => handlePage(page +1)}>previous</button>
          )
        }
      </div>
    </div>
  );
};

export default Pagination;
