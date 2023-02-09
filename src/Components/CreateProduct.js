import React, { useState } from "react";

const CreateProduct = () => {
  const [formValue, setFormValue] = useState({
    name: "",
    author: "",
    imageUrl: "",
  });

  const handleSubmit = (event) => {
    console.log("submit");
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormValue((prevState) => {
      return {
        ...prevState,
        [name]: value,
      };
    });
    console.log(formValue);
  };

  return (
    <div>
      <h2>Edit Product</h2>
      <form onSubmit={handleSubmit}>
        <label>Book Name</label>
        <input name="name" value={formValue.name} onChange={handleChange} />
        <label>Author</label>
        <input name="author" value={formValue.author} onChange={handleChange} />
        <label>Image</label>
        <button>Submit</button>
      </form>
    </div>
  );
};

export default CreateProduct;
