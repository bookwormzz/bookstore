import { fetchProducts } from "../../store/product";
import { useSelector, useDispatch } from "react-redux";
import React, { useState } from "react";
import store from "../../store";
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
      <h1> Products List </h1>

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
