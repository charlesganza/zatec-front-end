import React from 'react';
import '../App.css';
import axios from 'axios';
import { useParams } from "react-router-dom";
import PeopleItem from '../component/PeopleItem';
import JokeView from '../component/JokeView';
import Typography from '@mui/material/Typography';
import { Grid, Button } from "@material-ui/core";
import { isNotEmpty } from "../utils/Helpers";
import CircularProgress from '@mui/material/CircularProgress';
import HeaderSecondary from '../component/HeaderSecondary';
import Navigator from '../component/Navigator';
import ChangeCircleIcon from '@mui/icons-material/ChangeCircle';
import JokeCard from '../component/JokeCard';

const CategoryDetail = () => {
    let params = useParams();

    const [successful, setSuccessful] = React.useState(true);

    const [loading, setLoading] = React.useState(false);

    const [joke, setJoke] = React.useState(undefined);

    const retry = () => {
        if (!loading) {
            getRandomJoke();
        }
    };

    const getRandomJoke = async () => {
        setLoading(true)
        await axios.get('https://api.chucknorris.io/jokes/random', { params: { random: params.category } }).then(response => {
            let data = response.data;
            setJoke(data)
            setLoading(false)
            setSuccessful(true)
        }).catch((error) => {
            setSuccessful(false)
            setLoading(false)
        })
    }

    React.useEffect(() => {
        getRandomJoke();
    }, []);

    return (
        <div>
            <HeaderSecondary />
            <Navigator />
            <Grid container item xs={12} alignItems="center" direction="column" style={{ gap: 25 }}>
                <Typography style={{ padding: 20 }} variant="h4" component="h4">
                    Random joke for Category <b>{params.category}</b>
                </Typography>
                {
                    isNotEmpty(joke) && (
                        <JokeCard joke={joke} />
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

export default CategoryDetail;