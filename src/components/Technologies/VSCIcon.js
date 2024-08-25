import React from "react";
import {IconButton, Tooltip} from "@mui/material";
import visual_studio_code from '../../assets/skills/visual_studio_code.png';

const VSCIcon = () => {
    return <Tooltip title="Visual Studio Code">
        <IconButton>
            <img src={visual_studio_code} alt="visual_studio_code" className="skill-icon"/>
        </IconButton>
    </Tooltip>
}

export default VSCIcon;