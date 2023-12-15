import { configureStore } from '@reduxjs/toolkit';
import { productApi } from '../service/products';
import { setupListeners } from '@reduxjs/toolkit/query';

const store = configureStore({
    reducer: {
        [productApi.reducerPath]: productApi.reducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(productApi.middleware),
});

setupListeners(store.dispatch)
export default store
