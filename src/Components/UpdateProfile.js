import React from "react";
import { useSelector, useDispatch } from "react-redux";

const UpdateProfile = () => {
  const { auth } = useSelector((state) => state);
  return (
    <div>
      <h1>Update Profile</h1>
      <div>
        <form>
          <label htmlFor='username'>Name: </label>
          <input type='text' value={auth.username} name='username' />
          <label htmlFor='address'>Address: </label>
          <input type='text' value={auth.address} name='address' />
          <label htmlFor='email'>Email: </label>
          <input type='text' value={auth.email} name='email' />
        </form>
      </div>
    </div>
  );
};

export default UpdateProfile;
