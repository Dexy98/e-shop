// store.tsx
import { configureStore } from '@reduxjs/toolkit';
import { api } from './features/apiSlice';
import  {details}  from './features/details';

const store = configureStore({
  reducer: {
    [api.reducerPath]: api.reducer,
    [details.name]: details.reducer
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(api.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
