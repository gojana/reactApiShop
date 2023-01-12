import { configureStore } from '@reduxjs/toolkit';

import loginSlice from './slices/login-slice';
import cartSlice from './slices/cart-slice';
import autoCompleteSlice from './slices/autoComp-slice';
import notificationSlices from './slices/notification-slice';

const store = configureStore({
  reducer: {
    login: loginSlice.reducer,
    cart: cartSlice.reducer,
    autoComplete: autoCompleteSlice.reducer,
    notification: notificationSlices.reducer,
  },
});

export default store;
