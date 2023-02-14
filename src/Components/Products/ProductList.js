import { fetchProducts } from "../../store/product";
import { useSelector, useDispatch } from "react-redux";
import React, { useState } from "react";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { addProduct } from "../../store";

const ProductList = () => {
  const { products, auth } = useSelector((state) => state);
  const [show, setShow] = useState(false);
  const [userType, setUserType] = useState(auth.userType);

  const [searchTerm, setSearchTerm] = React.useState("");
  const handleChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const results = !searchTerm
    ? products.products
    : products.products.filter((product) =>
        product.name.toLowerCase().includes(searchTerm.toLocaleLowerCase())
      );

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProducts());
  }, []);

  const showProductEdit = () => {
    setShow(true);
  };

  // Add Product
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data, event) => {
    event.preventDefault();
    dispatch(addProduct(data));
    setShow(false);
  };

  return (
    <div>
      <div id='header-column'>
        <h1> Book List </h1>
        {userType === "admin" && (
          <button onClick={showProductEdit}>Add Product</button>
        )}
        <input
          type='text'
          placeholder='Search'
          value={searchTerm}
          onChange={handleChange}
        />
      </div>
      <div id='product-list-container'>
        <div id='product-grid-row'>
          {results
            ? results.map((product) => {
                return (
                  <div id='product-item' key={product.id}>
                    <Link to={`/product/${product.id}`}>
                      <img src={product.imageUrl} />
                    </Link>
                    <Link to={`/product/${product.id}`}>
                      <span>{product.name}</span>
                    </Link>
                  </div>
                );
              })
            : "loading"}{" "}
        </div>
      </div>
      <div id='add-product'>
        {show && (
          <div>
            <h2>Add a New Product</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
              <label htmlFor='name'>Book Name</label>
              <input name='name' {...register("name")} />
              <label htmlFor='author'>Author</label>
              <input name='author' {...register("author")} />
              <button type='submit'>Submit</button>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductList;