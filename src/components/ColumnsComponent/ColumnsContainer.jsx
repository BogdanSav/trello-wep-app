import React, { useCallback} from 'react';
import Column from './Column';
import { Button, Container, Grid, Box } from '@material-ui/core';
import {v4} from 'uuid';
import "./style.scss"
import {addNewColumn} from '../../app/reducers/columnsReducer';
import { useDispatch, useSelector } from 'react-redux';
function ColumnsContainer() {
   const columns = useSelector(state=>state.column);
   const dispatch = useDispatch();
   const addColumn = useCallback(()=>{
      dispatch(addNewColumn({title:"",cards:[]}));
   },[dispatch]);
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