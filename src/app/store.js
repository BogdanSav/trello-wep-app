import { configureStore } from '@reduxjs/toolkit';
import columnRducer from './reducers/rootReducer';

export const store = configureStore({
    reducer: {
        column: columnRducer
    },
});