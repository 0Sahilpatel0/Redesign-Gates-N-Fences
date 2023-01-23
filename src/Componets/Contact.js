

import React, { Component } from 'react';
import { Button } from 'react-bootstrap';
import email from '../Images/email.png';
//  project
class Contact extends Component {
  render() {

    return (

      
      <>

      <div className='ema'> 
      <img
          className="email"
          src={email}
          alt=""
        />

        <h1 className='he'> Contact us for Further Details</h1>
      </div>





      <div>

      <form  >
        <input 
          type="text"
          className='form' 
          placeholder='First Name'
        />
        <input 
          type="text"
          className='form1' 
          placeholder='Last Name'
        />
        <input 
          type="text"
          className='form2' 
          placeholder='Email'
        />
        <textarea className='form3' name="" id="" cols="10" rows="10" placeholder='Your questions'>

        </textarea>

      <input className='Submit' type="submit" />
      </form>

      
      </div>



      

      </>
    );
  }
}
 
export default Contact;