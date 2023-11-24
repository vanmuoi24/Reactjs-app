import { createSlice } from "@reduxjs/toolkit";
import { userList } from "./Data";
const getUserListFromLocalStorage = () => {
  const userList = localStorage.getItem("userList");
  return userList ? JSON.parse(userList) : [];
};

// Initial state using data from localStorage or an empty array
const initialState = getUserListFromLocalStorage();

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    addsuer: (state, action) => {
      state.push(action.payload);
      localStorage.setItem("userList", JSON.stringify(state));
    },
    updateUser: (state, action) => {
      const { id, name, email } = action.payload;
      const uu = state.find((user) => user.id == id);
      if (uu) {
        uu.name = name;
        uu.email = email;
      }
      localStorage.setItem("userList", JSON.stringify(state));
    },

    deleteUser: (state, action) => {
      const { id } = action.payload;
      const uu = state.find((user) => user.id == id);
      if (uu) {
        return state.filter((f) => f.id !== id);
      }
      localStorage.setItem("userList", JSON.stringify(state));
    },
  },
});
export const { addsuer, updateUser, deleteUser } = userSlice.actions;
export default userSlice.reducer;
