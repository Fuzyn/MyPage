import React from "react";
import {IconButton, Tooltip} from "@mui/material";
import {JavascriptOutlined} from "@mui/icons-material";

const JSIcon = () => {
    return <Tooltip title="JavaScript">
        <IconButton>
            <JavascriptOutlined htmlColor="white" fontSize="large"/>
        </IconButton>
    </Tooltip>
}

export default JSIcon;