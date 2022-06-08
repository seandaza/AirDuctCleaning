import React from 'react'
import style from './style.module.css'
import emailjs from '@emailjs/browser'

export default function Concepts() {

  const sendEmail = (event) =>{

    emailjs.sendForm('service_ua04by9', 'template_nhn5a27', event.target, '1Uhdp2pwqr9r5y5qe')
      .then(response =>{
        console.log('SUCCESS!', response.status, response.text);
        alert('Thank you for your message. We will contact you as soon as possible!')
      })
      .catch(err =>{
        console.log('FAILED...', err);
        alert('Sorry, something went wrong. Please try again later.')
      }
    );
    // dejar la url en cierta pagina
    /* window.location.href = 'http://localhost:3000/' */
    
  }


  return (
    <div className={style.concept} id="contact us">
        <h1>Have an amazing Service, <br/>Let's talk...</h1>
        <div className={style.email_box}>
          <form className={style.form} onSubmit={sendEmail}>
            <input type="text" name="user_name" placeholder='Your Name' required className={style.input}/><br/>
            <br/>

            <input type="email" name="user_email" placeholder='Your Email' required className={style.input}/><br/>
            <br/>

            <input type="number" name="user_phone" placeholder='Your Phone' required className={style.input}/><br/>
            <br/>

            <select name="user_selection" className={style.input}>
              <option value="Air duct cleaning services">Air duct cleaning services</option>
              <option value="Dryer vent cleaning services">Dryer vent cleaning services</option>
            </select><br/><br/>

            <select name="user_area" className={style.input}> 
              <option value="New York">New York</option>
              <option value="New Jersey">New Jersey</option>
              <option value="Connecticut">Connecticut</option>
            </select><br/><br/>

            <textarea name="user_message" placeholder='Your message here...' required className={style.input}/><br/>
            
            <button className={style.button}>Send</button>
          </form>
        </div>
    </div>
  )
}

