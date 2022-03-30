import React from 'react';
import '../App.css';
import Stack from '@mui/material/Stack';
import HeaderSecondary from "./HeaderSecondary";
import { useNavigate, Link } from "react-router-dom";
import { Grid, Button } from "@material-ui/core";

const Navigator = () => {
  return (
    <div className="App">
      <Stack alignItems="center" justifyContent="center">
        <Grid>
          <Link to='/categories'><Button variant="text">Categories</Button></Link>
          <Link to='/people'><Button variant="text">People</Button></Link>
        </Grid>
      </Stack>
    </div>
  );
}

export default Navigator;
