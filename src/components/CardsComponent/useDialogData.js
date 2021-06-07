import { useState, useCallback } from "react";
import { setCardInfo } from "../../app/reducers/rootReducer"
import { useDispatch } from 'react-redux';
import useMoment from "./useMoment";
const useDialogData = (setValue, idCard, idCol) => {
    const dispatch = useDispatch();
    const { days, months, years, currentDay, currentMonth, currentYear } = useMoment();
    const [title, setTitle] = useState("");
    const [desc, setDesc] = useState("");
    const [presentDay, setDay] = useState(currentDay);
    const [presentMonth, setMonth] = useState(currentMonth);
    const [presentYear, setYear] = useState(currentYear);

    const handeleTitleChange = useCallback((t) => {
        if (t.target.value.length > 17) {
            alert("title is too long");
            return;
        }
        setTitle(t.target.value);
    }, [])

    const handeleDescChange = useCallback((t) => {
        setDesc(t.target.value);
    }, [])

    const handleSave = useCallback(() => {
        const date = presentDay + " " + presentMonth + " " + presentYear;
        dispatch(setCardInfo({ idCol, idCard, newTitle: title, newDate: date, newDesc: desc }));
    }, [dispatch, desc, title, idCard, idCol, presentDay, presentMonth, presentYear]);

    const changeDay = useCallback((e) => {

        setDay(e.target.value);
    }, []);

    const changeMonth = useCallback((e) => {

        setMonth(e.target.value);
    }, []);

    const changeYear = useCallback((e) => {

        setYear(e.target.value);
    }, []);

    const handleClose = useCallback(() => {
        handleSave();
        setValue(false);
    }, [setValue, handleSave]);

    return {
        title,
        presentDay,
        presentMonth,
        presentYear,
        days,
        months,
        years,
        desc,
        handleClose,
        changeYear,
        changeMonth,
        changeDay,
        handeleDescChange,
        handeleTitleChange
    }
}

export default useDialogData;