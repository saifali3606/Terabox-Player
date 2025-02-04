import React from 'react';
import { useNavigate } from 'react-router-dom';
import './navbar.css';
import logo from '../../assets/terabox-logo1.png';
import contactImage from '../../assets/contactLogo.png';
import { Button } from 'react-scroll';



const Navbar = () => {
    

    const navigate = useNavigate();
    

  const iscontactPage = window.location.pathname === '/contact';
    const handleButtonClick = () => {
        if(iscontactPage){
            navigate("/");
        }
        else{
            navigate("/contact");
        }
    }

  return (
    <nav className="navbar">
       <img src={logo} alt="Logo" className='logo' />
    
        <Button className='desktopmenuBtn' onClick={handleButtonClick} >
          <img src={contactImage} alt=" " className='desktopMenuImg' />
             {iscontactPage ? 'Home' : 'Contact Us'}
        </Button>

    
    

      
    </nav>
  )
}

export default Navbar;