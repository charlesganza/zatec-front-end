import React from 'react';
import Card from '@mui/material/Card';
import Box from '@mui/material/Box';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { CardActionArea } from '@mui/material';
import Typography from '@mui/material/Typography';
import { format, parseISO } from "date-fns";

const JokeCard = (props) => {

    const DATE_HUMAN_FRIENDLY = "MMMM d, yyyy HH:mm"
    const dateFormatted = format(parseISO(props.joke.created_at), DATE_HUMAN_FRIENDLY);
    const joke = props.joke;

    console.log(joke);

    return (
        <Card sx={{ display: 'flex', width: '70vh', marginBottom: '50px' }}>
            <CardMedia
                component="img"
                sx={{ width: 151 }}
                image={joke.icon_url}
                alt={joke.url}
            />
            <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                <CardContent>
                    <Typography gutterBottom variant="body1" component="div">
                        {joke.value}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        {dateFormatted}
                    </Typography>
                </CardContent>
            </Box>
        </Card>
    );
}

export default JokeCard;
