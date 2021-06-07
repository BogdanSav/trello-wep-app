import { useState, useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { deleteColumn, changeTitle, addNewCard, addNewColumn } from '../../app/reducers/rootReducer';
const useColumnsData = (title, id) => {
    const dispatch = useDispatch();
    const [titleText, setTitleText] = useState(title);

    const changeCurrentTitle = useCallback((e) => {
        setTitleText(e.target.value);
    }, [])

    const saveTitleChange = useCallback((e) => {
        dispatch(changeTitle({ text: titleText, id }))
    }, [dispatch, id, titleText]);

    const deleteCol = useCallback(() => {
        dispatch(deleteColumn(id));
    }, [dispatch, id]);

    const addCard = useCallback(() => {
        dispatch(addNewCard(id));
    }, [dispatch, id]);

    const addColumn = useCallback(() => {
        dispatch(addNewColumn({ title: "", cards: [] }));
    }, [dispatch]);

    return { titleText, changeCurrentTitle, saveTitleChange, deleteCol, addCard, addColumn }
}
export default useColumnsData;