import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDumbbell } from '@fortawesome/free-solid-svg-icons'
import React from 'react';
import './Header.css'

const Header = () => {
    return (
        <div>
            <div className='header'>
                <div className='icon'> <FontAwesomeIcon icon={faDumbbell}></FontAwesomeIcon></div>
                <h1>FITNESS HERO CLUB</h1>
            </div>
            <div className='header2'>

            </div>
        </div>
    );
};

export default Header;