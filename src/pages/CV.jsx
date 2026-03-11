import React from "react";

function CV() {
  return (
    <div className="cv-container">
      {/* Header */}
      <h1 className="cv-name">A.H.M RIAZUL ISLAM</h1>
      <p className="contact-info">
        Software Engineer | Full-Stack PHP & Laravel Developer <br />
        📍 Dhaka, 1207 | 📞 +8801680375710 | ✉️{" "}
        <a href="mailto:swiftmail2hasan@gmail.com">
          swiftmail2hasan@gmail.com
        </a>{" "}
        |{" "}
        <a
          href="https://github.com/rihasan"
          target="_blank"
          rel="noopener noreferrer"
        >
          github.com/rihasan
        </a>{" "}
        |{" "}
        <a
          href="https://www.linkedin.com/in/rihasan"
          target="_blank"
          rel="noopener noreferrer"
        >
          linkedin.com/in/rihasan
        </a>
      </p>

      {/* Professional Summary */}
      <h2 className="cv-section">Professional Summary</h2>
      <p>
        Motivated Computer Science graduate with a strong foundation in
        full-stack development, specializing in PHP Laravel and modern
        JavaScript frameworks. Proven track record of architecting, deploying,
        and maintaining end-to-end web solutions, including e-commerce platforms
        and management systems. Adept at optimizing performance and
        collaborating in agile environments to deliver scalable software.
      </p>

      {/* Technical Skills */}
      <h2 className="cv-section">Technical Skills</h2>
      <ul>
        <li>
          <strong>Languages:</strong> PHP, Python, JavaScript (ES6+), C++, Java
        </li>
        <li>
          <strong>Frameworks/Libraries:</strong> Laravel, CodeIgniter, Django,
          React, Vue
        </li>
        <li>
          <strong>Web Technologies:</strong> HTML5, CSS3, Bootstrap, Tailwind
          CSS, RESTful APIs
        </li>
        <li>
          <strong>Databases:</strong> MySQL, MongoDB, Oracle, MariaDB
        </li>
        <li>
          <strong>Tools & DevOps:</strong> Git, Docker, AWS, VS Code
        </li>
      </ul>

      {/* Core Competencies */}
      <h2 className="cv-section">Core Competencies</h2>
      <ul>
        <li>
          <strong>Development:</strong> Full-stack architecture, API
          integration, Database Design
        </li>
        <li>
          <strong>Process:</strong> Agile methodologies, Testing & Debugging,
          Version Control (Git)
        </li>
        <li>
          <strong>Soft Skills:</strong> Team collaboration, creative problem
          solving, technical leadership
        </li>
      </ul>

      {/* Work Experience */}
      <h2 className="cv-section">Work Experience</h2>
      <h3>
        Web Developer (Remote) | automationpartners.ai | Nov 2024 – Present
      </h3>
      <ul>
        <li>
          Developing and maintaining automated web solutions using PHP and
          modern frameworks.
        </li>
        <li>
          Collaborating with cross-functional teams to design scalable
          architectures and optimize database performance.
        </li>
        <li>
          Implementing responsive front-end interfaces to ensure seamless user
          experiences.
        </li>
      </ul>

      {/* Key Projects */}
      <h2 className="cv-section">Key Projects</h2>
      <h3>
        E-commerce Platform –{" "}
        <a
          href="https://fulerhut.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          fulerhut.com
        </a>
      </h3>
      <ul>
        <li>
          <strong>Role:</strong> Lead Developer
        </li>
        <li>
          <strong>Key Features:</strong> Integrated secure payment gateways,
          real-time order tracking, mobile-responsive design, optimized SQL
          queries for fast catalog loading and search functionality.
        </li>
        <li>
          <strong>Tech Stack:</strong> PHP Laravel (Back-end), Bootstrap
          (Front-end), MySQL
        </li>
      </ul>

      <h3>
        Online News Portal –{" "}
        <a
          href="https://banglarsomoy.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          banglarsomoy.com
        </a>
      </h3>
      <ul>
        <li>
          <strong>Role:</strong> Full-Stack Developer
        </li>
        <li>
          Spearheaded end-to-end development and deployment of a high-traffic
          news platform, managing full software lifecycle, ensuring scalable
          content delivery and SEO performance.
        </li>
      </ul>

      <h3>
        Management Systems (
        <a
          href="https://github.com/rihasan/School-management-application"
          target="_blank"
          rel="noopener noreferrer"
          className="text-info small fw-bold text-decoration-none"
        >
          School
        </a>
        ,{" "}
        <a
          href="https://github.com/rihasan/Hotel-Management-System"
          target="_blank"
          rel="noopener noreferrer"
          className="text-info small fw-bold text-decoration-none"
        >
          Hotel
        </a>
        ,{" "}
        <a
          href="https://github.com/rihasan/restaurants-management-system"
          target="_blank"
          rel="noopener noreferrer"
          className="text-info small fw-bold text-decoration-none"
        >
          Restaurant
        </a>
        )
      </h3>
      <ul>
        <li>
          Engineered modular applications for automated scheduling, inventory
          management, and user authentication using Laravel framework.
        </li>
        <li>
          Managed version control, testing, and deployment for multiple business
          clients.
        </li>
      </ul>

      <div className="text-center">
        <a
          href="https://github.com/rihasan?tab=repositories"
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-outline-secondary px-4 rounded-pill"
        >
          View 15+ More Repositories on GitHub
        </a>
      </div>

      {/* Education */}
      <h2 className="cv-section">Education</h2>
      <ul>
        <li>
          B.Sc. in Computer Science & Engineering | Dhaka International
          University | CGPA: 3.46/4.00 | Graduated: 2015
        </li>
        <li>
          Higher Secondary Certificate (HSC) | Sherpur Govt. College | 3.80/5.00
          | 2008
        </li>
        <li>
          Secondary School Certificate (SSC) | G.K Pilot High School | 4.63/4.00
          | 2006
        </li>
      </ul>

      {/* Professional Training */}
      <h2 className="cv-section">Professional Training</h2>
      <ul>
        <li>Web Application Development: LICT (PHP, MySQL & Laravel Focus)</li>
        <li>Full-Stack Development: BITM (Web App Development Basis BITM)</li>
        <li>
          Search Engine Optimization (Learning & Earning Development Project)
        </li>
        <li>
          PHP & MySQL (New Horizons Computer Learning Centers | CodeIgniter)
        </li>
      </ul>

      {/* Relevant Coursework */}
      <h2 className="cv-section">Relevant Coursework</h2>
      <ul>
        <li>Data Structures and Algorithms</li>
        <li>Software Engineering</li>
        <li>Database Management Systems</li>
        <li>Artificial Intelligence</li>
        <li>Computer Networks</li>
      </ul>

      {/* Extracurricular Activities */}
      <h2 className="cv-section">Extracurricular Activities</h2>
      <ul>
        <li>Self-motivated and able to work under pressure</li>
        <li>Accept challenges with commitment</li>
        <li>Good team working ability</li>
        <li>Management and leadership skills</li>
        <li>Organized and self-motivated</li>
      </ul>

      {/* References */}
      <h2 className="cv-section">References</h2>
      <ul>
        <li>
          A.T.M Hasan Uzzaman – Vice President, Fintech Engineering, Pathao
          <br />
          📞 01670209726 | ✉️{" "}
          <a href="mailto:hasan.uzzaman@pathao.com">hasan.uzzaman@pathao.com</a>
        </li>
        <li>
          Dr. A.T.M Mahbubur Rahman Sarker – Dean & Chairman, Faculty of Science
          & Eng., DIU
          <br />
          📞 8801720557279 | ✉️{" "}
          <a href="mailto:rahman.cse@diu.ac">rahman.cse@diu.ac</a>
        </li>
      </ul>

      {/* Download Button */}
      <a
        href="public/A.H.M_Riazul_Islam_CV.pdf"
        target="_blank"
        rel="noopener noreferrer"
        className="button"
      >
        <i className="fas fa-file-download me-2"></i>Download PDF CV
      </a>
    </div>
  );
}

export default CV;
