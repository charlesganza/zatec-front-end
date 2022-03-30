import Typography from "@material-ui/core/Typography";
import { MdOutlineLiveTv } from "react-icons/md";
import React from 'react';

const Header = () => {
  return (
    <header className="App-header">
        <MdOutlineLiveTv size={100} />
        <Typography variant="h3" component="h3">
          Welcome to Consumer
        </Typography>
        <Typography variant="h4" component="h4">
        Your Number One Source of Entertainment!
      </Typography>
      </header>
  );
}

export default Header;
