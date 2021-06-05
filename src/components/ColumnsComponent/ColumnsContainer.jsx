import React, { useCallback, useEffect, useState } from 'react';
// import { ColumnContainerGrid } from './styles';
import Column from './Column';
import { Button, Container, Grid, Box } from '@material-ui/core';
import "./style.scss"
import {addNewColumn} from '../../app/reducers/columnsReducer';
import { useDispatch, useSelector } from 'react-redux';
function ColumnsContainer() {
   const columns = useSelector(state=>state.column);
   const dispatch = useDispatch();
   const [currentColumns, setColumns] = useState(columns);
   useEffect(()=>{
      setColumns(columns);
   },[columns]);
   const addColumn = useCallback(()=>{
      dispatch(addNewColumn({title:"",cards:[]}));
   },[dispatch]);
   return (
      <Container maxWidth={false}  className="columns-container">
         <Grid container direction="row" wrap="nowrap">
           {
              currentColumns.map((item,id)=>(
                 <Column title={item.title} id={id}/>
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