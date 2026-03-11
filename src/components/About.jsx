function About() {
  return (
    <section id="about" className="section-padding container">
      <div className="row g-5 align-items-center">
        <div className="col-lg-6">
          <span className="section-tag">Professional Summary</span>
          <h2 className="fw-800 mb-4">Clean Code & Creative Problem Solving</h2>
          <p className="mb-4 lead">
            I focus on building reliable, maintainable and scalable web
            applications. My approach combines clean code principles, efficient
            database design, and practical problem-solving to deliver real
            business solutions.
          </p>
          <div className="row g-3">
            <div className="col-3">
              <div className="bento-card border-0 bg-info bg-opacity-10 text-center py-4">
                <i className="fas fa-rocket fa-2x text-info mb-2"></i>
                <br />
                <span className="fw-bold small">New Features</span>
              </div>
            </div>

            <div className="col-3">
              <div className="bento-card border-0 bg-info bg-opacity-10 text-center py-4">
                <i className="fas fa-book-reader fa-2x text-info mb-2"></i>
                <br />
                <span className="fw-bold small">Motivational Books</span>
              </div>
            </div>

            <div className="col-3">
              <div className="bento-card border-0 bg-info bg-opacity-10 text-center py-4">
                <i className="fas fa-music fa-2x text-info mb-2"></i>
                <br />
                <span className="fw-bold small">Listening Music</span>
              </div>
            </div>

            <div className="col-3">
              <div className="bento-card border-0 bg-info bg-opacity-10 text-center py-4">
                <i className="fas fa-guitar fa-2x text-info mb-2"></i>
                <br />
                <span className="fw-bold small">Playing Guitar</span>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-6">
          <div className="bento-card bg-dark text-white p-5">
            <h3 className="fw-bold text-info mb-4">Work Experience</h3>
            <div className="mb-4">
              <h5 className="fw-bold mb-0">Web Developer (Remote)</h5>
              <p className="text-info small mb-2">automationpartners.ai</p>
              <ul className="small opacity-75 ps-3">
                <li>
                  Developing and maintaining automated web solutions using PHP
                  and modern frameworks.
                </li>
                <li>
                  Collaborating with cross-functional teams to design scalable
                  architectures.
                </li>
                <li>
                  Implementing responsive front-end interfaces for seamless user
                  experiences.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
