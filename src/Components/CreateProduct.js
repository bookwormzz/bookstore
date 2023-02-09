import React, { useState } from "react";
import { useForm } from "react-hook-form";

const CreateProduct = () => {
  const [formValue, setFormValue] = useState({
    name: "",
    author: "",
    imageUrl: "",
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data, event) => {
    event.preventDefault();
    //    dispatch(updateUser(data));
    console.log("submit");
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
