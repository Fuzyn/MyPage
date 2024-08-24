import React from "react";
import {Grid, Typography} from "@mui/material";

const Experience = () => {
    return <Grid container className="portfolio-page-wrapper">
        <Grid item xs={12}>
            <Typography variant="h3" margin="10px 0 0 10px">Education</Typography>
            <Typography variant="h6" margin="10px 0 0 10px">In 2018 I graduated with master of science study on AGH University of Science and Technology on Faculty of Geology, Geophysics and Environmental Protection, in the field of Mining and Geology with a specialization in Mining Geology. At the end of 2020 I started Easy Coder programming course, witch includes in their program many of issues, ranging from HTML to React.</Typography>
        </Grid>
        <Grid item xs={12}>
            <Typography variant="h3" margin="20px 0 0 10px">Work experience</Typography>
            <Typography variant="h6" margin="10px 0 0 10px">During my studies I participated in practises on many mines for example Bełchatów, KGHM and Turów. Then I started work under the supervision of an authorized mining geologist at the mine Małogoszcz, among others. Now I working in geological company Geopartner where I perform the duties of a geologist in the field of create and development of  geological documentation.</Typography>
            <Typography variant="h6" margin="10px 0 0 10px">My first attempts at programming started in 2020. Firstly I used available sourced: books and internet. I learned then basis HTML and CSS. In December 2020 I joined to programming course Easy Coder, which increased my ability in HTML and CSS. Next the curriculum included issues JavaScript for example: work with different types of variable, create function and functional or class components. After that I started learn React, including: JSX and Hooks. Besides, I expand my styling abilities with SCSS.</Typography>
        </Grid>
    </Grid>
}

export default Experience;