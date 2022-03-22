import myPhoto from '../assets/myphoto.jpg';
import AOS from 'aos';
import Gallery from './gallery';
import fiImgPage from '../assets/firstproject.jpg';
import imgQuiz from '../assets/quiz.jpg';
import imgKanban from '../assets/kanban.jpg'
import imgLetter from '../assets/letter.jpg'
import videoPoster from '../assets/videoPoster.png';
import videoSrc from '../assets/cv.mp4';



const Portfolio = () => {

    AOS.init({
        easing: 'ease-out-back',
        duration: "1000",
        delay: "100",
        anchorPlacement: "center-bottom",
        offset: "200"
    });


    const education = [
        'L.O. im. Bohaterów Powstania Styczniowego in math-physics class',
        'AGH University of Science and Technology on Faculty of Geology, Geophysics and Environmental Protection, in the field of Mining and Geology with a specialization in Mining Geology'
    ];
    const educationList = education.map((education, id) => <li key={id} className="li-list">{education}</li>);

    const work = [
        'Practice covering the geological structure and method of mining: Pomorzany, Dubie, Niedźwiedzia Góra, Bełchatów, Brzegi, Janina, KGHM and Turów',
        'Work under the supervision of an authorized mining geologist at the mine: Małogoszcz, Ogorzelec, Brzezinki, Kujawy w Bielawach, Żółkiewka IV and Zimnik I',
        "Work in RailGeo as Surveyor's Assistant",
        'Work in Centrum Technologiczne Budownictwa Instytut Badań i Certyfikacji Sp. zo.o. as Junior specialist for research and control',
        'Work in Geopartner as Geologist until now'
    ];
    const workList = work.map((work, id) => <li key={id} className="li-list">{work}</li>);

    const skills = [
        'The permissions of a mining geologist in the field of a mining geologist without underground mining plants and plants performing geological works referred to in Art. 86 of the Geological and Mining Law.',
        'English on B1/B2 level',
        'Category B driving license',
        'Ability to organize work independently, solve problems and think analytically',
        'Work ethic, the ability to count quickly and work under pressure',
        'Knowledge of the programs: AutoCAD with Civil 3D (3/4), Microsoft Office Word, Excel, Power Point (3/4), QGIS (2/4), Statistica (2/4), CorelDRAW (2/4), GIMP (2/4)'
    ]
    const skillsList = skills.map((skills, id) => <li key={id} className="li-list">{skills}</li>);

    return (<div className="contener">
        <div className="mainPort">
            <div>
                <div className="photoDes">
                    <img src={myPhoto} className="myPhoto" alt="myPhoto" />
                    <div className="description">
                        <h2>A few words, about me:</h2>
                        <p>I am a mining geologist by education and experience, I also have mining qualifications.</p>
                        <hr />
                        <p>I started programming in 2020. At the beginning, I learned HTML and CSS from books and intenret. Then I joined a course where I broadened my knowledge of HTML and CSS and also learned JavaScript, React and SCSS. After that, I started creating applications by myself.</p>
                        <hr />
                        <p>Below I will present you a few project:</p>
                        <a href='#portfolio' className='desAnchor' >▾</a>
                    </div>
                </div>
                <div className="CV">
                    <div id='edu' className="education" data-aos="fade-left">
                        <h1>Education</h1>
                        <ul className="ul-list">{educationList}</ul>
                    </div>
                    <div id='work' className="work" data-aos="fade-left">
                        <h1>Work experience</h1>
                        <ul className="ul-list">{workList}</ul>
                    </div>
                    <div id='skills' className="skills" data-aos="fade-left">
                        <h1>Skills and achievements</h1>
                        <ul className="ul-list">{skillsList}</ul>
                    </div>
                </div>
            </div>
        </div>
        <div data-aos="fade-up">
            <Gallery />
        </div>
        <div className="examples">
            <h1>I like to fly the drone, so I would like to show a simple complication of several aerial shots:</h1>
            <video
                autoPlay={false}
                loop={false}
                controls
                preload="auto"
                poster={videoPoster}>
                <source src={videoSrc} type="video/mp4"></source>
            </video>
            <h1 data-aos="zoom-in" id='portfolio' className='examples-portfolio_title'>OK, now I invite you to see some of my works!</h1>
            <div className="examples-main" data-aos="zoom-in">
                <img className="examples-photo" src={fiImgPage} alt="my-first-page" />
                <div className="examples-des">
                    <h1>Simple website</h1>
                    <h2>This is my first website, write in HTML and CSS</h2>
                </div>
                <a className='git-button' href='https://github.com/Fuzyn/FirstPage'>Git Code</a>
            </div>

            <div className="examples-main" data-aos="zoom-in">
                <img className="examples-photo" src={imgQuiz} alt="quiz" />
                <div className="examples-des">
                    <h1>QUIZ</h1>
                    <h2>App in which we can test our knowledge in five categories: technology, culture, automotive, programming and history. </h2>
                </div>
                <a className='git-button' href='https://github.com/Fuzyn/Quiz'>Git Code</a>
            </div>
            <div className="examples-main" data-aos="zoom-in">
                <img className="examples-photo" src={imgKanban} alt="kanban" />
                <div className="examples-des">
                    <h1>Kanban Board</h1>
                    <h2>A board designed to organize tasks. It allows you to add and edit cards and tasks, with implemented DnD function.</h2>
                </div>
                <a className='git-button' href='https://github.com/Fuzyn/Kanban'>Git Code</a>
            </div>
            <div className="examples-main" data-aos="zoom-in">
                <img src={imgLetter} className="examples-photo" alt="kanban" />
                <div className="examples-des">
                    <h1>Letter</h1>
                    <h2>Game inspired by Wordle (English version) or Literalnie (Polish version). Guess the word without any hints in a maximum of 5 tries.</h2>
                </div>
                <a className='git-button' href='https://github.com/Fuzyn/Letter'>Git Code</a>
            </div>
            <div className='contact'>
                <h1>If you are interested what you see, please don't hesitate!</h1>
                <div className='contact_field'>
                    <h1>michalwierzbicki.miw@gmail.com</h1>
                </div>
            </div>
        </div>
    </div>)
}

export default Portfolio;