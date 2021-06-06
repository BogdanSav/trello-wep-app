import React, { useCallback, useState } from 'react';
import { Dialog, DialogTitle, DialogContent, DialogActions, Button, FormControl, InputLabel, Input, TextField, FormGroup, Select, MenuItem, Box, Grid } from "@material-ui/core"
import { setCardInfo } from "../../app/reducers/columnsReducer"
import { useDispatch } from 'react-redux';
import useMoment from "./useMoment";
import "./dialog.scss"
function DialogComponent({ open, setValue, idCol, idCard }) {
    const dispatch = useDispatch();
    const { days, months, years } = useMoment();
    const [title, setTitle] = useState("");
    const [date, setDate] = useState("");
    const [desc, setDesc] = useState("");
    const handleSave = useCallback(() => {
        dispatch(setCardInfo({ idCol, idCard, newTitle: title, newDate: date, newDesc: desc }));
    }, [dispatch, desc, title, date, idCard, idCol])
    const handeleTitleChange = useCallback((t) => {
        setTitle(t.target.value);
    }, [])
    const handeleDateChange = useCallback((t) => {
        setDate(t.target.value);
    }, [])
    const handeleDescChange = useCallback((t) => {
        setDesc(t.target.value);
    }, [])
    const handleClose = useCallback(() => {
        handleSave();
        setValue(false);
    }, [setValue, handleSave])
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
                        <Input id="title" value={title} onChange={handeleTitleChange}  required/>
                    </FormControl>
                    <Grid container>
                        <Grid item>
                            <FormControl>
                                <InputLabel id="days">Day</InputLabel>

                                <Select className="days-select" labelId="days">
                                    {
                                        days.map((value) => (
                                            <MenuItem value={value}>{value}</MenuItem>
                                        ))
                                    }
                                </Select>

                            </FormControl>
                        </Grid>
                        <Grid item>
                            <FormControl>
                                <InputLabel id="month">month</InputLabel>

                                <Select className="month-select" labelId="month">

                                    {
                                        months.map((value) => (
                                            <MenuItem value={value}>{value}</MenuItem>
                                        ))
                                    }

                                </Select>


                            </FormControl>
                        </Grid>
                        <Grid item>
                            <FormControl>
                                <InputLabel id="years">year</InputLabel>

                                <Select className="years-select" labelId="years">

                                    {
                                        years.map((value) => (
                                            <MenuItem value={value}>{value}</MenuItem>
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