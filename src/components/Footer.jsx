import React from 'react';
import {BsGithub} from 'react-icons/bs';
import {AiOutlineTwitter} from 'react-icons/ai';
import {BsLinkedin} from 'react-icons/bs';
import {BsInstagram} from 'react-icons/bs'
import { BsFacebook } from 'react-icons/bs';
import './Footer.css'

export default function Footer() {
  return (
    <div className='Footer'>
        <div className='sb_footer section_padding'>
            <div className='sb_footer-links'>
                <div className='sb_footer-links_div'>
                    <h4>For Business</h4>
                    <a href="/frontend">
                        <p>Frontend</p>
                    </a>
                    <a href="frontend">
                        <p>Front-End</p>
                    </a>
                    <a href="/frontend">
                        <p>Front-End</p>
                    </a>
                </div>
                <div className='sb_footer-links_div'>
                    <h4>Resource</h4>
                    <a href="/resource">
                        <p>Resource center</p>
                    </a>
                    <a href="/resource">
                        <p>Resource center</p>
                    </a>
                    <a href="/resource">
                        <p>Resource center</p>
                    </a>
                    <a href="/resource">
                        <p>Resource center</p>
                    </a>
                    <a href="/resource">
                        <p>Resource center</p>
                    </a>
                </div>
                <div className='sb_footer-links_div'>
                    <h4>Partner</h4>
                    <a href="/employer">
                        <p>Mankind4Dev</p>
                    </a>
                    <a href="/employer">
                        <p>Mankind4Dev</p>
                    </a>
                    <a href="/employer">
                        <p>Mankind4Dev</p>
                    </a>
                </div>
                <div className='sb_footer-links_div'>
                    <h4>Company</h4>
                    <a href="/about">
                        <p>About</p>
                    </a>
                    <a href="/press">
                        <p>Press</p>
                    </a>
                    <a href="/career">
                        <p>Career</p>
                    </a>
                    <a href="/contact">
                        <p>Contact Us</p>
                    </a>
                </div>
                <div className='sb_footer-links_div'>
                    <h4>Cooming Soon</h4>
                    <div className='socialmedia'>
                        <p><BsGithub /></p>
                        <p><AiOutlineTwitter /></p>
                        <p><BsLinkedin /></p>
                        <p><BsInstagram /></p>
                        <p><BsFacebook /></p>
                    </div>
                </div>
            </div>
            
            <hr />

            <div className='sb_footer-below'>
                <div className='sb_footer-copyright'>
                    <p>@{new Date().getFullYear()} Mankind4dev. All right reserved.</p>
                </div>
                <div className='sb_footer-below-links'>
                    <a href="terms"><div><p>Teams $ Conditions</p></div></a>
                    <a href="privacy"><div><p>Privacy</p></div></a>
                    <a href="security"><div><p>Security</p></div></a>
                    <a href="cookie"><div><p>Cookie Declaration</p></div></a>
                </div>
            </div>
        </div>   
    </div>
  )
}
