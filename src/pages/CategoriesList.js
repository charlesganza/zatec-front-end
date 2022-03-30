import React, { useRef, useState, Component } from 'react';
import FormControl from "@material-ui/core/FormControl";
import FormLabel from "@material-ui/core/FormLabel";
import RadioGroup from "@material-ui/core/RadioGroup";
import List from "@material-ui/core/List";
import TextField from "@material-ui/core/TextField";
import CircularProgress from "@material-ui/core/CircularProgress";
import ReactDOM from 'react-dom';
import Button from "@material-ui/core/Button";
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const CategoriesList = (props) => {

   // Create form initial state
   const [coordinates, setCoordinates] = useState({
      latitude: '',
      longitude: ''
   })

   // Create form initial state
   const [loading, setLoading] = useState({
      isLoading: false
   })

   React.useEffect(() => {
      getUpdates();
   });

   const getUpdates = () => {
      axios.get('http://localhost:8080/api/chuck/categories')
         .then(function (response) {
            console.table(response);
         }).catch((error) => {
            console.table(error);
            // setLoading({loading, isLoading: false});
         });
   }

   return (
      <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>

      </List>
   )

}

export default CategoriesList;