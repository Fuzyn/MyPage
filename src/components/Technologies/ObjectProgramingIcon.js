import React from "react";
import {IconButton, Tooltip} from "@mui/material";
import {DataObject} from "@mui/icons-material";

const ObjectProgramingIcon = () => {
    return <Tooltip title="Object Project Programing">
        <IconButton>
            <DataObject htmlColor="white" fontSize="large"/>
        </IconButton>
    </Tooltip>
}

export default ObjectProgramingIcon;