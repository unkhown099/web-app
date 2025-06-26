import picture2 from './assets/picture-2.png';
// import picture1 from './assets/picture-1.jpg'

function Body() {

  return(
    <>
      <div className="main-container">
      <main className="landing-body">
        <h1>Welcome to SkillSync</h1>
        <p className="description">
          Sync your skills with opportunities. Sign in to discover jobs, projects, or learning resources tailored to you.
        </p>
        <div className="button-group">
          <button className="btn google">Continue with Google</button>
          <button className="btn facebook">Continue with Facebook</button>
          <button className="btn email">Sign in with Email</button>
        </div>
      </main>
      <div className="image-side">
        <img src={picture2} alt="Working from home" />
      </div>
    </div>
    </>
  )
}

export default Body