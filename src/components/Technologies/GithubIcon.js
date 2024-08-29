import React from "react";
import {IconButton, Tooltip} from "@mui/material";
import {GitHub} from "@mui/icons-material";

const GithubIcon = () => {
    return <Tooltip title="GitHub">
        <IconButton>
            <GitHub htmlColor="white" fontSize="large"/>
        </IconButton>
    </Tooltip>
}

export default GithubIcon;