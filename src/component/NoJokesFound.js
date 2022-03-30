import React, { useState } from 'react';
import Typography from '@mui/material/Typography';
import { Grid } from "@material-ui/core";
import { BsEmojiSunglasses } from "react-icons/bs";

const NoJokesFound = () => {
    return (
        <div>
            <Grid container alignItems="center" direction="column" style={{ gap: 25 }}>
                <Typography align="center" variant="h6" component="h6">
                    Chuck Norris once said... Oh wait, no jokes found :)
                </Typography>
                <BsEmojiSunglasses size={80} />
            </Grid>

        </div>
    );
}

export default NoJokesFound;
