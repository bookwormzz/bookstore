import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { useForm } from "react-hook-form";
import { updateUser } from "../store/user";

const UpdateProfile = () => {
  const { auth } = useSelector((state) => state);
  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data, event) => {
    event.preventDefault();
    dispatch(updateUser(data));
  };
  return (
    <div>
      <h1>Update Profile</h1>
      <div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <label htmlFor='address'>Shipping address: </label>
          <input
            type='text'
            defaultValue={auth.address}
            name='address'
            {...register("address")}
          />
          <label htmlFor='email'>Email: </label>
          <input
            type='text'
            defaultValue={auth.email}
            name='email'
            {...register("email")}
          />
          <button 
          className="btn btn-primary"
          type='submit'>submit</button>
        </form>
      </div>
    </div>
  );
};

export default UpdateProfile;
