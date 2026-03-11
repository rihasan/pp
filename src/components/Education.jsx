function Education() {
  return (
    <section id="experience" className="section-padding bg-dark text-white">
      <div className="container">
        <div className="row g-5">
          <div className="col-lg-8">
            <span className="section-tag text-info">Academic Journey</span>
            <h2 className="fw-800 mb-5">Education & Foundation</h2>
            <div className="timeline-box">
              <h4 className="fw-bold text-info">
                BSc in Computer Science & Engineering
              </h4>
              <p className="mb-1">
                Dhaka International University | CGPA 3.46/4.00
              </p>
              <p className="small opacity-50">Graduated: 2015</p>
            </div>
            <div className="timeline-box">
              <h4 className="fw-bold text-info">
                Higher Secondary Certificate (HSC)
              </h4>
              <p className="mb-1">Sherpur Govt. College | CGPA 3.80/5.00</p>
              <p className="small opacity-50">Passing Year: 2008</p>
            </div>
            <div className="timeline-box">
              <h4 className="fw-bold text-info">
                Secondary School Certificate (SSC)
              </h4>
              <p className="mb-1">G.K Pilot High School | CGPA 4.63/5.00</p>
              <p className="small opacity-50">Passing Year: 2006</p>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="bento-card bg-info bg-opacity-10 text-white border-0">
              <h4 className="fw-bold mb-4">Certifications</h4>
              <ul className="list-unstyled">
                <li className="mb-3 d-flex small">
                  <i className="fas fa-award text-info me-3 mt-1"></i> LICT: Web
                  Application Development (PHP, MySQL & Laravel Focus)
                </li>
                <li className="mb-3 d-flex small">
                  <i className="fas fa-award text-info me-3 mt-1"></i> BITM:
                  Full-Stack Development (Web App Development Basis)
                </li>
                <li className="mb-3 d-flex small">
                  <i className="fas fa-award text-info me-3 mt-1"></i> SEO
                  Specialist (Learning & Earning Development Project)
                </li>
                <li className="mb-3 d-flex small">
                  <i className="fas fa-award text-info me-3 mt-1"></i> PHP &
                  MySQL (New Horizons Computer Learning Centers | CodeIgniter)
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Education;
