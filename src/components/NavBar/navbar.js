import React from 'react';
import { useNavigate, useLocation} from 'react-router-dom';
import './navbar.css';
import logo from '../../assets/terabox-logo1.png';
import homeIcon from '../../assets/arrow.png';
import contactImage from '../../assets/contactLogo.png';
import { Button } from 'react-scroll';



const Navbar = () => {
    

  const navigate = useNavigate();
  const location = useLocation();

  const isContactPage = window.location.pathname === '/contact';
  const isVideoPage = location.pathname === '/video';

    const handleButtonClick = () => {
        if(isContactPage || isVideoPage){
            navigate("/");
        }
        else{
            navigate("/contact");
        }
    }
    const buttonIcon = isVideoPage ? homeIcon : isContactPage ? homeIcon: contactImage;
    const buttonText = isVideoPage ? 'Return to Home' : isContactPage ? 'Return to Home' : 'Contact Us';

  return (
    <nav className="navbar">
       <img src={logo} alt="Logo" className='logo' />
    
        <Button className='desktopmenuBtn' onClick={handleButtonClick} >
         <img src={buttonIcon} alt="Button Icon" className='desktopMenuImg' />
        {buttonText}
        </Button>

      
    </nav>
  )
}

export default Navbar;