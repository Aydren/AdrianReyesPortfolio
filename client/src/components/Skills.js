import reactLogo from "../assets/reactLogo.svg";
import html5Logo from "../assets/html5.svg";
import cssLogo from "../assets/css.svg";
import MongoDB from "../assets/MongoDB.svg";
import Javascript from "../assets/Javascript.svg";
import Python from "../assets/Python.svg";

function Skills() {
  let logos = [
    { img: html5Logo, level: "Proficent" },
    { img: cssLogo, level: "Proficent" },
    { img: Javascript, level: "Proficent" },
    { img: reactLogo, level: "Proficent" },
    { img: MongoDB, level: "Novice - Proficent" },
    { img: Python, level: "Novice" },
  ];

  let skills = logos.map(logo => {
    return (
      <div key={logo.img} className="skills-div d-flex flex-column text-center m-2">
        <img src={logo.img} alt="logo" className="skills-img" />
        <p className="opacity-75">{logo.level}</p>
      </div>
    );
  });

  return (
    <div>
      <h1>Skills</h1>
      <div className="d-flex justify-content-around flex-wrap">{skills}</div>
    </div>
  );
}

export default Skills;
