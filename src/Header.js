import React, { useState, useEffect } from 'react';
import {Menu} from "@material-ui/icons";
import './Header.css';

function Header(props) {

    const [init, setInit] = useState(false);

    useEffect(() => {
        var acc = document.querySelector('.header-hamburger')
        var panel = document.querySelector('.header-links');
        acc.addEventListener("click", function() {
            if (panel.style.maxHeight) {
                panel.style.maxHeight = null;
            } else {
                panel.style.maxHeight = `27rem`;
            }
        });
        panel.addEventListener('click', () => {
            if (panel.style.maxHeight) {
                panel.style.maxHeight = null;
            } else {
                panel.style.maxHeight = `27rem`;
            }
        })
    }, [init])

    return (
        <div className='header flex col-12 col-m-12 col-l-12'>
            <div className='header-top flex col-12 col-m-12 col-l-12'>
                <Menu className='header-hamburger'/>
            </div>
            <div className='header-links flex col-12 col-m-12 col-l-12'>
                <div className='header-link flex col-l-1' onClick={() => {document.querySelector('.homeContainer').scrollIntoView({behavior: 'smooth'})}}>
                    <p>Home</p>
                </div>
                <div className='header-link flex' onClick={() => {document.querySelector('.about').scrollIntoView({behavior: 'smooth'})}}>
                    <p>About</p>
                </div>
                <div className='header-link flex' onClick={() => {document.querySelector('.team').scrollIntoView({behavior: 'smooth'})}}>
                    <p>Team</p>
                </div>
                <div className='header-link flex' onClick={() => {document.querySelector('.portfolio').scrollIntoView({behavior: 'smooth'})}}>
                    <p>Work</p>
                </div>
                <div className='header-link flex' onClick={() => {document.querySelector('.pricing').scrollIntoView({behavior: 'smooth'})}}>
                    <p>Pricing</p>
                </div>
                <div className='header-link flex' onClick={() => {document.querySelector('.contact').scrollIntoView({behavior: 'smooth'})}}>
                    <p>Contact</p>
                </div>
            </div>
        </div>
    );
}

export default Header;
