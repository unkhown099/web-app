import picture2 from './assets/picture-2.png';
import googleIcon from './assets/google.png';
import facebookIcon from './assets/meta.png';
import emailIcon from './assets/email.png';

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
            <button className="btn google">
              <img src={googleIcon} alt="Google" className="icon" /> Continue with Google
            </button>
            <button className="btn facebook">
              <img src={facebookIcon} alt="Facebook" className="icon" /> Continue with Facebook
            </button>
            <button className="btn email">
              <img src={emailIcon} alt="Email" className="icon" /> Sign in with Email
            </button>
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