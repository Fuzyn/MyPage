import React from "react";
import {IconButton, Tooltip} from "@mui/material";
import bitbucket from '../../assets/skills/bitbucket.png';

const BitBucketIcon = () => {
    return <Tooltip title="BitBucket">
        <IconButton>
            <img src={bitbucket} alt="bitbucket" className="skill-icon"/>
        </IconButton>
    </Tooltip>
}

export default BitBucketIcon;