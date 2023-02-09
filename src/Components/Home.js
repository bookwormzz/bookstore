import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { logout } from "../store";
import ProductList from "./ProductList";
import UpdateProfile from "./UpdateProfile";
import { Link } from "react-router-dom";

const Home = () => {
  const { auth } = useSelector((state) => state);
  const dispatch = useDispatch();
  // const [showProfile, setShowProfile] = useState(false);
  const createdDate = new Date(auth.createdAt).toLocaleDateString();
  const token = auth.id;
  return (
    <div>
      <h1>Home</h1>
      <div>
        Welcome {auth.username}!!
        <img src={auth.imageUrl} height='200' width='200' />
        <h2>Details:</h2>
        <p>Member since {createdDate}</p>
        <UpdateProfile />
        {/* <button
          onClick={() => {
            setShowProfile(true);
          }}
        >
          showProfile
        </button> */}
        <button onClick={() => dispatch(logout())}>Logout</button>
        <ProductList />
      </div>
    </div>
  );
};

export default Home;
