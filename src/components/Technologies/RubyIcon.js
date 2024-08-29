import React from "react";
import {IconButton, Tooltip} from "@mui/material";
import ruby from '../../assets/skills/ruby.png';

const RubyIcon = () => {
    return <Tooltip title="Ruby">
        <IconButton>
            <img src={ruby} alt="ruby" className="skill-icon"/>
        </IconButton>
    </Tooltip>
}

export default RubyIcon;