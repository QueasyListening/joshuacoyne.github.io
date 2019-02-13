import React from 'react';
import Navbar from '../components/Navbar/Navbar';
import '../components/layout.css';
import './main-page.css';
import '../Fonts/Sanra Carla Font/stylesheet.css';
import Flower from '../components/Flower/flower';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
import { faFile, faArrowRight } from '@fortawesome/free-solid-svg-icons';
import selfPic from '../images/self_pic_circle.png';
import resume from '../../public/resume/Josh Coyne Resume.pdf';
import quillyPic from '../images/quilly.png';
import forgetMeKnotPic from '../images/forgetmeknot.png';
import lambdaLogo from '../images/lambda_logo.png';
import gatsbyLogo from '../images/gatsby-icon.png';

const mainPageRef = React.createRef();

const MainPage = () => {
    let pageNumber = 0;
    
    
    const changePage = (newPageNumber) => {

        const jumboBubbles = document.getElementsByClassName('jumbo-bubble');
        const pageTitles = document.getElementsByClassName('page-title');
        console.log('new', newPageNumber);
        console.log('old', pageNumber);
        if (newPageNumber >= pageTitles.length)
            newPageNumber = 0;
        jumboBubbles[pageNumber].style.animation = 'shrink 1s ease-out forwards';
        pageTitles[pageNumber].style.transform = 'translateX(-2000px)';
        if (typeof window !== undefined) {
            window.setTimeout(() => {
                pageTitles[pageNumber].style.transform = 'translateX(3000px)';
                pageTitles[pageNumber].style.opacity = '0';
                pageNumber = newPageNumber;
            }, 1000);
        }

        jumboBubbles[newPageNumber].style.visibility = 'visible';
        jumboBubbles[newPageNumber].style.transform = 'scale(.01)';
        jumboBubbles[newPageNumber].style.animation = 'bubble-grow .5s ease-out 1s forwards';
        pageTitles[newPageNumber].style.transform = 'translateX(0px)';
        pageTitles[newPageNumber].style.opacity = '1';
        
    }
    
    return (    
        <div className='main-page-container' ref={mainPageRef}>
            <Navbar changePage={changePage}/>
            <Flower height={85} flowerSize={75} bottom={141} left={-42} growOnPageLoad={true} colorSet={['orangered','goldenrod']}/>
            
            <h1 className='page-title page-title-intro'><div className='trapezoid'></div>Introduction</h1>
            <div className='jumbo-bubble first-bubble '>
                <div className='bubble-header intro-header'>
                    <h2 className='bubble-title'>Josh Coyne - Software Developer</h2>
                    <img className='selfie' src={selfPic}></img>
                </div>
                    <p className='bubble-text'>
                    Hello and thanks for taking the time to take a look at my website!
                    I am a creative and hardworking Full Stack Developer with experience using a variety of languages, frameworks and technologies to build dynamic, interactive, fully responsive full stack web applications. I'm familiar with a variety of database and back end technologies and have worked on all sides of professional web development and deployment. I am always working to learn new technologies as well as to practice and improve upon the skills that I already have. I’m a problem solver who isn’t intimidated by a new challenge even if it involves tech that I’m not familiar with. I am passionate about coding and using technology to make people lives easier.
                    I am also a professional, friendly and positive person with good communication skills and a team player's attitude. I'm reliable and a fast learner that’s always excited to take on new challenges.
                    Feel free to contact me with any questions, comments, or opportunities. I'd love to hear from you!</p> 
                
            </div>
            <h1 className='page-title'><div className='trapezoid'></div>Project<div className='s'>s</div></h1>
            <div className='jumbo-bubble project-bubble'>
                <h2 className='bubble-title project-bubble-title'>Projects</h2>
                <a className='project-card' href='http://www.quilly.io'>
                    <h3 className='project-title'>Quilly.io</h3>
                    <img src={quillyPic} className='project-img'></img>
                    <p className='project-text'>
                    Quilly is a Web App that allows a user to manage their job search by tracking each step of the
                    application process. It's front-end built with React and a
                    durable back-end that utilizes Node.js, express, and MongoDB.
                    </p>
                </a>
                <a className='project-card' href='http://forgetmeknot.netlify.com'>
                    <h3 className='project-title'>Forget Me Knot</h3>
                    <img src={forgetMeKnotPic} className='project-img'></img>
                    <p className='project-text'>
                    Forget me knot is a fully responsive notes application that allows a user to create, store and
                    search notes for themselves. It is written with React, Node.js, express and MongoDB.

                    </p>
                </a>
            </div>
            <h1 className='page-title'><div className='trapezoid'></div>Background</h1>
            <div className='jumbo-bubble'>
                <div className='bubble-header'>
                    <h2 className='bubble-title'>Background</h2>
                    <img className='selfie' src={selfPic}></img>
                </div>
                    <p className='bubble-text'>
                        I first encountered computer porgramming in 8th grade when I realized that I could program my TI-83 graphing calculator. 
                    From there I moved on to Visual Basic and after a few years tinkering with that I became elegible to take computer science classes
                    offered by my High School where I learned more advanced concepts in Pascal, Java, and C++. I studied computer science in college at RPI, 
                    but had to leave for peronal reasons.
                        My professional trajactory has been eclectic. I worked with contractors and home owners to spec out lighting needs. I navigated the
                    complicated world of the healcare industry on behalf of patients and I worked for a premiere medical marijuana collective helping to 
                    navigate the challenges of one of the fastest changing industries on the planet. While this collection of experiences may seem disconnected,
                    the common thread in all of them is Problem Solving! When I see a difficult problem I run towards it and when I decided to return to school to make a career 
                    in computer programming, it felt like a natural progression of that mentality. </p>   
            </div>
            <h1 className='page-title'><div className='trapezoid'></div>Education</h1>
            <div className='jumbo-bubble'>
                <div className='bubble-header'>
                    <h2 className='bubble-title'>Lambda School</h2>
                    <img className='selfie' src={lambdaLogo}></img>
                </div>
                <p className='bubble-text'>
                    Lambda School is a six month fully immersive Computer Science and Engineering Academy
                    that provides a hands-on curriculum with a focus on full stack development and solving real
                    world problems. At Lambda School I leaned a wide variety of languages and frameworks not
                    only through classroom time, but also through daily hands-on projects that rigorously tested
                    and expanded my understanding of the material. I utilized agile software development and Git
                    workow on all projects and gained hands-on experience with client and server testing. I also
                    gained extensive experience collaborating with other developers to solve complex problems
                </p>
            </div>
            <h1 className='page-title'><div className='trapezoid'></div>About</h1>
            <div className='jumbo-bubble'>
            <div className='bubble-header'>
                    <h2 className='bubble-title'>About</h2>
                    <img className='selfie' src={gatsbyLogo}></img>
                </div>
                <p className='bubble-text about-text'>
                This site was built with GatsbyJS, a modern site generator for React. It utilizes ReactJS, Javascript, CSS3 and HTML5.

                </p>
            </div>
            <button className='next-btn' onClick={() => changePage(pageNumber+1)}>Next  <FontAwesomeIcon icon={faArrowRight} className='arrow-icon'></FontAwesomeIcon></button>
            <footer>
                <div className='footer-item personal-links'>
                    <a href='https://www.linkedin.com/in/josh-coyne' className='personal-links-item'><FontAwesomeIcon className='footer-icon fa-lg fa-fw' icon={faLinkedin}/>www.linkedin.com/in/josh-coyne</a>
                    <a href='https://github.com/joshuacoyne' className='personal-links-item'><FontAwesomeIcon className='footer-icon fa-lg fa-fw' icon={faGithub}/>github.com/joshuacoyne</a>
                    <a href={resume} className='personal-links-item'><FontAwesomeIcon className='footer-icon fa-lg fa-fw' icon={faFile}/>Resume</a>
                </div>
                <div className='footer-item personal-info'>
                    <div className='personal-info-item'>Josh Coyne</div>
                    <div className='personal-info-item'>(412)337-1354</div>
                    <a href='mailto:josh.j.coyne@gmail.com' className='personal-info-item'>josh.j.coyne@gmail.com</a>
                </div>
                <div className='footer-item project-links'>
                    <a href='http://www.quilly.io' className='project-links-item'>www.quilly.io</a>
                    <a href='http://forgetmeknot.netlify.com' className='project-links-item'>forgetmeknot.netlify.com</a>

                </div>
            </footer>
        </div>
    )
}

export default MainPage;
