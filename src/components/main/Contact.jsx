import React, { useState, useEffect, useRef } from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css';
import emailjs from '@emailjs/browser';
import Button from '../UI/Button';
import './Contact.css';

const Contact = () => {
  useEffect(() => {
    Aos.init({ duration: 3000 });
  }, []);

  const [enteredName, setEnteredName] = useState('');
  const [nameIsTouched, setNameIsTouched] = useState(false);
  const [enteredMail, setEnteredMail] = useState('');
  const [mailIsTouched, setMailIsTouched] = useState(false);
  const [enteredMessage, setEnteredMessage] = useState('');
  const [messageIsTouched, setMessageIsTouched] = useState(false);
  const [submitMessage, setSubmitMessage] = useState(false);

  const nameIsValid = enteredName.trim() !== '';
  const mailIsValid = enteredMail.includes('@');
  const messageIsValid = enteredMessage.trim() !== '';

  const nameIsInvalid = !nameIsValid && nameIsTouched;
  const mailIsInvalid = !mailIsValid && mailIsTouched;
  const messageIsInvalid = !messageIsValid && messageIsTouched;

  let formIsValid = false;
  if (nameIsValid && messageIsValid && mailIsValid) {
    formIsValid = true;
  }

  const nameChangeHandler = (event) => {
    setEnteredName(event.target.value);
  };

  const nameBlurHandler = () => {
    setNameIsTouched(true);
  };

  const mailChangeHandler = (event) => {
    setEnteredMail(event.target.value);
  };

  const mailBlurHandler = () => {
    setMailIsTouched(true);
  };

  const messageChangeHandler = (event) => {
    setEnteredMessage(event.target.value);
  };

  const messageBlurHandler = () => {
    setMessageIsTouched(true);
  };

  const form = useRef();

  const submitHandler = (event) => {
    event.preventDefault();
    setNameIsTouched(true);
    setMailIsTouched(true);
    setMessageIsTouched(true);

    if (!formIsValid) {
      return;
    }

    emailjs
      .sendForm(
        'service_h3gfub4',
        'template_fgotv1k',
        form.current,
        'ZiYMf_usYpR0qALaX'
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );

    setSubmitMessage(true);
    setMailIsTouched(false);
    setNameIsTouched(false);
    setMessageIsTouched(false);
    setEnteredName('');
    setEnteredMail('');
    setEnteredMessage('');
  };

  const nameInputClasses = `${'form'} ${nameIsInvalid ? 'invalid' : ''}`;
  const mailInputClasses = `${'form'} ${mailIsInvalid ? 'invalid' : ''}`;
  const messageInputClasses = `${'form'} ${messageIsInvalid ? 'invalid' : ''}`;

  return (
    <div className='contact' id='contact'>
      <h3 data-aos='zoom-in' className='h3'>
        CONTACT ME
      </h3>
      <form data-aos='fade-up' ref={form} onSubmit={submitHandler}>
        <p>Send Me a Message:</p>
        <div className={nameInputClasses}>
          <input
            type='text'
            placeholder='Name'
            name='user_name'
            value={enteredName}
            onChange={nameChangeHandler}
            onBlur={nameBlurHandler}
          />
          {nameIsInvalid && (
            <p className='error'>Name field must not be empty.</p>
          )}
        </div>
        <div className={mailInputClasses}>
          <input
            type='mail'
            placeholder='Email'
            name='user_email'
            value={enteredMail}
            onChange={mailChangeHandler}
            onBlur={mailBlurHandler}
          />
          {mailIsInvalid && <p className='error'>Invalid Email.</p>}
        </div>
        <div className={messageInputClasses}>
          <textarea
            rows='8'
            placeholder='Type Your Message'
            name='message'
            value={enteredMessage}
            onChange={messageChangeHandler}
            onBlur={messageBlurHandler}
          />
          {messageIsInvalid && (
            <p className='error'>Message field must not be empty.</p>
          )}
        </div>
        <Button>Send Message</Button>
        {submitMessage && <i>Message Sent.</i>}
      </form>
    </div>
  );
};

export default Contact;
