import axios from "axios";
const users = (state = [], action) => {
  console.log("ACTION", action);
  if (action.type === "SET_USERS") {
    return action.users;
  } else if (action.type === "GET_USER") {
    return action.user;
  }
  return state;
};

const getUser = (id) => {
  return async (dispatch) => {
    const token = window.localStorage.getItem("token");
    const user = await axios.get(
      `/api/users/${id}`,
      {
        headers: {
          authorization: token,
        },
      },
      user
    );
    dispatch({ type: "GET_USER", orders: user.data });
  };
};

const updateUser = (user) => {
  return async (dispatch) => {
    const token = window.localStorage.getItem("token");
    const newUser = await axios.put("/api/users/", user, {
      headers: {
        authorization: token,
      },
    });
    console.log("USER FROM THUNK", newUser.data);
    dispatch({ type: "SET_USERS", users: newUser.data });
  };
};

export { updateUser, getUser };
export default users;
