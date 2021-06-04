import React, {useCallback, useEffect, useRef, useState} from 'react';
import { Grid, Button, Card, CardContent, Box, CardActions, Input } from '@material-ui/core';
import Delete  from '@material-ui/icons/Delete'
import './style.scss';
import { useDispatch } from 'react-redux';
import {deleteColumn ,changeTitle} from '../../app/reducers/columnsReducer';
import CardContainer from "../CardsComponent/CardContainer";
function Column({title, id}) {
    const dispatch = useDispatch();
    const [titleText,setTitleText] = useState(title);
    const changeCurrentTitle = useCallback((e)=>{
        dispatch(changeTitle({text: e.target.value, id}))
        setTitleText(e.target.value);
    },[dispatch, id])
    const deleteCol = useCallback(()=>{
        dispatch(deleteColumn(id));
    },[dispatch, id])
    return (
        <Grid item>
            <Card className="card-wrapper">
                <CardContent className="column">
                    <Box>
                        <Input className="title" value={titleText} onChange={(e)=>{changeCurrentTitle(e)}} disableUnderline autoFocus />
                        <Box component="span">
                            <Button type="button" onClick={deleteCol}><Delete/></Button>
                        </Box>
                    </Box>
                    <Box>
                        <CardContainer/>
                    </Box>
                </CardContent>
                <CardActions>
                    <Box className="btn">
                        <Button variant="contained" color="primary" > add new card</Button>
                    </Box>
                </CardActions>
            </Card>
        </Grid>

    );
}

export default Column;