import { FaGithub, FaLinkedin } from "react-icons/fa";

function Socials() {
  return (
    <div>
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
    </div>
  );
}

export default Socials;
