import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchProduct } from "../../store/product";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import { addToCart } from "../../store";
import Reviews from "./Reviews";

const IndividualProduct = (props)=> {
    // Need to filter out the product based on 
    //how to access props.match in a functional component
    //is it the norm to have some sort of state setting function in each component, so we don't risk returning a blank component?
    const { products } = useSelector(state => state)
    const productId = props.id
    const [items, setItems] = useState([]);
    const [quantity, setQuantity] = useState({
      quantity: 0,
    });
  


  const selectedProduct = (products.products.filter((prod)=> {
    if (prod.id === productId) return true
    return false
  }))[0]

    const handleSubmit= (e) => {
      e.preventDefault();
      let orderQuant = parseInt(quantity.quantity)
      dispatch(addToCart({quantity: orderQuant, product: {
        id: productId
      },}))
      setQuantity({quantity: 0})
    }

    useEffect(() => {
      const items = JSON.parse(localStorage.getItem("cart"));
      if (items) {
        setItems(items);
      }
    }, []);

    const dispatch = useDispatch();

  // useEffect(() => {
  //   localStorage.setItem("cart", JSON.stringify(items));
  // }, [items]);

    // else {
    //   console.log("non-auth");
    //   // Check if there are items in the cart
    //   if (items.items) {
    //     // check if the item exists and if so increase the qty;
    //     let lineItem = items.items.find((lineItem) => {
    //       return lineItem.product.id === newItem.product.id;
    //     });
    //     if (lineItem) {
    //       lineItem.quantity += newItem.quantity;
    //       const otherItems = items.items.filter((item) => {
    //         item.product.id !== newItem.product.id;
    //       });
    //       setItems({ items: [...otherItems, lineItem] });
    //     }
    //     //if it doesnt exist add the item
    //     else {
    //       setItems((items) => [...items, newItem]);
    //     }
    //     console.log("if items", items);
    //   }
    //   // If there are no items in the cart, add the item
    //   else {
    //     setItems({ items: [newItem] });
    //     console.log("else", items);
    //   }
    // }
  //   setQuantity({ quantity: 0 });
  // };

  const onChange = (ev) => {
    setQuantity({ quantity: ev.target.value });
  };

    return (
      <div>
        <h1> {selectedProduct.name} </h1>


      <h2> Add to cart </h2>

        <form onSubmit={e => {handleSubmit(e)}}>
        <div className="input-group mb-3">
          <div className="input-group-prepend">
            <span className="input-group-text" id="inputGroup-sizing-default">
              Quantity
            </span>
          </div>
          <input
            value = {quantity.quantity} onChange={onChange}
            type="text"
            className="form-control"
            aria-label="Default"
            aria-describedby="inputGroup-sizing-default"
          />
        </div>
        <button className="btn btn-primary" names="add-cart" type = "submit"> Add to cart </button>
        </form>



        <div>
        </div>
        
      </div>
  );
};

export default IndividualProduct;
