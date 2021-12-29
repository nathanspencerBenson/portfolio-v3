import React, { useState } from 'react';
import './Contact.scss';
import { GiFaceToFace } from 'react-icons/gi';
import { FiMail } from 'react-icons/fi';
import{ init } from 'emailjs-com';


import emailjs from 'emailjs-com';

function Contact(props) {
    const [ formSubmitted, setFormSubmitted ] = useState(false);
    const [ message, setMessage] = useState('');
    const [ result, setResult ] = useState('');

    const serviceID = process.env.REACT_APP_SERVICE_ID;
    const templateID = process.env.REACT_APP_TEMPLATE_ID;
    const userID = process.env.REACT_APP_USER_ID;
    const sendEmail = (e) => {
        e.preventDefault();
        console.log(userID)
    
        emailjs.sendForm(serviceID, templateID, e.target, userID)
        .then((result) => {
            console.log(result.text);
            setMessage('Your message was sent successfully. Thanks.');
            setFormSubmitted(true);
            setResult('success');


        }, (error) => {
            console.log(error.text);
            setFormSubmitted(true);
            setMessage('There was an error. Try again later.');
            setResult('failure');
            

        });
        e.target.reset();
    }
         
      
    return (
        <div className='Contact section' id="Contact">
            <div>
                <h1>CONTACT</h1>
                <h2>Have a question or want to work together?</h2>
                <p>I'm always open to job opportunities and new connections.</p>
                <p className="email"><FiMail style={{marginRight: '10px'}} /> nathanbenson.affiliate@gmail.com</p>
            </div>
            <form onSubmit={sendEmail}>
                <label for="name">NAME</label>
                <input type="text" id="name" name="user_name"/>
                <label for="email">EMAIL</label>
                <input type="text" id="name" name="user_email" required/>
                <label for="message">MESSAGE</label>
                <textarea name="message"></textarea>
                <button type="submit">LET'S CONNECT<GiFaceToFace  style={{marginLeft: '10px'}} size={30} /></button>
                {formSubmitted ? (
            <div className={result}>{message} </div>
            ) : null}
            
            </form>
            
            
        </div>
    )
}

export default Contact
