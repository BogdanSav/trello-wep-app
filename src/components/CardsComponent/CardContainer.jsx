import React from 'react';
import {Grid} from '@material-ui/core';
import CardComponent from "./CardComponent";
function CardContainer(){
   return (
        <Grid container direction="column" justify="space-around">
            <CardComponent/>
            <CardComponent/>
            <CardComponent/>
            <CardComponent/>
        </Grid>
    );
}

export default CardContainer;