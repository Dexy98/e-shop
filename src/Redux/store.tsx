// store.tsx
import { configureStore } from '@reduxjs/toolkit';
import { api } from './features/apiSlice';
import  {details}  from './features/details';
import { cartSlice } from './features/cart';
import {searchValue} from './features/searchValue';

const store = configureStore({
  reducer: {
    [api.reducerPath]: api.reducer,
    [searchValue.name]: searchValue.reducer,
    [details.name]: details.reducer,
    [cartSlice.name]: cartSlice.reducer
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(api.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
