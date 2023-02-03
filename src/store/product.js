import axios from 'axios';
const products = (state = {}, action)=> {
  if(action.type === 'SET_PRODUCTS'){
    return action.products;
  }
  return state;
};


export const fetchProducts = ()=> {
  return async(dispatch)=> {
    const token = window.localStorage.getItem('token');
    const response = await axios.get('/api/products');
    console.log("in the return")
    dispatch({ type: 'SET_PRODUCTS', products: response.data });
  };
};


export default products;
