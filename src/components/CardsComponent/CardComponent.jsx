import React, { useCallback, useState } from 'react';
import { Grid, Card, CardContent, Typography, CardHeader } from "@material-ui/core";
import './card.scss'
import DialogComponent from "./Dialog";
import Icon from '@material-ui/core/Icon'
import CancelSharpIcon from '@material-ui/icons/CancelSharp';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import { deleteCards } from '../../app/reducers/columnsReducer';
import { useDispatch } from 'react-redux';
import useMoment from "./useMoment"

function CardComponent({ title, date, desc, idCol, idCard }) {
    const {today}= useMoment();
    const dispatch = useDispatch();
    const [open, setOpen] = useState(false);
    const delCard = useCallback(() => {
        dispatch(deleteCards({ idCol, idCard }));
    }, [dispatch, idCol, idCard])
    return (
        <Grid item>
            <DialogComponent open={open} setValue={setOpen} idCol={idCol} idCard={idCard} />
            <Card className="wrapper-card">
                <CardHeader className="card-title"
                    title={title}
                    disableTypography
                    action={
                        <Icon>
                            <MoreVertIcon onClick={() => { setOpen(true) }} />
                            <CancelSharpIcon color="primary" onClick={delCard} />
                        </Icon>

                    }
                />
                <CardContent className="card">
                    <Typography variant="body1">{date || today}</Typography>
                    <Typography variant="body2" paragraph>{desc}</Typography>
                </CardContent>
            </Card>
        </Grid>
    );
}

export default CardComponent;