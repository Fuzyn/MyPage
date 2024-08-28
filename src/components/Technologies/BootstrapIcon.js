import React from "react";
import {IconButton, Tooltip} from "@mui/material";
import bootstrap from '../../assets/skills/bootstrap.png';

const BootstrapIcon = () => {
    return <Tooltip title="Bootstrap">
        <IconButton>
            <img src={bootstrap} alt="bootstrap" className="skill-icon"/>
        </IconButton>
    </Tooltip>
}

export default BootstrapIcon;