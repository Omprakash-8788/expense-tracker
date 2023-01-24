import React from 'react'
import './Header.css';
import CreditCardIcon from '@mui/icons-material/CreditCard';
import GitHubIcon from '@mui/icons-material/GitHub';

const Header = () => {
  return (
    <div className='header-container'>
        <div className='header'>
            <div className='header-logo'>
                Xpenser <CreditCardIcon/>
            </div>
            <div className='header-button'>
                <a href='https://github.com/' target='_blank'><GitHubIcon/>Star</a>
            </div>
        </div>
    </div>
  )
}

export default Header