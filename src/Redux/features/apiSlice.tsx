// apiSlice.tsx
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { products } from '../../react-app-env';




export const api = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://fakestoreapi.com/' }),
  endpoints: (builder) => ({
    getProducts: builder.query<products[], void>({
      query: () => 'products',  
    }),
    getCategory: builder.query<products[],void>({
      query:()=> 'products/categories',
    }),
    getByCategory: builder.query<products[], string>({
      query: (value)=> `products/category/${value}`
    }),
  }),
});

export const { useGetProductsQuery, useGetCategoryQuery,useGetByCategoryQuery } = api;
