import myPhoto from '../assets/myphoto.jpg';
import AOS from 'aos';
// import Gallery from './Gallery/Gallery';
// import { skillsImg, skillsDescription } from './skills';
// import fiImgPage from '../assets/firstproject.jpg';
// import imgQuiz from '../assets/quiz.jpg';
// import imgKanban from '../assets/kanban.jpg';
// import imgLetter from '../assets/letter.jpg';
// import imgFuzgamela from '../assets/fuzgamela.jpg';
// import ticTacToe from '../assets/tic-tac-toe.png'
// import videoPoster from '../assets/videoPoster.png';
// import videoSrc from '../assets/cv.mp4';
// import Example from "./PotfrolioPages/Example";
// import github from '../assets/skills/github.png';
import {Box, Grid, Typography} from "@mui/material";
import "./Portfolio.css"
import {Timeline, TimelineConnector, TimelineDot, TimelineItem, TimelineSeparator} from "@mui/lab";
import {ConstructionOutlined, GitHub, LaptopMac, TerminalOutlined} from "@mui/icons-material";
import Experience from "./PotfrolioPages/Experience";
import {useState} from "react";
import Skills from "./PotfrolioPages/Skills";
import Examples from "./PotfrolioPages/Examples";
import HTMLIcon from "./Technologies/HTMLIcon";
import CSSIcon from "./Technologies/CSSIcon";
import JSIcon from "./Technologies/JSIcon";
import ReactIcon from "./Technologies/ReactIcon";
import SASSIcon from "./Technologies/SASSIcon";
import BitBucketIcon from "./Technologies/BitBucketIcon";
import VSCIcon from "./Technologies/VSCIcon";
import ObjectProgramingIcon from "./Technologies/ObjectProgramingIcon";
import ResponsiveIcon from "./Technologies/ResponsiveIcon";

const Portfolio = () => {

    AOS.init({
        easing: 'ease-out-back',
        duration: "1000",
        delay: "100",
        anchorPlacement: "bottom-center",
        offset: 200,
    });

    const [portfolioPage, setPortfolioPage] = useState("experience")

    return <Grid container spacing={3} id="portfolio-page">
        <Grid item md={4} sm={0} className="desktop-person-description">
            <Box sx={{display: {xs: "none", sm: "none", md: "block"}}}>
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
        <Grid item md={1} sm={1} xs={1} data-aos="zoom-in">
            <Timeline position="left" sx={{height: "100vh", margin: 0, padding: 0}}>
                <TimelineItem sx={{height: "33.3%"}}>
                    <TimelineSeparator>
                        <TimelineConnector />
                        <TimelineDot color={portfolioPage === "experience" ? "primary" : "grey"}>
                            <ConstructionOutlined cursor="pointer" onClick={() => setPortfolioPage("experience")}/>
                        </TimelineDot>
                        <TimelineConnector />
                    </TimelineSeparator>
                </TimelineItem>
                <TimelineItem sx={{height: "33.3%"}}>
                    <TimelineSeparator>
                        <TimelineConnector />
                        <TimelineDot color={portfolioPage === "skills" ? "primary" : "grey"}>
                            <TerminalOutlined cursor="pointer" onClick={() => setPortfolioPage("skills")}/>
                        </TimelineDot>
                        <TimelineConnector />
                    </TimelineSeparator>
                </TimelineItem>
                <TimelineItem sx={{height: "33.3%"}}>
                    <TimelineSeparator>
                        <TimelineConnector />
                        <TimelineDot color={portfolioPage === "examples" ? "primary" : "grey"}>
                            <LaptopMac cursor="pointer" onClick={() => setPortfolioPage("examples")}/>
                        </TimelineDot>
                        <TimelineConnector />
                    </TimelineSeparator>
                </TimelineItem>
            </Timeline>
        </Grid>
        <Grid item md={7} sm={9} xs={8}>
            {portfolioPage === "experience" && <Experience/>}
            {portfolioPage === "skills" && <Skills/>}
            {portfolioPage === "examples" && <Examples/>}

            {/*<div data-aos="fade-up">*/}
            {/*    <Gallery />*/}
            {/*</div>*/}
            {/*<div className="examples">*/}
            {/*    <h1 data-aos="zoom-in-right">I like to fly the drone, so I would like to show a simple complication of several aerial shots:</h1>*/}
            {/*    <video*/}
            {/*        data-aos="zoom-in-right"*/}
            {/*        autoPlay={false}*/}
            {/*        loop={false}*/}
            {/*        controls*/}
            {/*        preload="auto"*/}
            {/*        poster={videoPoster}>*/}
            {/*        <source src={videoSrc} type="video/mp4"></source>*/}
            {/*    </video>*/}
            {/*    <h1 data-aos="zoom-in-left" id='portfolio' className='examples-portfolio_title'>OK, now I invite you to see some of my works!</h1>*/}

            {/*    <div className='contact'>*/}
            {/*        <h1>If you are interested what you see, please don't hesitate!</h1>*/}
            {/*        <div className='contact_field'>*/}
            {/*            <h1><a href='mailto: michalwierzbicki22@interia.eu'>michalwierzbicki22@interia.eu</a></h1>*/}
            {/*        </div>*/}
            {/*    </div>*/}
            {/*</div>*/}
        </Grid>
    </Grid>
}

export default Portfolio;