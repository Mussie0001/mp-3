import Main from '../components/Main';

function Education() {
    return (
      <Main title="Education">
        <div className="education-wrapper">
          <img src="/bostonu-logo.png" alt="Boston University" className="education-image" />
          <div className="education-text-content">
            <h3 className="education-information">
              B.A. in Computer Science | <u><em>Boston University, MA.</em></u>
            </h3>
            <h3 className="year-information">
              <em>May 2025</em>
            </h3>
          </div>
        </div>
        <br />
        <h2>Relevant Coursework</h2>
        <br />
        <div className="coursework-wrapper">
          <img src="/coursework.png" alt="Coursework" className="coursework-image" />
          <div className="coursework-text-content">
            <h3 className="coursework-information"><em>Data Structures & Algorithms</em></h3>
            <h3 className="coursework-information"><em>Object-Oriented Programming</em></h3>
            <h3 className="coursework-information"><em>Database Systems</em></h3>
            <h3 className="coursework-information"><em>Computer Systems</em></h3>
          </div>
        </div>
      </Main>
    );
  }
  
  export default Education;
  
  
  