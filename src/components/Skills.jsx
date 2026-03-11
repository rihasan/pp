function Skills() {
  return (
    <section id="skills" className="section-padding dynamic-bg text-center">
      <div className="container">
        <span className="section-tag">Core Competencies</span>
        <h2 className="fw-800 mb-5">Technical Mastery</h2>

        <div className="row g-4">
          <div className="col-md-3">
            <div className="bento-card py-4">
              <h6 className="fw-bold mb-3">Backend</h6>
              <div className="small opacity-75">
                PHP (Laravel, CodeIgniter), JavaScript (AngularJS, Vue.js),
                Python (Django), C, C++, Java
              </div>
            </div>
          </div>

          <div className="col-md-3">
            <div className="bento-card py-4">
              <h6 className="fw-bold mb-3">Frontend</h6>
              <div className="small opacity-75">
                React, AngularJS, Vue.js, JavaScript, Tailwind CSS, Bootstrap,
                HTML5, CSS3
              </div>
            </div>
          </div>

          <div className="col-md-3">
            <div className="bento-card py-4">
              <h6 className="fw-bold mb-3">Database</h6>
              <div className="small opacity-75">
                MySQL, PostgreSQL, MongoDB, MariaDB, Oracle Database
              </div>
            </div>
          </div>

          <div className="col-md-3">
            <div className="bento-card py-4">
              <h6 className="fw-bold mb-3">Tools & Systems</h6>
              <div className="small opacity-75">
                Git, Jira, Docker, AWS, macOS, Linux, Windows, Visual Studio
                Code, Sublime Text
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Skills;
