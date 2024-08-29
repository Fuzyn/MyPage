import React from "react";
import {IconButton, Tooltip} from "@mui/material";
import gitlab from '../../assets/skills/gitlab.png';

const GitLabIcon = () => {
    return <Tooltip title="GitLab">
        <IconButton>
            <img src={gitlab} alt="gitlab" className="skill-icon"/>
        </IconButton>
    </Tooltip>
}

export default GitLabIcon;