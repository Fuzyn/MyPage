import React from "react";
import {Grid, Typography} from "@mui/material";
import {GitHub} from "@mui/icons-material";

const Example = ({appLink, gitLink, srcImg, altImg, title, description}) => {
    return <Grid container padding="20px">
        <Grid item md={5} xs={12}>
            <a href={appLink}>
                <img src={srcImg} className="examples-photo" alt={altImg} />
            </a>
        </Grid>
        <Grid item md={7} xs={12}>
            <Typography variant="h5">{title}</Typography>
            <Typography variant="h7">{description}</Typography>
        </Grid>
        <Grid xs={12} display="flex" justifyContent="flex-end"><a className='git-button' href={gitLink}>Git Code<GitHub/></a></Grid>
    </Grid>
}

export default Example;