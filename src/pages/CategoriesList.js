import React from 'react';
import '../App.css';
import axios from '../networking/BaseAxios';
import { useParams } from "react-router-dom";
import Typography from '@mui/material/Typography';
import { Grid, Button } from "@material-ui/core";
import { isNotEmpty } from "../utils/Helpers";
import CircularProgress from '@mui/material/CircularProgress';
import CategoryItem from '../component/CategoryItem';
import Navigator from '../component/Navigator';
import HeaderSecondary from '../component/HeaderSecondary';
import ChangeCircleIcon from '@mui/icons-material/ChangeCircle';

const CategoriesList = () => {
   let params = useParams();

   const [successful, setSuccessful] = React.useState(true);

   const [loading, setLoading] = React.useState(false);

   const [categories, setCategoriesList] = React.useState({});

   const retry = () => {
      if (!loading) {
         getCategories();
      }
   };

   const getCategories = async () => {
      setLoading(true)
      await axios.get('/chuck/categories').then(response => {
         let data = response.data;

         setCategoriesList(data)
         setLoading(false)
         setSuccessful(true)
      }).catch((error) => {
         setSuccessful(false)
         setLoading(false)
      })
   }

   React.useEffect(() => {
      getCategories();
   }, []);

   return (
      <div>
         <HeaderSecondary />
         <Navigator />
         <Grid container item xs={12} alignItems="center" direction="column" style={{ gap: 25 }}>
            <Typography style={{ padding: 20 }} variant="h4" component="h4">
               Categories
            </Typography>
            {
               isNotEmpty(categories) && (
                  <CategoryItem categories={categories} />
               )
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

export default CategoriesList;