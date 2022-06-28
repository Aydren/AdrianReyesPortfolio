import { useState } from "react";
import Alert from "react-bootstrap/Alert";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import emailjs from "@emailjs/browser";
import LoadSpinner from "./LoadSpinner";

const EMAILJS_SERVICE_ID = "service_a6rr2xc1111";
const EMAILJS_TEMPLATE_ID = "template_3gykrlr1111";
const EMAILJS_PUBLIC_KEY = "osLjlYiwnI6BedNRF1111";

function ContactForm() {
  const [message, setMessage] = useState("");
  const [load, setLoad] = useState(false);

  const sendEmail = e => {
    setMessage("");
    setLoad(true);
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
          setLoad(false);
          setMessage("Your email has been sent! Thank you for reaching out!");
        },
        error => {
          console.log(error.text);
          setLoad(false);
          setMessage("Your email was not sent. Please try again.");
        }
      );
    e.target.reset();
  };

  return (
    <div>
      <Form onSubmit={sendEmail} className="d-flex flex-column">
        {message === "" ? null : (
          <Alert variant="info" className="m-auto">
            {message}
          </Alert>
        )}
        {load === false ? null : (
          <LoadSpinner />
        )}
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Name</Form.Label>
          <Form.Control
            aria-label="Name input section"
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
            aria-label="Email input section"
            type="email"
            placeholder="Enter email"
            name="email"
            required="true"
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Message</Form.Label>
          <Form.Control
            aria-label="Message input section"
            as="textarea"
            rows={5}
            placeholder="Enter message"
            name="message"
            required="true"
          />
        </Form.Group>

        <Button
          aria-label="Submit Button"
          variant="primary"
          type="submit"
          className="m-auto w-25"
        >
          Submit
        </Button>
      </Form>
    </div>
  );
}

export default ContactForm;
