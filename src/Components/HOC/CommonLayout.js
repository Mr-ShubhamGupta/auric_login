import React from 'react';
import Header from '../Header';
import Footer from '../Footer';
import {
    Grid,
    FormControl,
    InputLabel,
    OutlinedInput,
    InputAdornment,
    IconButton,
    CircularProgress
  } from "@mui/material";

const CommonLayout=(MiddlePage)=>{

    return(
        function(){
            return(
                <>
                <Grid container spacing={2}>
                <Grid item xs={12}>
                <Header/>
                </Grid>
                <Grid item xs={12}>
                <MiddlePage/>
                </Grid>
                <Grid item xs={12}>
                 <Footer/>
                </Grid>
                </Grid>
                </>
            )
        }
    )
}
export default CommonLayout