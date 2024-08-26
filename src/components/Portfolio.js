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
import {Grid} from "@mui/material";
import "./Portfolio.css"
import Experience from "./PotfrolioPages/Experience";
import {useEffect, useState} from "react";
import Skills from "./PotfrolioPages/Skills";
import Examples from "./PotfrolioPages/Examples";
import About from "./PotfrolioPages/About";
import PageTimeline from "./PotfrolioPages/PageTimeline";

const Portfolio = () => {

    AOS.init({
        easing: 'ease-out-back',
        duration: "1000",
        delay: "100",
        anchorPlacement: "bottom-center",
        offset: 200,
    });

    const [portfolioPage, setPortfolioPage] = useState(window.innerWidth > 900 ? "experience" : "about")

    const getWindowDimensions = () => {
        const { innerWidth: width, innerHeight: height } = window;
        return {width, height};
    }

    useEffect(() => {
        const handleResize = () => {
            const width = getWindowDimensions().width

            if (width > 900 && portfolioPage === "about") {
                setPortfolioPage("experience")
            }
        }

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, [portfolioPage])

    return <Grid container spacing={2} id="portfolio-page">
        <About
            sx={{display: {xs: "none", sm: "none", md: "block"}}}
        />
        <PageTimeline
            portfolioPage={portfolioPage}
            setPortfolioPage={setPortfolioPage}
        />
        <Grid item md={7} sm={10} xs={10} height="100vh">
            {portfolioPage === "about" && <About sx={{display: {xs: "block", sm: "block", md: "none"}}}/>}
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