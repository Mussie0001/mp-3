import Main from '../components/Main';

function Employment() {
    return (
      <Main title="Employment">
        <div className="job1-wrapper">
          <img src="/CareDx_Logo_RGB.png" alt="CareDx Logo" className="job-image" />
          <div className="job-text-content">
            <h3 className="job-information">Software Engineer Intern</h3>
            <h3 className="year-information"><em>October 2023 - Present</em></h3>
          </div>
        </div>
        <br />
        <br />
        <div className="job2-wrapper">
          <img src="/incisio-logo.png" alt="Incisio Logo" className="job-image" />
          <div className="job-text-content">
            <h3 className="job-information">Software Engineer</h3>
            <h3 className="year-information"><em>August 2024 - Present</em></h3>
          </div>
        </div>
      </Main>
    );
  }
  
  export default Employment;
  
  