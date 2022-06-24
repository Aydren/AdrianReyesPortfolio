import { useState, useRef } from "react";
import Alert from "react-bootstrap/Alert";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import emailjs from "@emailjs/browser";
const EMAILJS_SERVICE_ID = "service_a6rr2xc";
const EMAILJS_TEMPLATE_ID = "template_3gykrlr";
const EMAILJS_PUBLIC_KEY = "osLjlYiwnI6BedNRF";

function ContactForm() {
  const [message, setMessage] = useState("");

  const sendEmail = e => {
    e.preventDefault();
    emailjs
      .sendForm(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        e.target,
        EMAILJS_PUBLIC_KEY
      )
      .then(
        result => {
          console.log(result.text);
          setMessage("Your email has been sent! Thank you for reaching out!");
        },
        error => {
          console.log(error.text);
        }
      );
      e.target.reset()
  };

  return (
    <div className="my-4">
      <Form onSubmit={sendEmail} className="d-flex flex-column">
        {message === "" ? null : (
          <Alert variant="info" className="m-auto">
            {message}
          </Alert>
        )}
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter name"
            name="name"
            autoFocus
            required="true"
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter email"
            name="email"
            required="true"
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Message</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter message"
            name="message"
            required="true"
          />
        </Form.Group>

        <Button variant="primary" type="submit" className="m-auto w-25">
          Submit
        </Button>
      </Form>
    </div>
  );
}

export default ContactForm;
