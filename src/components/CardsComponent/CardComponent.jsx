import React, { useState } from 'react';
import { Grid, Card, CardContent, Typography, CardHeader } from "@material-ui/core";
import './card.scss'
import DialogComponent from "./Dialog";
import Icon from '@material-ui/core/Icon'
import CancelSharpIcon from '@material-ui/icons/CancelSharp';
import MoreVertIcon from '@material-ui/icons/MoreVert';
function CardComponent({ title, date, desc }) {
    const [open, setOpen] = useState(false);
    return (
        <Grid item>
            <DialogComponent open={open} setValue={setOpen} />
            <Card className="wrapper-card">
                <CardHeader className="card-title"
                    title={title}
                    disableTypography
                    action={
                        <Icon>
                            <MoreVertIcon onClick={() => { setOpen(true) }} />
                            <CancelSharpIcon color="primary" />
                        </Icon>

                    }
                />
                <CardContent className="card">
                    <Typography variant="body1">{date}</Typography>
                    <Typography variant="body2" paragraph>{desc}</Typography>
                </CardContent>
            </Card>
        </Grid>
    );
}

export default CardComponent;