import React, { useState } from "react";
import emailjs from "emailjs-com";
import { Form, Input, TextArea, Button } from 'semantic-ui-react';
import Swal from "sweetalert2";

import './ContactForm.scss';

const SERVICE_ID = "service_wdgta78";
const TEMPLATE_ID = "template_guz4esm";
const USER_ID = "42TpD8qo6Hyf3gIh_";

const ContactForm = () => {
  
    const handleOnSubmit = (e) => {
      e.preventDefault();
      emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, e.target, USER_ID)
        .then((result) => {
          console.log(result.text);
          Swal.fire({
            icon: "success",
            title: "Message Sent Successfully"
          })
        }, (error) => {
          console.log(error.text);
          Swal.fire({
            icon: "error",
            title: "Ooops, something went wrong",
            text: error.text,
          })
        });
      e.target.reset()
    };

  return (
    <div>
      <Form onSubmit={handleOnSubmit} className="form-wrapper">
        <Form.Field
          id="form-input-control-last-name"
          control={Input}
          label="Name"
          name="from_name"
          placeholder="Name…"
          required
          icon="user circle"
          iconPosition="left"
        />
        <Form.Field
          id="form-input-control-email"
          control={Input}
          name="user_email"
          placeholder="Email…"
          required
          icon="mail"
          iconPosition="left"
        />
        <Form.Field
          id="form-textarea-control-opinion"
          control={TextArea}
          label="Message"
          name="message"
          placeholder="Message…"
          required
        />
        <Button type="submit" color="green">Submit</Button>
      </Form>
    </div>
  );
}

export default ContactForm;