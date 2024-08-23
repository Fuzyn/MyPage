import React from "react";
import Example from "./Example";
import {Grid} from "@mui/material";
import fiImgPage from '../../assets/firstproject.jpg';
import imgQuiz from '../../assets/quiz.jpg';
import imgKanban from '../../assets/kanban.jpg';
import imgLetter from '../../assets/letter.jpg';
import imgFuzgamela from '../../assets/fuzgamela.jpg';
import ticTacToe from '../../assets/tic-tac-toe.png'

const Examples = () => {
    return <Grid className="portfolio-page-wrapper">
            <Example
                appLink='https://firstpage-wierzbicki.netlify.app/'
                gitLink='https://github.com/Fuzyn/FirstPage'
                srcImg={fiImgPage}
                altImg='my-first-page'
                title='Simple website'
                description='This is my first website, write in HTML and CSS'
            />
            <Example
                appLink='https://quizapp-wierzbicki.netlify.app/'
                gitLink='https://github.com/Fuzyn/Quiz'
                srcImg={imgQuiz}
                altImg='quiz'
                title='QUIZ'
                description='App in which we can test our knowledge in five categories: technology, culture, automotive, programming and history.'
            />
            <Example
                appLink='https://kanban-wierzbicki.netlify.app/'
                gitLink='https://github.com/Fuzyn/Kanban'
                srcImg={imgKanban}
                altImg='kanban'
                title='Kanban Board'
                description='A board designed to organize tasks. It allows you to add and edit cards and tasks, with implemented DnD function.'
            />
            <Example
                appLink='https://letter-wierzbicki.netlify.app/'
                gitLink='https://github.com/Fuzyn/Letter'
                srcImg={imgLetter}
                altImg='letter'
                title='Letter'
                description='Game inspired by Wordle (English version) or Literalnie (Polish version). Guess the word without any hints in a maximum of 5 tries..'
            />
            <Example
                appLink='https://main--gam-tic-tac-toe.netlify.app/'
                gitLink='https://github.com/Fuzyn/tic-tac-toe'
                srcImg={ticTacToe}
                altImg='ticTacToe'
                title='Tic Tac Toe'
                description='A tic-tac-toe game in which the player can choose a board: 3x3, 4x4, 5x5'
            />
            <Example
                appLink='https://fuzgamela-wierzbicki.netlify.app/'
                gitLink='https://github.com/Fuzyn/FuzGamela'
                srcImg={imgFuzgamela}
                altImg='fuzgamela'
                title='FuzGamela (not complete)'
                description='Browser game'
            />
    </Grid>
}

export default Examples;