import React from "react";
import {IconButton, Tooltip} from "@mui/material";
import redux from '../../assets/skills/redux.png';

const ReduxIcon = () => {
    return <Tooltip title="Redux">
        <IconButton>
            <img src={redux} alt="redux" className="skill-icon"/>
        </IconButton>
    </Tooltip>
}

export default ReduxIcon;