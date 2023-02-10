import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { logout } from '../store';
import ProductList from './Products/ProductList';

const Home = ()=> {
  const { auth } = useSelector(state => state);
  const dispatch = useDispatch();
  return (
    <div>
      <h1>Home</h1>
      <div>
        Welcome { auth.username }!!
        <button onClick={()=> dispatch(logout())}>Logout</button>
        <ProductList />
      </div>
    </div>
  );
};

export default Home;
