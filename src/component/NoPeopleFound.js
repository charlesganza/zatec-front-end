import React, { useState } from 'react';
import Typography from '@mui/material/Typography';
import { BsEmojiNeutralFill } from "react-icons/bs";
import { Grid } from "@material-ui/core";

const NoPeopleFound = () => {
    return (
        <div>
            <Grid container alignItems="center" direction="column" style={{ gap: 25 }}>
                <Typography align="center" variant="h6" component="h6">
                    The Force is not with You. No people found
                </Typography>
                <BsEmojiNeutralFill size={80} />
            </Grid>

        </div>
    );
}

export default NoPeopleFound;
