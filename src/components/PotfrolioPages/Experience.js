import React from "react";
import {Grid, Typography} from "@mui/material";

const Experience = () => {
    return <Grid container className="portfolio-page-wrapper">
        <Grid item xs={12}>
            <Typography variant="h4" margin="10px 0 0 10px">Education</Typography>
            <Typography variant="h6" margin="10px 0 0 10px">In 2018 I graduated with master of science study on AGH University of Science and Technology on Faculty of Geology, Geophysics and Environmental Protection, in the field of Mining and Geology with a specialization in Mining Geology. At the end of 2020 I started Easy Coder programming course, witch includes in their program many of issues, ranging from HTML to React.</Typography>
        </Grid>
        <Grid item xs={12}>
            <Typography variant="h4" margin="20px 0 0 10px">Work experience</Typography>
            <Typography variant="h6" margin="10px 0 0 10px">In 2020, I joined the Easy Coder programming course, where I expanded my skills in HTML, CSS, JS and React, e.g. working with various types of variables, creating functional or class components, JSX and React Hooks. In addition, I am expanding my styling possibilities with SCSS.</Typography>
            <Typography variant="h6" margin="10px 0 0 10px">Then I started working at GDSoft where I significantly developed my skills in already known technologies and also learned new ones. I developed my skills with backend technologies, including: Ruby on Rails, PostgreSQL, external APIs.</Typography>
            <Typography variant="h6" margin="10px 0 0 10px">Currently, I have extensive knowledge of many technologies and libraries: Bootstrap, Bootstrap Table, Material UI, Babel, Stripe, Quickbooks, Styled Components, Redux, NextJS, etc.</Typography>
        </Grid>
    </Grid>
}

export default Experience;