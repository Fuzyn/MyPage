import React from "react";
import github from "../../assets/skills/github.png";
import {Grid, Typography} from "@mui/material";

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
        <Grid xs={12} display="flex" justifyContent="flex-end"><a className='git-button' href={gitLink}>Git Code<img alt='git-logo' src={github} /></a></Grid>
    </Grid>
}

export default Example;