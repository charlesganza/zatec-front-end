import React from 'react';
import Typography from '@mui/material/Typography';
import JokeCard from './JokeCard';

const JokeItem = (props) => {

    const jokes = props.jokes;

    return (
        <div>
            <Typography style={{ padding: 20 }} variant="h6" component="h6">
                Results for Jokes
            </Typography>
            {jokes.map((joke) => (
                <JokeCard joke={joke} />
            ))
            }
        </div>
    );
}

export default JokeItem;
