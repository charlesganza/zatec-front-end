import React, { useState } from 'react';
import './App.css';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import Typography from "@material-ui/core/Typography";
import { TextField, IconButton, Paper, Grid, Button } from "@material-ui/core";
import Stack from '@mui/material/Stack';
import { BiSearchAlt } from "react-icons/bi";
import { MdOutlineLiveTv } from "react-icons/md";
import { useNavigate, Link } from "react-router-dom";
import Header from "./component/Header";

const App = () => {
  const navigate = useNavigate();
  const navigateTo = () => navigate('/search/' + searchQuery['query']);

  document.title = "Your One Source of Entertainment!";

  //flag to prevent automatically validating the textfield as soon as the app is opened
  const [autoValidate, setAutoValidate] = React.useState({
    validate: false
  });

  const [searchQuery, setSearchQuery] = React.useState({
    query: ''
  });

  const [searchFieldError, setSearchError] = React.useState({
    hasError: false
  });

  //at least three characters are needed
  const validateForm = (value) => {
    return value.trim().length >= 3;
  }

  const handleTextFieldChange = (e) => {
    if (autoValidate['validate']) {
      setSearchError({ ...searchFieldError, hasError: !validateForm(e.target.value) })
    }
    setSearchQuery({ ...searchQuery, [e.target.name]: e.target.value })
  }

  const search = () => {
    setAutoValidate({ ...autoValidate, ['validate']: true }) //we're sure the user attempted to search, enable auto validation
    const isValid = validateForm(searchQuery['query'])
    setSearchError({ ...searchFieldError, hasError: !isValid })

    if (isValid) {
      navigateTo();
    }
  }

  return (
    <div className="App">
      <Header/>
      <Stack alignItems="center" justifyContent="center">
      <Grid>
      <Link to='/categories'><Button variant="text">Categories</Button></Link>
      <Link to='/people'><Button variant="text">People</Button></Link>
      </Grid>
      </Stack>
      
      <Stack alignItems="center">
      <Paper outlined elevation={10} style={{
        width: '50vh',
        height: '20vh',
        display: 'flex',
        justifyContent: 'center',
        flexDirection: 'row',
        borderRadius: "20px",
        padding: '50px',
      }} >
        <Grid container alignItems="center" direction="column" style={{gap: 25}}>
        <Typography variant="h4" component="h4">
            Search for People or Jokes
          </Typography>
          <TextField id="outlined-basic"
            label="Search..." variant="outlined"
            value={searchQuery.query}
            name="query"
            onChange={handleTextFieldChange}
            helperText={searchFieldError.hasError ? 'At least 3 characters required!' : ''}
            inputProps={{ maxLength: 25 }}
            error={searchFieldError.hasError}
            InputProps={{
              endAdornment: (
                <IconButton onClick={search}>
                  <BiSearchAlt />
                </IconButton>
              ),
            }}
          />
        </Grid>
      </Paper>
      </Stack>
    </div>
  );
}

export default App;
