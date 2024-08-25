import React from "react";
import {IconButton, Tooltip} from "@mui/material";
import {CssOutlined} from "@mui/icons-material";

const CSSIcon = () => {
    return <Tooltip title="CSS">
        <IconButton>
            <CssOutlined htmlColor="white" fontSize="large"/>
        </IconButton>
    </Tooltip>
}

export default CSSIcon;