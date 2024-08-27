import React from "react";
import {IconButton, Tooltip} from "@mui/material";
import postgresql from '../../assets/skills/postgresql.png';

const PostgreSQLIcon = () => {
    return <Tooltip title="PostgreSQL">
        <IconButton>
            <img src={postgresql} alt="postgresql" className="skill-icon"/>
        </IconButton>
    </Tooltip>
}

export default PostgreSQLIcon;