import {Image, Row,Col} from 'react-bootstrap';
import {BsTwitter,BsDiscord} from "react-icons/bs"
import { FaYoutube,FaCcPaypal,FaGithub,FaTiktok } from "react-icons/fa";
import {useDarkMode } from '../Body/DarkModeContext.js';





const Header = () => {
  const isDarkMode = useDarkMode();
    
    return (
        <div className="info">
          <Image
            src="/portfolio/samerPro.jpg"
            className={`animate__animated animate__backInDown logo ${isDarkMode ? "" : "logo-light"}`}
            alt="Image"
          />
          <Row className='social-icons'>
            <Col className='first-social-icons-xs' lg={6} sm={6} xs={12} style={{"text-align": "right"}}>
            <a href='https://twitter.com/sam__935' rel='noreferrer' target='_blank' className='social-button'>
            <BsTwitter className={`animate__animated animate__backInLeft social-logo ${isDarkMode ? "" : "social-logo-light"} `} />
            </a>
            <a href='https://www.tiktok.com/@samerpro_' rel='noreferrer' target='_blank' className='social-button'>
                <FaTiktok className={`animate__animated animate__backInLeft social-logo ${isDarkMode ? "" : "social-logo-light"} `} />
            </a>
            <a href='https://discord.gg/ZRwX4duYKZ' rel='noreferrer' target='_blank' className='social-button'>
                <BsDiscord className={`animate__animated animate__backInUp social-logo ${isDarkMode ? "" : "social-logo-light"} `} />
            </a>
            </Col>
            <Col className='second-social-icons-xs' lg={6} sm={6} xs={12} style={{"text-align": "left"}}>
            <a href='https://www.youtube.com/channel/UCBCgGmpeSb6X__KlJZA_jLw' rel='noreferrer' target='_blank' className='social-button'>
                <FaYoutube className={`animate__animated animate__backInRight social-logo ${isDarkMode ? "" : "social-logo-light"} `} />
            </a>
            <a href='https://www.paypal.com/paypalme/SamerPro935?country.x=SA&locale.x=ar_EG' rel='noreferrer' target='_blank' className='social-button'>
                <FaCcPaypal className={`animate__animated animate__backInRight social-logo ${isDarkMode ? "" : "social-logo-light"} `} />
            </a>
            <a href='https://github.com/samer132344' rel='noreferrer' target='_blank' className='social-button'>
                <FaGithub className={`animate__animated animate__backInRight social-logo ${isDarkMode ? "" : "social-logo-light"} `} />
            </a>
            </Col>


          
          </Row>
        </div>

    );
}

export default Header;