import React from 'react';
import './styles/Contact.scss';
import contact from '../../../assets/kalai-port/contact.png';
import emailjs from "emailjs-com";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
function Contactus() {
  const sendMail = (e) => {
    e.preventDefault();
    if (e.target === "") {
      toast("plss field is empty!!!")
    }
    emailjs
      .sendForm(
        "new-mail-contact",
        "template_28bus1a",
        e.target,
        "uoeS6Kk01IqV3ceeC"
      )
      .then((e) => {
        console.log(e.text);
        toast("Successfully Send Message...😀")

      })
      .catch((er) => {
        console.log(er);
        toast("Check Your Internet Connection...🥺")
      });
    e.target.reset();
  };

  return (
    <div className='contact-page'>
      <ToastContainer />
      <div className='inside-contact'>
        <div className='left-contact'>
          <h1 className='contacts'>ContactUs</h1>
          <div className='imag-section'>
            <img src={contact} className="conatct-image" />
          </div>

        </div>
        <div className='right-contact'>
          <form onSubmit={sendMail}>
            <div class="mb-4 col-lg-8">
              <label for="exampleInputEmail1" class="form-label">User Name</label>
              <input type="text" class="form-control" name="username" id="exampleInputname1" required />
              <div id="emailHelp" class="form-text">
              </div>
            </div>
            <div class="mb-4 col-lg-8">
              <label for="exampleInputPassword1" class="form-label">Email</label>
              <input type="text" class="form-control" name="email" id="exampleInputeMail1" required />
            </div>
            <div class="mb-4 col-lg-8">
              <label for="exampleInputPassword1" class="form-label">Message</label>
              <textarea type="text" class="form-control" name="message" id="exampleInputeMail1" required />
            </div>
            <button type="submit" class="btn btn-primarys">Submit</button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Contactus