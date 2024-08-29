import React from "react";
import {IconButton, Tooltip} from "@mui/material";
import rspec from '../../assets/skills/rspec.png';

const RspecIcon = () => {
    return <Tooltip title="Rspec">
        <IconButton>
            <img src={rspec} alt="rspec" className="skill-icon"/>
        </IconButton>
    </Tooltip>
}

export default RspecIcon;