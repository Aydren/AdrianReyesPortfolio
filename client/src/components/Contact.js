import { useState } from "react";
import ContactForm from "./ContactForm";
import Button from "react-bootstrap/Button";
import Socials from "./Socials";

function Contact() {
  const [clicked, setClicked] = useState(false);
  const [button, setButton] = useState(true);

  function handleClick() {
    setClicked(true);
    setButton(false);
  }
  return (
    <div className="mb-4 d-flex flex-column">
      <Socials />
      <div className="m-auto">
        <h4 className="my-3">Have a question or want to work together?</h4>
      </div>
      {button !== false ? (
        <Button variant="success" onClick={handleClick} className="m-auto w-25">
          Contact Me
        </Button>
      ) : null}
      {clicked !== false ? <ContactForm /> : null}
    </div>
  );
}

export default Contact;
