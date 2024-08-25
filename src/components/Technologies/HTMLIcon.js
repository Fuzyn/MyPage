import React from "react";
import {IconButton, Tooltip} from "@mui/material";
import {HtmlOutlined} from "@mui/icons-material";

const HTMLIcon = () => {
    return <Tooltip title="HTML">
        <IconButton>
            <HtmlOutlined htmlColor="white" fontSize="large"/>
        </IconButton>
    </Tooltip>
}

export default HTMLIcon;