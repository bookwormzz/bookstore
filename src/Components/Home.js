import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { logout } from "../store";
import ProductList from "./Products/ProductList";
import UpdateProfile from "./UpdateProfile";

const Home = () => {
  const { auth } = useSelector((state) => state);
  const dispatch = useDispatch();
  const createdDate = new Date(auth.createdAt).toLocaleDateString();
  const [showProfile, setShowProfile] = useState(false);

  return (
    <div>
      <h1>Home</h1>
      <div>
        Welcome {auth.username}!!
        <img src={auth.imageUrl} height='200' width='200' />
        <h2>Details:</h2>
        <p>Member since {createdDate}</p>
        {/* <UpdateProfile /> */}
        {showProfile ? <UpdateProfile /> : <span></span>}
        <button
          onClick={() => {
            setShowProfile(true);
          }}
        >
          Update Profile
        </button>
        <button onClick={() => dispatch(logout())}>Logout</button>
        <ProductList />
      </div>
    </div>
  );
};

export default Home;
