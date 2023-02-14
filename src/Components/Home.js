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
      <h1 id='header'>Home</h1>
      <div className='homepage'>
        <div id='component'>
          <p border='solid 1px black'>Welcome {auth.username}!!</p>
          <img id='user_pic' src={auth.imageUrl} />
        </div>
        <div id='component'>
          <h2>Details:</h2>
          <p>Member since {createdDate}</p>
          {showProfile ? <UpdateProfile /> : <span></span>}
          <button
            onClick={() => {
              setShowProfile(true);
            }}
          >
            Update Profile
          </button>
          <button onClick={() => dispatch(logout())}>Logout</button>
        </div>
      </div>
      <div>
        <ProductList />
      </div>
    </div>
  );
};

export default Home;
