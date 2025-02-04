import React, {useRef} from 'react';
import './contact.css';
import PageTransition  from '../pageTransition';
import emailjs from '@emailjs/browser';

const Contact = () => {
    const form = useRef();
    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs
          .sendForm('service_jhqy17l', 'template_oe3wa5s', form.current, {
            publicKey: 'FcX-MqHZpz27gn1va',
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
    <PageTransition>
        <section id='contactPage'>
        
        <div id='contact'>
            <h1 className='contactPageTitle'>Send Message</h1>
            <form className='contactForm' ref={form} onSubmit={sendEmail}>
                <input type='text' placeholder='Enter Your Name (Optional)' className='name' name='from_name'/>
                <input type='email' placeholder='Enter Your Email' className='email' name='your_email'/>
                <textarea placeholder='Your Message' className='msg' rows="5" name='message' ></textarea>
                <button type='submit' className='submitBtn' value='send' >Submit</button>
            </form>
            
        </div>
    </section>
    </PageTransition>
    
  )
}

export default Contact;