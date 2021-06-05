import { createSlice } from '@reduxjs/toolkit';

const columnReducer = createSlice({
    name: "columnRducer",
    initialState: [{
            title: "first one",
            cards: [{
                title: "card1",
                date: "05.06.2021",
                description: "Desc"
            }]
        },
        {
            title: "second one",
            cards: [{
                title: "card2",
                date: "05.06.2021",
                description: "Desc"
            }]
        }
    ],
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
        },
        addNewCard(state, action) {
            console.log(state[action.payload].cards);
        },
        // deleteCards(state, action) {
        //     return state[action.payload].cards = [];
        // }
    }
})
export const columns = state => state;
export const { addNewColumn, deleteColumn, changeTitle, addNewCard } = columnReducer.actions;
export default columnReducer.reducer;