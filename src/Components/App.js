import React, { useEffect } from 'react';
import Home from './Home';
import Login from './Login';
import Cart from './Cart';
import { useSelector, useDispatch } from 'react-redux';
import { loginWithToken, fetchCart } from '../store';
import { Link, Routes, Route } from 'react-router-dom';
import IndividualProduct from './IndividualProduct';

const App = ()=> {
  const { auth } = useSelector(state => state);
  const dispatch = useDispatch();
  useEffect(()=> {
    dispatch(loginWithToken());
  }, []);

  useEffect(()=> {
    if(auth.id){
      dispatch(fetchCart());
    }
  }, [auth]);
  return (
    <div>
      <h1>Acme Shopping</h1>
      {
        !!auth.id  && (
          <div>
            <nav>
              <Link to='/'>Home</Link>
              <Link to='/cart'>Cart</Link>
            </nav>
            <Routes>
              <Route exact path='/cart' element={ <Cart /> } />
              <Route exact path='/product/:id' element = {<IndividualProduct/>} />
              <Route exact path='/' element = {<Home/>}/>
            </Routes>
          </div>
        )
      }
       {
        auth.id ? null : <Login />
      }
    </div>
  );
};

export default App;
