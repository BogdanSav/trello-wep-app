import React from 'react';
import { ColumnContainerGrid } from './styles';
import Column from './Column';
import { Button, Container } from '@material-ui/core';
function ColumnsContainer() {
   return (
      <Container maxWidth={false}>
         <ColumnContainerGrid container direction="row" wrap="nowrap">
            <Column />
            <Column />
            <Column />
            <Button >Add new column</Button>
         </ColumnContainerGrid>
         
      </Container>
         
     

   );
}

export default ColumnsContainer;