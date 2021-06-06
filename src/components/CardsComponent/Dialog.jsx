import React, { useCallback, useState } from 'react';
import { Dialog, DialogTitle, DialogContent, DialogActions, Button, FormControl, InputLabel, Input, TextField, FormGroup, Select, MenuItem, Grid } from "@material-ui/core"
import { setCardInfo } from "../../app/reducers/columnsReducer"
import { useDispatch } from 'react-redux';
import useMoment from "./useMoment";
import {v4} from 'uuid';
import "./dialog.scss"
function DialogComponent({ open, setValue, idCol, idCard }) {

    const dispatch = useDispatch();
    const { days, months, years, currentDay, currentMonth, currentYear } = useMoment();
    const [title, setTitle] = useState("");
    const [desc, setDesc] = useState("");
    const [presentDay, setDay] = useState(currentDay);
    const [presentMonth, setMonth] = useState(currentMonth);
    const [presentYear, setYear] = useState(currentYear);

    const handeleTitleChange = useCallback((t) => {
        setTitle(t.target.value);
    }, [])

    const handeleDescChange = useCallback((t) => {
        setDesc(t.target.value);
    }, [])
    const handleSave = useCallback(() => {
        const date = presentDay + " " + presentMonth + " " + presentYear;
        dispatch(setCardInfo({ idCol, idCard, newTitle: title, newDate: date, newDesc: desc }));
    }, [dispatch, desc, title, idCard, idCol, presentDay, presentMonth, presentYear])
    const changeDay = useCallback((e) => {
        console.log(e.target.value)
        setDay(e.target.value);
    }, []);
    const changeMonth = useCallback((e) => {
        console.log(e.target.value)
        setMonth(e.target.value);
    }, []);
    const changeYear = useCallback((e) => {
        console.log(e.target.value)
        setYear(e.target.value);
    }, []);
    const handleClose = useCallback(() => {
        handleSave();
        setValue(false);
    }, [setValue, handleSave]);
    return (
        <Dialog
            open={open}
            onClose={handleClose}
        >
            <DialogTitle>Set info</DialogTitle>
            <DialogContent>
                <FormGroup>
                    <FormControl>
                        <InputLabel htmlFor="title">Title</InputLabel>
                        <Input id="title" value={title} onChange={handeleTitleChange} />
                    </FormControl>
                    <Grid container direction="row" justify="space-between">
                        <Grid item>
                            <FormControl>
                                <InputLabel id="days">Day</InputLabel>
                                <Select
                                    className="days-select"
                                    labelId="days"

                                    value={presentDay}
                                    onChange={changeDay}
                                >
                                    {
                                        days.map((value) => (
                                            <MenuItem key={v4()} value={value}>{value}</MenuItem>
                                        ))
                                    }
                                </Select>

                            </FormControl>
                        </Grid>
                        <Grid item>
                            <FormControl>
                                <InputLabel id="month">month</InputLabel>

                                <Select
                                    className="month-select"
                                    labelId="month"

                                    value={presentMonth}
                                    onChange={changeMonth}
                                >

                                    {
                                        months.map((value) => (
                                            <MenuItem key={v4()} value={value}>{value}</MenuItem>
                                        ))
                                    }

                                </Select>


                            </FormControl>
                        </Grid>
                        <Grid item>
                            <FormControl>
                                <InputLabel id="years">year</InputLabel>
                                <Select
                                    className="years-select"
                                    labelId="years"

                                    value={presentYear}
                                    onChange={changeYear}
                                >

                                    {
                                        years.map((value) => (
                                            <MenuItem key={v4()} value={value}>{value}</MenuItem>
                                        ))
                                    }

                                </Select>


                            </FormControl>
                        </Grid>
                    </Grid>
                </FormGroup>

                <TextField
                    label="Description"
                    multiline
                    rows={5}
                    value={desc}
                    onChange={handeleDescChange}
                />
            </DialogContent>
            <DialogActions>
                <Button type="submit" onClick={handleClose}> Save</Button>
            </DialogActions>

        </Dialog>
    );
}

export default DialogComponent;