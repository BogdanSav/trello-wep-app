import React, { useCallback } from 'react';
import { Dialog, DialogTitle, DialogContent, DialogActions, Button, FormControl, InputLabel, Input, TextField, FormGroup } from "@material-ui/core"
function DialogComponent({ open, setValue }) {

    const handleClose = useCallback(() => {
        setValue(false);
    }, [setValue])
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
                        <Input id="title" />
                    </FormControl>
                    <FormControl>
                        <InputLabel htmlFor="title">Date</InputLabel>
                        <Input id="title"  required/>
                    </FormControl>
                </FormGroup>
                <TextField
                    label="Description"
                    multiline
                    rows={5}
                />
            </DialogContent>
            <DialogActions>
                <Button onClick={handleClose}> Save</Button>
            </DialogActions>

        </Dialog>
    );
}

export default DialogComponent;