// import React from 'react';
import "./contactUs.css"

const ContactUs = () => {
    return (
        <section className="contact" id="contact">
            <div className="contact-text">
                <h2>Contact <span>Me</span></h2>
                <h4>Let's Work Togather</h4>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi eos excepturi aut corporis odio
                    minima quos aspernatur id temporibus doloremque iste dolorem vel, et adipisci eligendi dolores,
                    laudantium veniam officia?
                </p>
                <div className="contact-list">
                    <li><i className='bx bxs-envelope'></i>contact@gmail.com</li>
                    <li><i className='bx bxs-phone'></i>0123456789</li>
                </div>
            </div>
            <div className="contact-form">
                <form>
                    <input type="text" placeholder="Name" />
                    <input type="Email" placeholder="Email" />
                    <textarea name="" id="" cols="30" rows="10" placeholder="Enter Your Message" />
                    <input type="submit" value="submit" className="send" />
                </form>
            </div>
        </section>
    );
};

export default ContactUs;