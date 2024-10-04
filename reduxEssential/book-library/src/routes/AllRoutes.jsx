import React from 'react';
import { Route , Routes } from 'react-router-dom';
import AddBooks from '../coomponents/AddBooks';
import SeeBooks from '../coomponents/SeeBooks';
import EditBooks from '../coomponents/EditBooks';

const AllRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<AddBooks/>}/>
        <Route path='/seeBooks' element={<SeeBooks/>}/>
        <Route path='/editBook/:id' element={<EditBooks/>}/>
      </Routes>
    </div>
  );
}

export default AllRoutes;
