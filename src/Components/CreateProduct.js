import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { addProduct } from "../store";

const CreateProduct = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const dispatch = useDispatch();
  const onSubmit = (data, event) => {
    event.preventDefault();
    dispatch(addProduct(data));
  };

  return (
    <div>
      <h2>Edit Product</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <label htmlFor="name">Book Name</label>
        <input name="name" {...register("name")} />
        <label htmlFor="author">Author</label>
        <input name="author" {...register("author")} />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default CreateProduct;
