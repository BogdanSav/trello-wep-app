import { createSlice } from '@reduxjs/toolkit';

const columnReducer = createSlice({
    name: "columnRducer",
    initialState: ["first one", "second one"],
    reducers: {
        addNewColumn(state, action) {
            return state.concat(action.payload);
        },
        deleteColumn(state, action) {
            return state.filter((value, id) => id !== action.payload);
        },
        changeTitle(state, action) {
            return state.map((value, id) => {
                if (id === action.payload.id) {
                    return value = action.payload.text;
                } else return value;
            });
        }
    }
})
export const columns = state => state;
export const { addNewColumn, deleteColumn, changeTitle } = columnReducer.actions;
export default columnReducer.reducer;