import { Grid, Button, Typography, Box, TextField } from '@material-ui/core';
import styled from 'styled-components';

export const ColumnGrid = styled(Grid)
`
`;
export const ColumnButton = styled(Button)
``;
export const ColumnTypography = styled(Typography).attrs(() => ({
    variant: "h5",
}))
`
    &:active{
        border: 1px solid #000;
    }
`;
export const ColumnBox = styled(Box)
`
    width: 250px;
`;
export const ColumnContainerGrid = styled(Grid)
`
     margin: 20px 0 0 0 ;
    width:100%;
   
    overflow-x:auto;
`;
export const ColumnTitle = styled(TextField)
` 
   &::after{
       border-bottom: 0px;
   }
    
`;