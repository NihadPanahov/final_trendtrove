import { createSlice } from '@reduxjs/toolkit';

const favoriteSlice = createSlice({
  name: 'favorite',
  initialState: [],
  reducers: {
    addToFavorites: (state, action) => {
      const product = action.payload;
      const existingProduct = state.find((item) => item.id === product.id);

      if (!existingProduct) {
        state.push(product);
      }
    },
    removeFromFavorites: (state, action) => {
      const productId = action.payload;
      const index = state.findIndex((item) => item.id === productId);

      if (index !== -1) {
        state.splice(index, 1);
      }
    },
    setFavoriteProducts: (state, action) => {
      return action.payload;
    },
  },
});

export const { addToFavorites, removeFromFavorites, setFavoriteProducts } = favoriteSlice.actions;
export default favoriteSlice.reducer;
