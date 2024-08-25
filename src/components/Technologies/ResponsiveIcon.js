import React from "react";
import {IconButton, Tooltip} from "@mui/material";
import {Devices} from "@mui/icons-material";

const ResponsiveIcon = () => {
    return <Tooltip title="Responsive Web Design">
        <IconButton>
            <Devices htmlColor="white" fontSize="large"/>
        </IconButton>
    </Tooltip>
}

export default ResponsiveIcon;