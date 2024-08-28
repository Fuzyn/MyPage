import React from "react";
import {IconButton, Tooltip} from "@mui/material";
import rubymine from '../../assets/skills/rubymine.png';

const RubyMineIcon = () => {
    return <Tooltip title="RubyMine">
        <IconButton>
            <img src={rubymine} alt="rubymine" className="skill-icon"/>
        </IconButton>
    </Tooltip>
}

export default RubyMineIcon;