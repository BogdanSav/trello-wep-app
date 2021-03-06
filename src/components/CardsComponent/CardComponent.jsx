import React, { useCallback, useState } from 'react';
import { Grid, Card, CardContent, Typography, CardHeader } from "@material-ui/core";
import './card.scss'
import DialogComponent from "./Dialog";
import Icon from '@material-ui/core/Icon'
import CancelSharpIcon from '@material-ui/icons/CancelSharp';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import { deleteCards } from '../../app/reducers/rootReducer';
import { useDispatch } from 'react-redux';
import useMoment from "./useMoment"

function CardComponent({ title, date, desc, idCol, idCard }) {
    const { today, setBgColor } = useMoment();
    const color = setBgColor(date || today)
    const dispatch = useDispatch();
    const [open, setOpen] = useState(false);
    const delCard = useCallback(() => {
        dispatch(deleteCards({ idCol, idCard }));
    }, [dispatch, idCol, idCard])
    return (
        <Grid item>
            <DialogComponent open={open} setValue={setOpen} idCol={idCol} idCard={idCard} />
            <Card className={color ? color : "wrapper-card"}>
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
                    <Typography className="date" variant="body1">{date || today}</Typography>
                    <Typography className="desc" variant="body2">{desc}</Typography>

                </CardContent>
            </Card>
        </Grid>
    );
}

export default CardComponent;