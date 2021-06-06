import React, { useCallback, useState } from 'react';
import { Grid, Button, Card, CardContent, Box, CardActions, Input } from '@material-ui/core';
import Delete from '@material-ui/icons/Delete'
import './style.scss';
import { useDispatch } from 'react-redux';
import { deleteColumn, changeTitle, addNewCard } from '../../app/reducers/columnsReducer';
import CardContainer from "../CardsComponent/CardContainer";
function Column({ title, id }) {
    const dispatch = useDispatch();
    const [titleText, setTitleText] = useState(title);
    const changeCurrentTitle = useCallback((e) => {

        setTitleText(e.target.value);
    }, [])
    const saveTitleChange = useCallback((e) => {
        dispatch(changeTitle({ text: titleText, id }))
    }, [dispatch, id, titleText])
    const deleteCol = useCallback(() => {
        dispatch(deleteColumn(id));
    }, [dispatch, id])
    const addCard = useCallback(() => {
        dispatch(addNewCard(id));
    }, [dispatch, id])
    return (
        <Grid item>
            <Card className="card-wrapper">
                <CardContent className="column">
                    <Box>
                        <Input className="title" value={titleText} onChange={(e) => { changeCurrentTitle(e) }} disableUnderline onBlur={saveTitleChange} />
                        <Box component="span">
                            <Button type="button" onClick={deleteCol}><Delete /></Button>
                        </Box>
                    </Box>
                    <Box>
                        <CardContainer id={id} />
                    </Box>
                </CardContent>
                <CardActions>
                    <Box className="btn">
                        <Button variant="contained" color="primary" onClick={addCard} > add new card</Button>
                    </Box>
                </CardActions>
            </Card>
        </Grid>

    );
}

export default Column;