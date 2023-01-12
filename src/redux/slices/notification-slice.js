import { createSlice } from '@reduxjs/toolkit';

const notificationSlice = createSlice({
  name: 'notification',
  initialState: {
    notificationMessage: '',
    type: '',
    show: false,
  },
  reducers: {
    showNotification(state, action) {
      const notificationPayload = action.payload;

      state.notificationMessage = notificationPayload.message;
      state.type = notificationPayload.type;
      state.show = true;
    },
    removeNotification(state) {
      state.notificationMessage = '';
      state.type = '';
      state.show = false;
    },
  },
});

export const notificationActions = notificationSlice.actions;

export default notificationSlice;
