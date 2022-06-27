import { useState } from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import ContactForm from "./ContactForm";
import Button from "react-bootstrap/Button";

function Contact() {
  const [clicked, setClicked] = useState(false);
  const [button, setButton] = useState(true);

  function handleClick() {
    setClicked(true);
    setButton(false);
  }
  return (
    <div className="my-4 d-flex flex-column">
      <ul className="m-0 list-unstyled d-flex justify-content-center">
        <li className="mx-5">
          <a
            href="https://www.linkedin.com/in/adrian-reyes-181649229/"
            className="text-decoration-none"
          >
            <FaLinkedin /> Linkedin
          </a>
        </li>
        <li className="mx-5">
          <a href="https://github.com/Aydren" className="text-decoration-none">
            <FaGithub /> Github
          </a>
        </li>
      </ul>
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
