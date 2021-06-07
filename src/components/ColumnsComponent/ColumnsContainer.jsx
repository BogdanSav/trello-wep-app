import React  from 'react';
import Column from './Column';
import { Button, Container, Grid, Box } from '@material-ui/core';
import {v4} from 'uuid';
import "./style.scss";
import {useSelector} from "react-redux";
import useColumnData from './useColumnsData';
function ColumnsContainer() {
   const columns = useSelector(state=>state.column);
   const {addColumn} = useColumnData();
   return (
      <Container maxWidth={false}  className="columns-container">
         <Grid container direction="row" wrap="nowrap">
           {
              columns.map((item,id)=>(
                 <Column key={v4()} title={item.title} id={id}/>
              ))
           }
            <Box className="btn-column__container">
               <Button className="btn-column" variant="contained" onClick={addColumn}>Add new column</Button>
            </Box>

         </Grid>

      </Container>



   );
}

export default ColumnsContainer;