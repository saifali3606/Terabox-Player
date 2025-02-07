import React, {useRef} from 'react';
import './contact.css';
import emailjs from '@emailjs/browser';

const Contact = () => {
    const form = useRef();
    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs
          .sendForm('service_bt3rm2l', 'template_0xoyd3i', form.current, {
            publicKey: 'jRKkhZgOZH3MgSodg',
          })
          .then(
            () => {
              console.log('SUCCESS!');
              alert('Email sent!');
            },
            (error) => {
              console.log('FAILED...', error.text);
            },
          );
          e.target.reset();
      };
  return (

        <section className='contactPage'>
            <h1 className='contactPageTitle'>Send Message</h1>
            <form className='contactForm' ref={form} onSubmit={sendEmail}>
                <input type='text' placeholder='Enter Your Name (Optional)' className='name' name='from_name'/>
                <input type='email' placeholder='Enter Your Email' className='email' name='from_email'/>
                <textarea placeholder='Your Message' className='msg' rows="5" name='message' ></textarea>
                <button type='submit' className='submitBtn' value='send' >Submit</button>
            </form>
     </section>
    
  )
}

export default Contact;