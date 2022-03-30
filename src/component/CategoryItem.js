import React from 'react';
import ListItem from '@mui/material/ListItem';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ListItemText from '@mui/material/ListItemText';
import List from '@mui/material/List';
import { Grid, Box, Paper } from "@material-ui/core";
import { BiCategory } from "react-icons/bi";
import { styled } from '@mui/material/styles';
import Avatar from '@mui/material/Avatar';
import { useNavigate } from "react-router-dom";
import '../App.css';

const CategoryItem = (props) => {
    const navigate = useNavigate();
    const navigateTo = (category) => navigate('/categories/' + category);

    const categories = Array.from(props.categories);

    const Demo = styled('div')(({ theme }) => ({
        backgroundColor: theme.palette.background.paper,
    }));

    return (
        <div>
            <Paper outlined elevation={10} style={{
                width: '50vh',
                display: 'flex',
                justifyContent: 'center',
                marginBottom: '20px',
                flexDirection: 'row',
                borderRadius: "20px",
                padding: '10px',
            }} >
                <Grid container spacing={2}>
                    <Grid item xs={12} md={6}>
                        <Demo>
                            <List>
                                {
                                    categories.map((category) => (
                                        <ListItem className={'hoverClass'} key={category} onClick={() => navigateTo(category)}>
                                                <ListItemAvatar>
                                                    <Avatar>
                                                        <BiCategory />
                                                    </Avatar>
                                                </ListItemAvatar>
                                                <ListItemText
                                                    primary={category}
                                                />
                                            </ListItem>
                                    ))
                                }
                            </List>
                        </Demo>
                    </Grid>
                </Grid>
            </Paper>
        </div>
    );
}

export default CategoryItem;
