import { createSlice } from '@reduxjs/toolkit';

const loginSlice = createSlice({
  name: 'login',
  initialState: {
    isLogged: false,
    mail: '',
    role: 'user',
    photo: '',
    username: '',
    id: '',
  },
  reducers: {
    logout(state) {
      state.isLogged = false;
      state.mail = '';
      state.role = 'user';
      state.photo = '';
      state.username = '';
      state.id = '';
    },
    login(state, action) {
      const requestData = action.payload;

      state.isLogged = true;
      state.mail = requestData.mail;
      state.role = requestData.role;
      state.photo = requestData.photo;
      state.username = requestData.username;
      state.id = requestData.id;
    },
    updateUser(state, action) {
      const requestData = action.payload;
      state.username = requestData.username;
      state.photo = requestData.photo;
    },
  },
});

export const loginActions = loginSlice.actions;

export default loginSlice;
