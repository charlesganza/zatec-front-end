import React from 'react';
import NoJokesFound from './NoJokesFound';
import JokeItem from './JokeItem';

const JokeView = (props) => {

    const jokes = props.jokes;

    return (
        <div>
            {
                jokes.length > 0 ? <JokeItem jokes={jokes} /> : <NoJokesFound />
            }
        </div>
    );
}

export default JokeView;
