import React from "react";
import {IconButton, Tooltip} from "@mui/material";
import rails from '../../assets/skills/rails.png';

const RailsIcon = () => {
    return <Tooltip title="Ruby on Rails">
        <IconButton>
            <img src={rails} alt="rails" className="skill-icon"/>
        </IconButton>
    </Tooltip>
}

export default RailsIcon;