import React from "react";
import {IconButton, Tooltip} from "@mui/material";
import materialui from '../../assets/skills/materialui.svg';

const MaterialUIIcon = () => {
    return <Tooltip title="Material UI">
        <IconButton>
            <img src={materialui} alt="materialui" className="skill-icon"/>
        </IconButton>
    </Tooltip>
}

export default MaterialUIIcon;