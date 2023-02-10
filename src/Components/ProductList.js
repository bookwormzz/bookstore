import { fetchProducts } from "../store/product";
import { useSelector, useDispatch } from "react-redux";
import store from "../store";
import React from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";

const ProductList = () => {
  const { products } = useSelector((state) => state);

  const [searchTerm, setSearchTerm] = React.useState("");
  const handleChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const results = !searchTerm
    ? products.products
    : products.products.filter((product) =>
        product.name.toLowerCase().includes(searchTerm.toLocaleLowerCase())
      );
  console.log("RESULTS", results);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchProducts());
  }, []);

  return (
    <div>
      <h1> Products List </h1>
      <div>
        <input
          type='text'
          placeholder='Search'
          value={searchTerm}
          onChange={handleChange}
        />
        <ul>
          {results &&
            results.map((item) => (
              <li>
                <Link to={`/product/${item.id}`} key={item.id}>
                  {" "}
                  {item.name}
                </Link>
              </li>
            ))}
        </ul>
      </div>
    </div>
  );
};

export default ProductList;
