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
import github from '../assets/skills/github.png';
import {Box, Grid, Typography} from "@mui/material";
import "./Portfolio.css"
import {Timeline, TimelineConnector, TimelineDot, TimelineItem, TimelineSeparator} from "@mui/lab";
import {ConstructionOutlined, LaptopMac, TerminalOutlined} from "@mui/icons-material";
import Experience from "./PotfrolioPages/Experience";
import {useState} from "react";
import Skills from "./PotfrolioPages/Skills";
import Examples from "./PotfrolioPages/Examples";

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
                <a href='https://github.com/Fuzyn/MyPage' className='description-git'><img alt='git-logo' src={github} /></a>
                <Typography variant="h4" textAlign="center">About me:</Typography>
                <Typography variant="h7">I am a mining geologist by education and experience, I also have mining qualifications.</Typography>
                <hr />
                <Typography variant="h7">I started programming in 2020. At the beginning, I learned HTML and CSS from books and intenret. Then I joined a course where I broadened my knowledge of HTML and CSS and also learned JavaScript, React and SCSS. After that, I started creating applications by myself. I just...  I hooked in this!</Typography>
                <hr />
                <Typography variant="h7">Below I will present you a few project:</Typography>
                {/*<a href='#portfolio' className='desAnchor' >▾</a>*/}
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