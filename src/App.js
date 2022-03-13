import React from 'react'
import ReactDOM from 'react-dom'
import './App.css';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import Typography from "@material-ui/core/Typography";
import FormControl from "@material-ui/core/FormControl";
import FormLabel from "@material-ui/core/FormLabel";
import RadioGroup from "@material-ui/core/RadioGroup";
import Radio from "@material-ui/core/Radio";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import { WiDayLightning } from "react-icons/wi";

function App() {
  document.title = "Meteo: Get Accurate Weather Updates!";
  return (
    <div className="App">
      <header className="App-header">
        <WiDayLightning size={100}/>
        <Typography variant="h1" component="h2">
          Welcome to Meteo
        </Typography>
      </header>
      <FormControl>
        <FormLabel id="demo-controlled-radio-buttons-group">Get forecast by:</FormLabel>
          <RadioGroup aria-labelledby="demo-controlled-radio-buttons-group"
            name="controlled-radio-buttons-group"
            value={""}
            onChange={console.log("nope")}>
            <FormControlLabel value="city name" control={<Radio />} label="City Name" />
            <FormControlLabel value="coordinates" control={<Radio />} label="Coordinates" />
          </RadioGroup>
      </FormControl>
    </div>
  );
}

export default App;
