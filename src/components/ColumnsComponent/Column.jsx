import React from 'react';
import { Grid, Button, TextField, Card, CardContent, Box, Typography } from '@material-ui/core';
import './style.scss';
function Column() {
    return (
        <Grid item>
            <Card className="card-wrapper">
                <CardContent className="card">
                    <Box>
                        <Typography variant="h5"> it's a title</Typography>
                    </Box>
                    <Box>
                        <ul>
                            <li></li>
                            <li></li>
                            <li></li>
                            <li></li>
                            <li></li>
                        </ul>
                    </Box>
                    <Box className="btn">
                        <Button variant="outlined" > add new card</Button>
                    </Box>

                </CardContent>
            </Card>
        </Grid>

    );
}

export default Column;