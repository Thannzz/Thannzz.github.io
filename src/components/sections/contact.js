import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';
import { srConfig, emailConfig } from '@config';
import sr from '@utils/sr';
import { usePrefersReducedMotion } from '@hooks';
import emailjs from '@emailjs/browser';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const StyledContactSection = styled.section`
  margin: 0 auto 100px;
  text-align: center;

  @media (max-width: 768px) {
    margin: 0 auto 50px;
  }

  .overline {
    display: block;
    margin-bottom: 20px;
    color: var(--green);
    font-family: var(--font-mono);
    font-size: var(--fz-md);
    font-weight: 400;

    &:before {
      bottom: 0;
      font-size: var(--fz-sm);
    }

    &:after {
      display: none;
    }
  }

  .title {
    font-size: clamp(40px, 5vw, 60px);
  }

  .email-link {
    ${({ theme }) => theme.mixins.bigButton};
    margin-top: 50px;
  }

  .form {
    margin: auto;
    margin-top: 50px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 10px;
    max-width: 450px;
    border: 1px solid var(--green);
    border-radius: 5px;
    padding: 20px;

    input[type='text'],
    input[type='email'] {
      height: 50px;
    }

    input[type='text'],
    input[type='email'],
    textarea[type='text'] {
      width: 100%;
      outline: none;
      border: none;
      border-bottom: 1px solid var(--green);
      background-color: transparent;
      color: var(--light-slate);
      font-family: var(--font-sans);
      font-size: var(--fz-xl);
      line-height: 1.3;
      @media (max-width: 480px) {
        font-size: var(--fz-lg);
      }
    }
    textarea {
      width: 100%;
      max-min: 50px;
      max-height: 100px;
      max-width: 100%;
    }
  }
`;

const Contact = () => {
  const revealContainer = useRef(null);
  const prefersReducedMotion = usePrefersReducedMotion();
  const form = useRef();
  const notify = status => {
    if (status === 'success') {
      toast.success('Thank you! Your message has been successfully sent.', {
        position: toast.POSITION.BOTTOM_RIGHT,
        theme: 'dark',
      });
    }
    if (status === 'error') {
      toast.error('Something went wrong...', {
        position: toast.POSITION.BOTTOM_RIGHT,
        theme: 'dark',
      });
    }
  };
  const sendEmail = e => {
    e.preventDefault();

    emailjs
      .sendForm(
        emailConfig.EMAIL_SERVICE_ID,
        emailConfig.EMAIL_TEMPLATE_ID,
        form.current,
        emailConfig.EMAIL_PUBLIC_KEY,
      )
      .then(
        result => {
          notify('success');
          console.log(result.text);
        },
        error => {
          notify('error');
          console.log(error.text);
        },
      )
      .finally(() => {
        form.current.reset();
      });
  };

  useEffect(() => {
    if (prefersReducedMotion) {
      return;
    }

    sr.reveal(revealContainer.current, srConfig());
  }, []);

  return (
    <StyledContactSection id="contact" ref={revealContainer}>
      <div>
        <div>
          <h2 className="numbered-heading overline">What’s Next?</h2>

          <h2 className="title">Get In Touch</h2>

          <p>
            Currently I'm learning Full Stack Web Development from Masai School,
            <br /> My inbox is always open. Whether you have a question or just want to say hi,
            <br /> I’ll try my best to get back to you!
          </p>
        </div>
        {/* <div className="formDiv"> */}
        <form ref={form} onSubmit={sendEmail} className="form" autoComplete="off">
          <input type="text" name="user_name" placeholder="Name" autoComplete="nope" required />
          <input type="email" name="user_email" placeholder="Email" autoComplete="off" required />
          <textarea
            type="text"
            name="message"
            placeholder="Message"
            row="4"
            autoComplete="off"
            required
          />
          <input type="submit" value="Send" className="email-link" />
        </form>
        {/* </div> */}
      </div>
      <ToastContainer />
    </StyledContactSection>
  );
};

export default Contact;
