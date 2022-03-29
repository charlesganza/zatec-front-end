import React, { useState } from 'react';
import './App.css';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { MdOutlineLiveTv } from "react-icons/md";

function App() {
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
    if(autoValidate['validate']){
       setSearchError({ ...searchFieldError, hasError: !validateForm(e.target.value) })
    }
    setSearchQuery({ ...searchQuery, [e.target.name]: e.target.value })
  }

  const search = () => {
    setAutoValidate({ ...autoValidate, ['validate']: true }) //we're sure the user attempted to search, enable auto validation
    const isValid = validateForm(searchQuery['query'])
    setSearchError({ ...searchFieldError, hasError: !isValid })

    if (isValid) {
       console.log("yep");
    } 
  }

  return (
    <div className="App">
      <header className="App-header">
        <MdOutlineLiveTv size={100} />
        <Typography variant="h1" component="h2">
          Welcome to Consumer
        </Typography>
      </header>
      <Typography variant="h4" component="h4">
        Your Number One Source of Entertainment!
      </Typography>
      <br />
      <br />
      <TextField id="outlined-basic"
        label="Search..." variant="outlined"
        value={searchQuery.query}
        name="query"
        onChange={handleTextFieldChange}
        helperText={searchFieldError.hasError ? 'At least 3 characters required!' : ''}
        inputProps={{ maxLength: 25 }}
        error={searchFieldError.hasError} />
      <Button variant="contained" onClick={search}>Search</Button>
    </div>
  );
}

export default App;
