import React, {useState} from 'react'
import './App.css';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import Typography from "@material-ui/core/Typography";
import CoordinatesForm from "./CoordinatesForm"
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
      <Typography variant="h4" component="h4">
          Enter the coordinates of your location to get weather forecast
        </Typography>
        <br/>
        <br/>
      <CoordinatesForm/>
    </div>
  );
}

export default App;
