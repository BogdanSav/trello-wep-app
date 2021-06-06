import { createSlice } from '@reduxjs/toolkit';

const columnReducer = createSlice({
    name: "columnRducer",
    initialState: [{
            title: "first one",
            cards: [{
                title: "card1",
                date: "5 Jun 2021",
                description: "Desc"
            }]
        },
        {
            title: "second one",
            cards: [{
                title: "card2",
                date: "5 Jun 2021",
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
                    return {...value, title: action.payload.text, cards: value.cards }
                } else return value;
            });
        },
        addNewCard(state, action) {
            return state.map((item, id) => {
                if (id === action.payload) {
                    return {...item,
                        title: item.title,
                        cards: item.cards.concat({ title: "untitled" + item.cards.length, date: "", description: "type your description" })
                    }
                } else return item;
            });
        },
        deleteCards(state, action) {
            return state.map((item, id) => {
                if (id === action.payload.idCol) {
                    return {...item,
                        title: item.title,
                        cards: item.cards.filter((item, id) => id !== action.payload.idCard)
                    }
                } else return item;
            });
        },
        setCardInfo(state, action) {
            return state.map((item, id) => {
                if (id === action.payload.idCol) {
                    return {...item,
                        title: item.title,
                        cards: item.cards.map((_item, _id) => {
                            if (_id === action.payload.idCard) {
                                return {..._item,
                                    title: action.payload.newTitle || _item.title,
                                    date: action.payload.newDate || _item.date,
                                    description: action.payload.newDesc || _item.description
                                }
                            } else return _item;

                        })
                    }
                } else return item;
            });
        }
    }
})
export const columns = state => state;
export const { addNewColumn, deleteColumn, changeTitle, addNewCard, deleteCards, setCardInfo } = columnReducer.actions;
export default columnReducer.reducer;