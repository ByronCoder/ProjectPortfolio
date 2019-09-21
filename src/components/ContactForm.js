import React from 'react';
import '../../src/App.css';


class ContactForm extends React.Component { 
    constructor(props) {
        super(props)
        this.state = {emailData: []}

    }

     handleEmailSubmit = (e) => {
        e.preventDefault();
        (async () => {
            const data = new FormData(e.target)

            const response = await fetch('https://localhost:44312/email/send-email', {
                method: 'POST',
                body: data,
            })

            if(response.ok) {
                alert('Message sent succesfully!')
            }
            else {
                alert("Error sending message. Try again later.")
            }
        })() 
 
    }



    render() {
      return (
        <div className="row">
                <div className="col-lg-8 mx-auto">
                    <form name="sentMessage" id="contactForm" onSubmit={this.handleEmailSubmit} noValidate="novalidate">
                    <div className="control-group">
                        <div className="form-group floating-label-form-group controls mb-0 pb-2">
                        <label>Name</label>
                        <input className="form-control" id="name" name="name" value={this.state.emailData.name} type="text" placeholder="Name" required="required" data-validation-required-message="Please enter your name."></input>
                        <p className="help-block text-danger"></p>
                        </div>
                    </div>
                    <div className="control-group">
                        <div className="form-group floating-label-form-group controls mb-0 pb-2">
                        <label>Email Address</label>
                        <input className="form-control" id="address" name="address" value={this.state.emailData.address} type="email" placeholder="Email Address" required="required" data-validation-required-message="Please enter your email address."></input>
                        <p className="help-block text-danger"></p>
                        </div>
                    </div>
                    <div className="control-group">
                        <div className="form-group floating-label-form-group controls mb-0 pb-2">
                        <label>Phone Number</label>
                        <input className="form-control" id="phoneNumber" name="phoneNumber" value={this.state.emailData.phoneNumber} type="tel" placeholder="Phone Number" required="required" data-validation-required-message="Please enter your phone number."></input>
                        <p className="help-block text-danger"></p>
                        </div>
                    </div>
                    <div className="control-group">
                        <div className="form-group floating-label-form-group controls mb-0 pb-2">
                        <label>Message</label>
                        <textarea className="form-control" id="message" name="message" value={this.state.emailData.message} rows="5" placeholder="Message" required="required" data-validation-required-message="Please enter a message."></textarea>
                        <p className="help-block text-danger"></p>
                        </div>
                    </div>
                    <br></br>
                    <div id="success"></div>
                    <div className="form-group">
                        <button type="submit" className="btn btn-primary btn-xl" id="sendMessageButton">Send</button>
                    </div>
                    </form>
                    </div>
                 </div>
       
     )
  }
}

export default ContactForm