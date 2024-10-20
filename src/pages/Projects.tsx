import Main from '../components/Main';
import Calculator from '../components/Calculator';

function Projects() {
  return (
    <Main title="Elegant Equation Solver">
      <Calculator />
      <div className="projects-wrapper">
        <img src="/github.png" alt="GitHub" className="projects-image" />
        <div className="projects-text-content">
          <h3 className="projects-information">
            <a href="https://github.com/Mussie0001" target="_blank" rel="noopener noreferrer" style={{ color: 'black' }}>
              GitHub
            </a>
          </h3>
          <h3 className="year-information"><em>View my projects using the link above!</em></h3>
        </div>
      </div>
    </Main>
  );
}

export default Projects;

