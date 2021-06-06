import React from 'react';
import { Grid } from '@material-ui/core';
import CardComponent from "./CardComponent";
import { useSelector } from 'react-redux';
import {v4} from 'uuid';
function CardContainer({ id }) {
    const cards = useSelector(state => { return state.column[id] ? state.column[id].cards : [] });
    return (
        <Grid container direction="column" justify="space-around">
            {
                cards.map((item, _id) => (
                    <CardComponent key={v4()} title={item.title} date={item.date} desc={item.description} idCard={_id} idCol={id} />
                ))
            }
        </Grid>
    );
}

export default CardContainer;