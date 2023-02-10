import { fetchProducts } from "../store/product";
import { useSelector, useDispatch } from "react-redux";
import store from "../store";
import React from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";

const ProductList = () => {
  const { products } = useSelector((state) => state);

  // const [searchTerm, setSearchTerm] = React.useState("");
  // const handleChange = (event) => {
  //   setSearchTerm(event.target.value);
  // };

  // const results = !searchTerm
  //   ? products
  //   : products.filter((product) =>
  //       product.toLowerCase().includes(searchTerm.toLocaleLowerCase())
  //     );
  // console.log("RESULTS", results);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchProducts());
  }, []);

  return (
    <div>
      <h1> Products List </h1>
      {/* <div>
        <input
          type='text'
          placeholder='Search'
          value={searchTerm}
          onChange={handleChange}
        />
        <ul>{results && results.map((item) => <li>{item}</li>)}</ul>
      </div> */}
      <ul>
        {products.products !== []
          ? products.products.map((product) => {
              return (
                <li key={product.id}>
                  <Link to={`/product/${product.id}`}> {product.name}</Link>
                </li>
              );
            })
          : "loading"}
      </ul>
    </div>
  );
};

export default ProductList;
