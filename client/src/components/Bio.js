function Bio() {
  return (
    <div className="d-flex justify-content-center bio">
      <img
        src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_640.png"
        width={300}
        height={300}
        alt="photograph of Me"
        className="align-self-center m-3"
      />
      <div className="d-flex flex-column my-3 justify-content-center">
        <h2 id="bio-text">
          Hi my name is <span className="bio-span">Adrian Reyes</span> and im...   
        </h2>
      </div>
    </div>
  );
}


export default Bio;
