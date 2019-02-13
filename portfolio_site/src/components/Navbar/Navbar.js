import React from 'react';
import { button } from 'gatsby';
import './Navbar.css';
import { checkPropTypes } from 'prop-types';

let nav = React.createRef();
let pullTab = React.createRef();

const slideOut = () => {
    nav.current.style.right === '0px' ? nav.current.style.right = '-190px' : nav.current.style.right = '0'; 
}

const Navbar = (props) => (
    <div className='nav-container' ref={nav}>
        <div className='pull-tab' onClick={slideOut} ref={pullTab}>
            <div className='hamburger-line'></div>
            <div className='hamburger-line'></div>
            <div className='hamburger-line'></div>
            
        </div>
        <div className='navbar'>
            <button onClick={() => props.changePage(0)} className='nav-item'>Intro</button>        
            <button onClick={() => props.changePage(1)} className='nav-item'>Projects</button>        
            <button onClick={() => props.changePage(2)} className='nav-item'>Background</button>        
            <button onClick={() => props.changePage(3)} className='nav-item'>Education</button>        
            <button onClick={() => props.changePage(4)} className='nav-item'>About</button>
            <div className='border-cover'></div>
        </div>
        
    </div>
)

export default Navbar;
