import myPhoto from '../assets/myphoto.jpg';
import AOS from 'aos';
import Gallery from './gallery';
import { skillsImg, skillsDescription } from './skills';
import fiImgPage from '../assets/firstproject.jpg';
import imgQuiz from '../assets/quiz.jpg';
import imgKanban from '../assets/kanban.jpg';
import imgLetter from '../assets/letter.jpg';
import imgFuzgamela from '../assets/fuzgamela.jpg';
import videoPoster from '../assets/videoPoster.png';
import videoSrc from '../assets/cv.mp4';



const Portfolio = () => {

    AOS.init({
        easing: 'ease-out-back',
        duration: "1000",
        delay: "100",
        anchorPlacement: "bottom-center",
    });


    const education = "In 2018 I graduated with master of science study on AGH University of Science and Technology on Faculty of Geology, Geophysics and Environmental Protection, in the field of Mining and Geology with a specialization in Mining Geology. At the end of 2020 I started Easy Coder programming course, witch includes in their program many of issues, ranging from HTML to React."

    const work = [
        'During my studies I participated in practises on many mines for example Bełchatów, KGHM and Turów. Then I started work under the supervision of an authorized mining geologist at the mine Małogoszcz, among others. Now I working in geological company Geopartner where I perform the duties of a geologist in the field of create and development of  geological documentation.',
        'My first attempts at programming started in 2020. Firstly I used available sourced: books and internet. I learned then basis HTML and CSS. In December 2020 I joined to programming course Easy Coder, which increased my ability in HTML and CSS. Next the curriculum included issues JavaScript for example: work with different types of variable, create function and functional or class components. After that I started learn React, including: JSX and Hooks. Besides, I expand my styling abilities with SCSS.'
    ];

    const skills = [
        'The permissions of a mining geologist in the field of a mining geologist without underground mining plants and plants performing geological works referred to in Art. 86 of the Geological and Mining Law.',
        'English on B2 level',
        'Category B driving license',
        'Ability to organize work independently, solve problems and think analytically',
        'Work ethic, the ability to count quickly and work under pressure',
        'Knowledge of the programs:  Statistica, CorelDRAW, GIMP, Visual Studio Code.'
    ]
    const skillsList = skills.map((skills, id) => <li key={id} className="li-list">{skills}</li>);

    return (<div className="contener">
        <div className="mainPort">
            <div>
                <div className="photoDes">
                    <img src={myPhoto} className="myPhoto" alt="myPhoto" data-aos="slide-right"/>
                    <div className="description"  data-aos="slide-left">
                        <a href='https://github.com/Fuzyn/MyPage' className='description-git'><img alt='git-logo' src={skillsImg[5]} /></a>
                        <h2>A few words, about me:</h2>
                        <p>I am a mining geologist by education and experience, I also have mining qualifications.</p>
                        <hr />
                        <p>I started programming in 2020. At the beginning, I learned HTML and CSS from books and intenret. Then I joined a course where I broadened my knowledge of HTML and CSS and also learned JavaScript, React and SCSS. After that, I started creating applications by myself. I just...  I hooked in this!</p>
                        <hr />
                        <p>Below I will present you a few project:</p>
                        <a href='#portfolio' className='desAnchor' >▾</a>
                    </div>
                </div>
                <div className="CV">
                    <div id='edu' className="education" data-aos="fade-left">
                        <h1>Education</h1>
                        <p>{education}</p>
                    </div>
                    <div id='work' className="work" data-aos="fade-left">
                        <h1>Work experience</h1>
                        <p>{work[0]}</p>
                        <p>{work[1]}</p>
                    </div>
                    <div id='skills' className="skills" data-aos="fade-left">
                        <h1>Skills and achievements</h1>
                        <ul className="ul-list">{skillsList}</ul>
                        <div className='skill-block'>
                            {skillsImg.map((skillImage, index) =>
                                <div key={index} className='skill-container' data-aos="fade-up" data-aos-delay={`${index}00`}>
                                    <div className='skill-container_div-img'>
                                        <img alt={skillsDescription[index]} src={skillImage} className='skill-container_img' />
                                    </div>
                                    <div className='skill-container_div-p'>
                                        <p>{skillsDescription[index]}</p>
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div data-aos="fade-up">
            <Gallery />
        </div>
        <div className="examples">
            <h1 data-aos="zoom-in-right">I like to fly the drone, so I would like to show a simple complication of several aerial shots:</h1>
            <video
                data-aos="zoom-in-right"
                autoPlay={false}
                loop={false}
                controls
                preload="auto"
                poster={videoPoster}>
                <source src={videoSrc} type="video/mp4"></source>
            </video>
            <h1 data-aos="zoom-in-left" id='portfolio' className='examples-portfolio_title'>OK, now I invite you to see some of my works!</h1>
            <div className="examples-main" data-aos="zoom-in-left">
                <a href='https://firstpage-wierzbicki.netlify.app/'>
                    <img className="examples-photo" src={fiImgPage} alt="my-first-page" />
                </a>
                <div className="examples-des">
                    <h1>Simple website</h1>
                    <h2>This is my first website, write in HTML and CSS</h2>
                </div>
                <a className='git-button' href='https://github.com/Fuzyn/FirstPage'>Git Code</a>
            </div>
            <div className="examples-main" data-aos="zoom-in-left">
                <a href='https://quizapp-wierzbicki.netlify.app/'>
                    <img className="examples-photo" src={imgQuiz} alt="quiz" />
                </a>
                <div className="examples-des">
                    <h1>QUIZ</h1>
                    <h2>App in which we can test our knowledge in five categories: technology, culture, automotive, programming and history. </h2>
                </div>
                <a className='git-button' href='https://github.com/Fuzyn/Quiz'>Git Code</a>
            </div>
            <div className="examples-main" data-aos="zoom-in-left">
                <a href='https://kanban-wierzbicki.netlify.app/'>
                    <img className="examples-photo" src={imgKanban} alt="kanban" />
                </a>
                <div className="examples-des">
                    <h1>Kanban Board</h1>
                    <h2>A board designed to organize tasks. It allows you to add and edit cards and tasks, with implemented DnD function.</h2>
                </div>
                <a className='git-button' href='https://github.com/Fuzyn/Kanban'>Git Code</a>
            </div>
            <div className="examples-main" data-aos="zoom-in-left">
                <a href='https://letter-wierzbicki.netlify.app/'>
                    <img src={imgLetter} className="examples-photo" alt="kanban" />
                </a>
                <div className="examples-des">
                    <h1>Letter</h1>
                    <h2>Game inspired by Wordle (English version) or Literalnie (Polish version). Guess the word without any hints in a maximum of 5 tries.</h2>
                </div>
                <a className='git-button' href='https://github.com/Fuzyn/Letter'>Git Code</a>
            </div>
            <div className="examples-main" data-aos="zoom-in-left">
                <a href='https://fuzgamela-wierzbicki.netlify.app/'>
                    <img src={imgFuzgamela} className="examples-photo" alt="kanban" />
                </a>
                <div className="examples-des">
                    <h1>FuzGamela (not complete)</h1>
                    <h2>Browser game</h2>
                </div>
                <a className='git-button' href='https://github.com/Fuzyn/FuzGamela'>Git Code</a>
            </div>
            <div className='contact' data-aos="slide-up">
                <h1>If you are interested what you see, please don't hesitate!</h1>
                <div className='contact_field'>
                    <h1><a href='mailto: michalwierzbicki.miw@gmail.com'>michalwierzbicki.miw@gmail.com</a></h1>
                </div>
            </div>
        </div>
    </div>)
}

export default Portfolio;