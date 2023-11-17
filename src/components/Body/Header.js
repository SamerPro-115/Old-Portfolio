import {Image} from 'react-bootstrap';
import {BsTwitter} from "react-icons/bs"
import { FaTiktok } from "react-icons/fa";
import {BsDiscord} from "react-icons/bs"




const Header = (prop) => {
    
    return (
        <div className="info">
          <Image
            src="/portfolio/samerPro.jpg"
            className={`animate__animated animate__backInDown logo ${prop.isDarkMode ? "" : "logo-light"}`}
            alt="Image"
          />
          <div className='social-icons'>
            <a href='https://twitter.com/sam__935' rel='noreferrer' target='_blank' className='social-button'>
            <BsTwitter className={`animate__animated animate__backInLeft social-logo ${prop.isDarkMode ? "" : "social-logo-light"} `} />
            </a>
            <a href='https://www.tiktok.com/@samerpro_' rel='noreferrer' target='_blank' className='social-button'>
                <FaTiktok className={`animate__animated animate__backInUp social-logo ${prop.isDarkMode ? "" : "social-logo-light"} `} />
            </a>
            <a href='https://discord.gg/ZRwX4duYKZ' rel='noreferrer' target='_blank' className='social-button'>
                <BsDiscord className={`animate__animated animate__backInRight social-logo ${prop.isDarkMode ? "" : "social-logo-light"} `} />
            </a>
          </div>
        </div>

    );
}

export default Header;