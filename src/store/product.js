import axios from 'axios';
const products = (state = {
  products: [],
  selected: {}
}, action)=> {
  if(action.type === 'SET_PRODUCTS'){
    return {...state,
      products: action.products};
  }
  if(action.type === 'SET_PRODUCT'){
    return {...state,
      selected: action.product};
  }
  return state;
};


export const fetchProducts = ()=> {
  return async(dispatch)=> {
    try {const response = await axios.get('/api/products');
    dispatch({ type: 'SET_PRODUCTS', products: response.data });}
    catch (e) {
      console.log(e)
    }
  };
};

export const fetchProduct = (id) => {
  console.log("in fetch product")
  return async(dispatch)=> {
    try {
    const response = await axios.get(`/api/products/${id}`);
    dispatch({ type: 'SET_PRODUCT', product: response.data });}
    catch (e) {
      console.log(e)
    }
  };
}


export default products;
