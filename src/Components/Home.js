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
      <div className="card mb-3">
        <div className="row g-0">
          <div className="col-md-4">
            <img
              src={auth.imageUrl}
              alt="Trendy Pants and Shoes"
              className="img-fluid rounded-start"
            />
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <h5 className="card-title">Welcome {auth.username}</h5>
                <p>Member since {createdDate}</p>
                {/* <UpdateProfile /> */}
                {showProfile ? <UpdateProfile /> : <span></span>}
                <button
                className="btn btn-secondary"
                  onClick={() => {
                    setShowProfile(true);
                  }}
                >
                  Update Profile
                </button>
                <button className="btn btn-tertiary" onClick={() => dispatch(logout())}>Logout</button>
            </div>
          </div>
        </div>
      </div>

      <div>
        <ProductList />
      </div>
    </div>
  );
};

export default Home;
