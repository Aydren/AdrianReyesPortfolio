import { logos } from "./SkillsData";
import RadarChart from "./RadarChart";

function Skills() {
  let skillsMap = logos.map(logo => {
    return (
      <div
        key={logo.img}
        className="skills-div d-flex flex-column text-center m-2"
      >
        <img src={logo.img} alt="logo" className="skills-img" />
        <p className="opacity-75">{logo.level}</p>
      </div>
    );
  });

  return (
    <div id="skills-section">
      <h1>Skills</h1>
      <RadarChart />
      <div className="skills-map d-flex justify-content-around flex-wrap">{skillsMap}</div>
    </div>
  );
}

export default Skills;
