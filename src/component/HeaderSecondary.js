import Typography from "@material-ui/core/Typography";
import { MdOutlineLiveTv } from "react-icons/md";
import React from 'react';
import { Link } from "@mui/material";
import { useNavigate } from "react-router-dom";
import '../App.css';

const HeaderSecondary = () => {
    const navigate = useNavigate();
    const navigateTo = () => navigate('/');

    return (
        <header className="App-header">
            <MdOutlineLiveTv className={'hoverClass'} size={100} onClick={navigateTo} />
            <Typography variant="h3" component="h3">
                Consumer
            </Typography>
        </header>
    );
}

export default HeaderSecondary;
