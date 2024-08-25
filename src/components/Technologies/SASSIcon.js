import React from "react";
import {IconButton, Tooltip} from "@mui/material";
import sass from '../../assets/skills/sass.png';

const SASSIcon = () => {
    return <Tooltip title="SASS">
        <IconButton>
            <img src={sass} alt="sass" className="skill-icon"/>
        </IconButton>
    </Tooltip>
}

export default SASSIcon;