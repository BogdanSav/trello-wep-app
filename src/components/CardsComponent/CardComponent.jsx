import React, { useState } from 'react';
import { Grid, Card, CardContent, Typography, CardHeader } from "@material-ui/core";
import './card.scss'
import DialogComponent from "./Dialog";
import CancelSharpIcon from '@material-ui/icons/CancelSharp';
function CardComponent() {
    const [open, setOpen] = useState(false);
    return (
        <Grid item>
            <DialogComponent open={open} setValue={setOpen}/>
            <Card className="wrapper-card">
                <CardHeader className="card-title" 
                title="title" 
                disableTypography
                action={
                    <CancelSharpIcon color="primary"/>
                }
                 />
                <CardContent className="card"  onClick={()=>{setOpen(true)}}>
                    <Typography variant="body1">Date</Typography>
                    <Typography variant="body2" paragraph>Description</Typography>
                </CardContent>
            </Card>
        </Grid>
    );
}

export default CardComponent;