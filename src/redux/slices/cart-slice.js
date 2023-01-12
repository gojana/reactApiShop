import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    items: [],
    totalQuantity: 0,
    totalAmount: 0,
  },
  reducers: {
    addItemToCart(state, action) {
      const newItem = action.payload;
      const existingItem = state.items.find(
        (item) => item.itemId === newItem.itemId
      );
      if (!existingItem) {
        state.items.push({
          itemId: newItem.itemId,
          name: newItem.name,
          price: newItem.price,
          img: newItem.img,
          quantity: 1,
          totalPrice: newItem.price,
        });
        state.totalQuantity++;
        state.totalAmount = state.totalAmount + newItem.price;
      } else {
        existingItem.quantity = existingItem.quantity + 1;
        existingItem.totalPrice = existingItem.totalPrice + newItem.price;
        state.totalQuantity++;
        state.totalAmount += newItem.price;
      }
      const itemStringified = JSON.stringify(state.items);
      localStorage.setItem('cart', itemStringified);
    },
    removeItemFromCart(state, action) {
      const id = action.payload;
      const existingItem = state.items.find((item) => item.itemId === id);
      existingItem.totalPrice -= existingItem.price;
      state.totalQuantity--;
      if (existingItem.quantity === 1) {
        state.totalAmount -= existingItem.price;
        state.items = state.items.filter((item) => item.itemId !== id);
      } else {
        existingItem.quantity--;
        state.totalAmount -= existingItem.price;
      }
      const itemStringified = JSON.stringify(state.items);
      localStorage.setItem('cart', itemStringified);
    },
    addLocalStorageItem(state, action) {
      const newItem = action.payload;
      state.items.push(newItem);
      state.totalQuantity = state.totalQuantity + newItem.quantity;
      state.totalAmount = state.totalAmount + newItem.quantity * newItem.price;
    },
  },
});
export const cartActions = cartSlice.actions;

export default cartSlice;
