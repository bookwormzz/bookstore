import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import UpdateProfile from "./UpdateProfile";

const Account = () => {
  const { auth } = useSelector((state) => state);
  const dispatch = useDispatch();
  const createdDate = new Date(auth.createdAt).toLocaleDateString();
  const [showProfile, setShowProfile] = useState(false);

  return (
    <div>
      <div>
        <img src={auth.imageUrl} height="200" width="200" />
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
      </div>
    </div>
  );
};

export default Account;