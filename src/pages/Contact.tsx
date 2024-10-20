import Main from '../components/Main';

function Contact() {
    return (
      <Main title="Contact Me">
        <div className="contact1-wrapper">
          <img src="/github.png" alt="GitHub" className="contact-image" />
          <div className="contact-text-content">
            <h3 className="achievement-information">
              <a href="https://github.com/Mussie0001" target="_blank" rel="noopener noreferrer" style={{ color: 'black' }}>GitHub</a>
            </h3>
          </div>
        </div>
        <div className="contact2-wrapper">
          <img src="/linkedin.png" alt="LinkedIn" className="contact2-image" />
          <div className="contact-text-content">
            <h3 className="achievement-information">
              <a href="https://www.linkedin.com/in/mussieab" target="_blank" rel="noopener noreferrer" style={{ color: 'black' }}>LinkedIn</a>
            </h3>
          </div>
        </div>
        <div className="contact3-wrapper">
          <img src="/email.png" alt="email" className="contact-image" />
          <div className="contact-text-content">
            <h3 className="achievement-information">
              <a href="mailto:mussieab@bu.edu" style={{ color: 'black' }}>Email</a>
            </h3>
          </div>
        </div>
      </Main>
    );
  }
  
  export default Contact;
  
  