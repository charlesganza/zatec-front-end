import React, { useState } from 'react';
import '../App.css';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import Axis from '../networking/BaseAxios';
import Header from "../component/Header";
import axios from "axios";
import { useParams } from "react-router-dom";
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import { Paper, Grid, Button } from "@material-ui/core";

const SearchResult = () => {
    let params = useParams();

    const [loading, setLoaded] = React.useState(false);

    const [peopleList, setPeopleList] = React.useState({});

    const [jokeList, setJokesList] = React.useState({});

    React.useEffect(() => {
        search();
    }, [peopleList, jokeList]);

    const search = async () => {
        await Axis.get('/search/', { params: { query: params.query } }).then(response => {
            let json = JSON.parse(JSON.stringify(response))["data"];
            let data = new Map(Object.entries(json)) //convert json to map

            setPeopleList(peopleList, data.get("people"))
            setJokesList(jokeList, data.get("jokes"))
            console.log(json);
        }).catch((error) => {
            console.table(error);
        })
    }

    return (
        <div className="App">
            <Grid container alignItems="center" direction="column" style={{ gap: 25 }}>
                <Typography variant="h4" component="h4">
                    Search Results
                </Typography>
                {
                    // peopleList.people.map((person, index) => {
                    //     return (
                    //         <ListItem alignItems="flex-start">
                    //             <ListItemAvatar>
                    //                 <Avatar alt="Cindy Baker" src="/static/images/avatar/3.jpg" />
                    //             </ListItemAvatar>
                    //             <ListItemText
                    //                 primary="Oui Oui"
                    //                 secondary={
                    //                     <React.Fragment>
                    //                         <Typography
                    //                             sx={{ display: 'inline' }}
                    //                             component="span"
                    //                             variant="body2"
                    //                             color="text.primary"
                    //                         >
                    //                             Sandra Adams
                    //                         </Typography>
                    //                         {' — Do you have Paris recommendations? Have you ever…'}
                    //                     </React.Fragment>
                    //                 }
                    //             />
                    //         </ListItem>
                    //     )
                    // })
                }
            </Grid>

        </div>
    )

}

export default SearchResult;