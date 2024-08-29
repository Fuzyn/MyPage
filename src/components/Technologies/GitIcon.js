import React from "react";
import {IconButton, Tooltip} from "@mui/material";
import git from '../../assets/skills/git.png';

const GitIcon = () => {
    return <Tooltip title="Git">
        <IconButton>
            <img src={git} alt="git" className="skill-icon"/>
        </IconButton>
    </Tooltip>
}

export default GitIcon;