import React from 'react';
import { Grid, Button, Card, CardContent, Box, CardActions, Input } from '@material-ui/core';
import Delete from '@material-ui/icons/Delete'
import './style.scss';
import useColumnsData from "./useColumnsData"
import CardContainer from "../CardsComponent/CardContainer";
function Column({ title, id }) {
    const {titleText, changeCurrentTitle, saveTitleChange, deleteCol, addCard} = useColumnsData(title, id);
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