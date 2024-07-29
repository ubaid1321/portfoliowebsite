import React from 'react';
import "./Contact.css";
import { MdOutlineEmail } from 'react-icons/md';
import { FaGithub, FaLinkedin, FaWhatsapp } from 'react-icons/fa';

const Contact = () => {
  return (
    <section id="contact">
      <div className='section_wrapper contact_container'>
        <div className="section_header">
          <h2 className='primary_title'>Contact me</h2>
          <p className='text_muted description'>
            Ready to take your digital presence to the next level? Whether you're looking to launch a new website, revamp an existing one, or need expert advice on the best web technologies, I'm here to help. Reach out to discuss your project, questions, or just say hello.
          </p>
        </div>
        <div className="contact_group">
          <div className="contact_options">
            <article className='contact_option'>
              <MdOutlineEmail className='contact_icon' />
              <h3>Email</h3>
              <h5>ubaidmir623@gmail.com</h5>
              <a href="mailto:ubaidmir623@gmail.com" target='_blank' rel='noreferrer'>Send an email</a>
            </article>
            <article className='contact_option'>
              <FaGithub className='contact_icon' />
              <h3>Github</h3>
              <h5>@ubaidmir1321</h5>
              <a href="https://github.com/ubaid1321/" target='_blank' rel='noreferrer'>View Github</a>
            </article>
            <article className='contact_option'>
              <FaWhatsapp className='contact_icon' />
              <h3>Whatsapp</h3>
              <h5>7006688330</h5>
              <a href="https://wa.me/7006688330" target='_blank' rel='noreferrer'>Send a message</a>
            </article>
            <article className='contact_option'>
              <FaLinkedin className='contact_icon' />
              <h3>LinkedIn </h3>
              <h5>Mohamed Ubaid Mir</h5>
              <a href="https://www.linkedin.com/in/mohamed-ubaid-mir-8a9649242/" target='_blank' rel='noreferrer'>Send a message</a>
            </article>
          </div>
          <form action="https://formspree.io/f/myzgeeay" method='POST'>
            <input type="text" name='name' placeholder='Your Full Name' required />
            <input type="email" name='email' placeholder='Your Email' required />
            <textarea name="message" rows={7} placeholder='Your Message'></textarea>
            <button className='btn btn_primary' type='submit'>Send Message</button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Contact;