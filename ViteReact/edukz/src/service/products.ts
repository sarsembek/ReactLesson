import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { Product } from '../types/Product';

export const productApi = createApi({
    reducerPath: 'productApi',
    baseQuery: fetchBaseQuery({ baseUrl: "https://fakestoreapi.com" }),
    endpoints: (builder) => ({
        getProductsById: (builder.query<Product, string>({
            query: (id) => `/products/${id}`,
        })),
    })
})

export const { useGetProductsByIdQuery } = productApi