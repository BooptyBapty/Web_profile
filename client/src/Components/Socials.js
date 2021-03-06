import React from 'react'
import GithubLogo from '../Images/GitHub-Mark-Light-120px-plus.png'
import LinkedInLogo from '../Images/LinkedInLogo.png'
import EmailLogo from '../Images/Email.png'
import '../CSS/Socials.css'

function Socials() {
    return (
        <div id='socials'>
            <a href='mailto:jaish.singh007@gmail.com'>
                <button className='socails-button'>
                <img src={EmailLogo} alt='Email Logo'></img>
            </button>
            </a>
            <a href='https://github.com/BooptyBapty' target='blank'>
            <button className='socails-button'>
                <img src={GithubLogo} alt='Guthub Logo'></img>
            </button>
            </a>
            <a href='https://www.linkedin.com/in/jaish-singh-12b976209' target="blank">
            <button className='socails-button'>
                <img src={LinkedInLogo} alt='LinkedIn Logo'></img>
            </button>
            </a>
        </div>
    )
}

export default Socials
