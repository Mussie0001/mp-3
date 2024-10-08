function Achievements() {
    return (
      <main>
        <h2>Achievements</h2>
        <div className="achievement1-wrapper">
          <img src="/achievement.png" alt="Achievement" className="achievement-image" />
          <div className="achievement-text-content">
            <h3 className="achievement-information">Sophomore Year Dean's List</h3>
            <h3 className="year-information"><em>Fall 2022 & Spring 2023</em></h3>
          </div>
        </div>
        <br />
        <br />
        <div className="achievement2-wrapper">
          <img src="/achievement.png" alt="Achievement" className="achievement-image" />
          <div className="achievement-text-content">
            <h3 className="achievement-information">Junior Year Dean's List</h3>
            <h3 className="year-information"><em>Fall 2023 & Spring 2024</em></h3>
          </div>
        </div>
        <br />
        <br />
        <div className="achievement3-wrapper">
          <img src="/CareDx_Logo_RGB.png" alt="CareDx" className="achievement-image" />
          <div className="achievement-text-content">
            <h3 className="achievement-information">Increased Customer Retention by 42%</h3>
            <p className="achievement-content">
              Done by implementing automated workflows for customer campaigns, enhancing engagement and satisfaction.
            </p>
            <h3 className="year-information"><em>2023-2024</em></h3>
          </div>
        </div>
      </main>
    );
  }
  
  export default Achievements;
  
  