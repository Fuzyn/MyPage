import React from "react";
import github from "../assets/skills/github.png";

const Example = ({appLink, gitLink, srcImg, altImg, title, description}) => {
    return <div className="examples-main" data-aos="zoom-in-left">
        <a href={appLink}>
            <img src={srcImg} className="examples-photo" alt={altImg} />
        </a>
        <div className="examples-des">
            <h1>{title}</h1>
            <h2>{description}</h2>
        </div>
        <a className='git-button' href={gitLink}>Git Code<img alt='git-logo' src={github} /></a>
    </div>
}

export default Example;