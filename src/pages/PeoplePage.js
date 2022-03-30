import React from 'react';
import '../App.css';
import axios from '../networking/BaseAxios';
import Typography from '@mui/material/Typography';
import { Grid, Button } from "@material-ui/core";
import { isNotEmpty } from "../utils/Helpers";
import CircularProgress from '@mui/material/CircularProgress';
import PeopleItem from '../component/PeopleItem';
import HeaderSecondary from '../component/HeaderSecondary';
import Navigator from '../component/Navigator';
import ChangeCircleIcon from '@mui/icons-material/ChangeCircle';

const PeoplePage = () => {

   const [successful, setSuccessful] = React.useState(true);

   const [loading, setLoading] = React.useState(false);

   const [peopleList, setPeopleList] = React.useState({});

   const retry = () => {
      if (!loading) {
         getPeople();
      }
   };

   const getPeople = async () => {
      setLoading(true)
      await axios.get('/swapi/people').then(response => {
         let data = response.data;

         setPeopleList(data)
         setLoading(false)
         setSuccessful(true)
      }).catch((error) => {
         setSuccessful(false)
         setLoading(false)
      })
   }

   React.useEffect(() => {
      getPeople();
   }, []);

   return (
      <div>
         <HeaderSecondary />
         <Navigator />
         <Grid container item xs={12} alignItems="center" direction="column" style={{ gap: 25 }}>
            <Typography style={{ padding: 20 }} variant="h4" component="h4">
               People
            </Typography>
            {
               isNotEmpty(peopleList.results) ? <PeopleItem people={peopleList.results} showHeader={false} /> : null
            }
            {
               !successful && !loading ? <Button
                  className="retry"
                  variant="outlined" startIcon={<ChangeCircleIcon />}
                  onClick={retry}>Retry...</Button> : null
            }
            {
               loading ? <CircularProgress /> : null
            }
         </Grid>

      </div>
   )

}

export default PeoplePage;