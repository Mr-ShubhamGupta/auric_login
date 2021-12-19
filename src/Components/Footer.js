import { Grid,Paper } from '@mui/material';
import React from 'react';


const Footer=props=>{


    return(
        <div className="footer">
        <Grid container spacing={2}>
            <Grid item xs={12}>
            
            <Paper elevation={0} className="footer_size" square>Footer</Paper>
            </Grid>
        </Grid>
        </div>
    )
}

export default Footer