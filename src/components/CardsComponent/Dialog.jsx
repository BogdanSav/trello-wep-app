import React from 'react';
import { Dialog, DialogTitle, DialogContent, DialogActions, Button, FormControl, InputLabel, Input, TextField, FormGroup, Select, MenuItem, Grid } from "@material-ui/core";
import { v4 } from 'uuid';
import "./dialog.scss"
import useDialogData from "./useDialogData";
function DialogComponent({ open, setValue, idCol, idCard }) {

    const { handleClose,
        handeleDescChange,
        handeleTitleChange,
        title,
        days,
        months,
        years,
        presentDay,
        presentMonth,
        presentYear,
        desc,
        changeDay,
        changeYear,
        changeMonth } = useDialogData(setValue, idCard, idCol);
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
                    placeholder={"type your description"}
                />
            </DialogContent>
            <DialogActions>
                <Button type="submit" onClick={handleClose}> Save</Button>
            </DialogActions>
        </Dialog>
    );
}

export default DialogComponent;