import React from "react";
import {Box, Grid, Typography} from "@mui/material";
import myPhoto from "../../assets/myphoto.jpg";
import {GitHub} from "@mui/icons-material";
import HTMLIcon from "../Technologies/HTMLIcon";
import CSSIcon from "../Technologies/CSSIcon";
import JSIcon from "../Technologies/JSIcon";
import ReactIcon from "../Technologies/ReactIcon";
import SASSIcon from "../Technologies/SASSIcon";
import BitBucketIcon from "../Technologies/BitBucketIcon";
import VSCIcon from "../Technologies/VSCIcon";
import ObjectProgramingIcon from "../Technologies/ObjectProgramingIcon";
import ResponsiveIcon from "../Technologies/ResponsiveIcon";

const About = ({sx}) => {
    return <Grid item md={4} sm={0} className="desktop-person-description">
        <Box sx={sx} height="100%">
            <Box
                component="img"
                sx={{maxWidth: "250px", margin: "0 auto"}}
                alt="my_photo"
                src={myPhoto}
            />
            <a href='https://github.com/Fuzyn/MyPage' className='description-git'><GitHub fontSize="large"/></a>
            <Typography variant="h4" textAlign="center">About me:</Typography>
            <Typography variant="h7">I have been a Full-Stack developer for over two years. I specialize in languages such as: <b>Java Script, React, Ruby on Rails, PostgreSQL</b>, etc. I also a mining geologist by education and experience with mining qualifications.</Typography>
            <hr />
            <Typography variant="h7">I started programming in 2020. At the beginning, I learned <b>HTML, CSS, JavaScript, React and SCSS</b>. After that, I started creating applications by myself. I just...  I hooked in this!</Typography>
            <Typography variant="h7">After over two years of programming, I expanded my knowledge of backend languages and databases such as: <b>Ruby on Rails, PostgreSQL</b></Typography>
            <hr />
            <Typography variant="h7">Below I will present the technologies I know:</Typography>
            <Grid container spacing={2} alignItems="center" justifyContent="center">
                <Grid item><HTMLIcon/></Grid>
                <Grid item><CSSIcon/></Grid>
                <Grid item><JSIcon/></Grid>
                <Grid item><ReactIcon/></Grid>
                <Grid item><SASSIcon/></Grid>
                <Grid item><BitBucketIcon/></Grid>
                <Grid item><VSCIcon/></Grid>
                <Grid item><ObjectProgramingIcon/></Grid>
                <Grid item><ResponsiveIcon/></Grid>
            </Grid>
        </Box>
    </Grid>
}

export default About;