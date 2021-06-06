import React, { useCallback, useState } from 'react';
import { Dialog, DialogTitle, DialogContent, DialogActions, Button, FormControl, InputLabel, Input, TextField, FormGroup } from "@material-ui/core"
import {setCardInfo} from "../../app/reducers/columnsReducer"
import { useDispatch } from 'react-redux';
function DialogComponent({ open, setValue , idCol, idCard}) {
    const dispatch =useDispatch()
    const [title, setTitle] = useState("");
    const [date, setDate] = useState("");
    const [desc, setDesc] = useState("");
    const handleSave = useCallback(()=>{
        dispatch(setCardInfo({idCol, idCard , newTitle:title, newDate: date, newDesc: desc}));
    },[dispatch, desc, title, date, idCard, idCol])
    const handeleTitleChange = useCallback((t)=>{
        setTitle(t.target.value);
    },[])
    const handeleDateChange = useCallback((t)=>{
        setDate(t.target.value);
    },[])
    const handeleDescChange = useCallback((t)=>{
        setDesc(t.target.value);
    },[])
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
                        <Input id="title" value={title} onChange={handeleTitleChange}/>
                    </FormControl>
                    <FormControl>
                        <InputLabel htmlFor="date">Date</InputLabel>
                        <Input id="date" value={date} onChange={handeleDateChange} required/>
                    </FormControl>
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
                <Button onClick={handleClose}> Save</Button>
            </DialogActions>

        </Dialog>
    );
}

export default DialogComponent;