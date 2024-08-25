import React from "react";
import {IconButton, Tooltip} from "@mui/material";
import react from '../../assets/skills/react.png';

const ReactIcon = () => {
    return <Tooltip title="React">
        <IconButton>
            <img src={react} alt="react" className="skill-icon"/>
        </IconButton>
    </Tooltip>
}

export default ReactIcon;