import Socials from "./Socials";

function Bio() {
  return (
    <div className="bio d-flex flex-column justify-content-center align-items-center">
      <h1 className="text-center">Hi my name is Adrian Reyes</h1>
      <h2 id="h2-animation" className="text-center">
        Im a frontend developer with a passion for learning and creating
      </h2>
      <hr/>
      <Socials />
    </div>
  );
}

export default Bio;
