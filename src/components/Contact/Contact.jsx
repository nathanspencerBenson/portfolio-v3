import React from 'react';
import PageGuide from '../PageGuide/PageGuide';
import './Contact.scss';
import { GiFaceToFace } from 'react-icons/gi';
import { FiMail } from 'react-icons/fi';

function Contact() {
    return (
        <div className="Contact">
            <PageGuide selected={[{}, {}, {}, {selected: true}]} />
            <div>
                <h1>CONTACT</h1>
                <h2>Have a question or want to work together?</h2>
                <p>I'm always open to job opportunities and new connections.</p>
                <p className="email"><FiMail style={{marginRight: '10px'}} /> nathanbenson.affiliate@gmail.com</p>
            </div>
            <form>
                <label for="name">NAME</label>
                <input type="text" id="name"/>
                <label for="email">EMAIL</label>
                <input type="text" id="name"/>
                <label for="message">MESSAGE</label>
                <textarea></textarea>
                <button type="submit">LET'S CONNECT<GiFaceToFace  style={{marginLeft: '10px'}} size={30} /></button>
            </form>
            
        </div>
    )
}

export default Contact
