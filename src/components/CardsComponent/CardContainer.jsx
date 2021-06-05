import React, { useEffect, useState } from 'react';
import { Grid } from '@material-ui/core';
import CardComponent from "./CardComponent";
import { useSelector } from 'react-redux';
function CardContainer({id}) {
    
    const cards = useSelector(state=>state.column[id].cards);
    console.log(cards);
    const [currntCards, setCurrentCards] = useState(cards);
    useEffect(()=>{
        setCurrentCards(cards);
    },[cards])
   
    return (
        <Grid container direction="column" justify="space-around">
            {
                currntCards.map((item) => (
                    <CardComponent title={item.title} date={item.date} desc={item.description}/>
                ))
            }
        </Grid>
    );
}

export default CardContainer;