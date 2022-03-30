import React from 'react';
import '../App.css';
import axios from '../networking/BaseAxios';
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

const SearchResult = () => {
    let params = useParams();

    const [successful, setSuccessful] = React.useState(true);

    const [loading, setLoading] = React.useState(false);

    const [peopleList, setPeopleList] = React.useState(undefined);

    const [jokeList, setJokesList] = React.useState(undefined);

    const retry = () => {
        if (!loading) {
            search();
        }
    };

    const search = async () => {
        setLoading(true)
        await axios.get('/search/', { params: { query: params.query } }).then(response => {
            let data = response.data;

            setPeopleList(data.people)
            setJokesList(data.jokes)
            setLoading(false)
            setSuccessful(true)
        }).catch((error) => {
            setSuccessful(false)
            setLoading(false)
        })
    }

    React.useEffect(() => {
        search();
    }, []);

    return (
        <div>
            <HeaderSecondary />
            <Navigator />
            <Grid container item xs={12} alignItems="center" direction="column" style={{ gap: 25 }}>
                <Typography style={{ padding: 20 }} variant="h4" component="h4">
                    Search Results for <b>{params.query}</b>
                </Typography>
                {
                    isNotEmpty(peopleList) && (
                        <PeopleItem people={peopleList.people.results} showHeader={true} />
                    )
                }
                {
                    isNotEmpty(jokeList) && (
                        <JokeView jokes={jokeList.jokes.result} />
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

export default SearchResult;