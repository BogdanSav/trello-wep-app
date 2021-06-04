import { configureStore } from '@reduxjs/toolkit';
import columnRducer from './reducers/columnsReducer';

export const store = configureStore({
    reducer: {
        column: columnRducer
    },
});