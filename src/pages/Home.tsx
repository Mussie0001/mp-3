function Home() {
    return (
      <main>
        <h2>Home</h2>
        <div className="content-wrapper">
          <img src="mussie.jpeg" alt="Mussie" className="Homepage-image" />
          <div className="text-content">
            <p>
            My name is Mussie Abraham, and I am a full-time student at Boston University, where I am pursuing a degree in Computer Science. 
            My studies are centered around problem-solving, data structures, algorithms, and emerging technologies, with a strong emphasis on practical, hands-on experience. 
            I’ve built projects that range from web development and mobile apps to machine learning models and data analysis tools, allowing me to apply theoretical knowledge to real-world challenges. 
            I am passionate about leveraging technology to create innovative solutions, and I thrive in environments that encourage continuous learning and collaboration.
            </p>
          </div>
        </div>
        <div className="description-content">
        <p> Welcome to my online resume, here you will find details regarding my <strong><a href="education.html">Educational</a></strong> and <strong><a href="employment.html">Employment</a></strong> history, and anything else you may find of interest.</p>
        </div>
      </main>
    );
  }
  
  export default Home;
  