import React, {  useContext } from 'react';
import { AppContext } from '../context/Appcontext';

const Pagination = () => {

  const {page, handlePage,totalPages} = useContext(AppContext)
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
            <button onClick={() => handlePage(page +1)}>Next</button>
          )
        }
        <p>page {page} of {totalPages}</p>
      </div>
    </div>
  );
};

export default Pagination;
