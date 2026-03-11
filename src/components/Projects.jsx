function Projects() {
  return (
    <section id="portfolio" className="section-padding">
      <div className="container">
        <span className="section-tag">Featured Case Studies</span>
        <h2 className="fw-800 mb-5">Key Projects</h2>

        <div className="row g-4 mb-5">
          <div className="col-lg-6">
            <div className="bento-card d-flex flex-column h-100">
              <h3 className="fw-bold">fulerhut.com</h3>
              <p className="text-muted small">
                E-commerce Ecosystem | Laravel & Bootstrap
              </p>
              <p className="small">
                Developed a full-featured platform including secure payment
                gateway, order tracking, and live chat. Optimized SQL queries
                for fast product catalog loading.
              </p>
              <div className="mt-4">
                <span className="skill-pill">Laravel</span>
                <span className="skill-pill">MySQL</span>
                <span className="skill-pill">Redis</span>
                <span className="skill-pill">PHP 8.x </span>
                <span className="skill-pill">Payment API</span>
                <span className="skill-pill">SEO Optimization</span>
              </div>
              <div className="mt-auto pt-3 d-flex justify-content-between">
                <a
                  href="https://github.com/rihasan/ecommerce-site"
                  target="_blank"
                  className="text-info fw-bold text-decoration-none"
                >
                  Repo <i className="fas fa-code"></i>
                </a>
                <a
                  href="https://fulerhut.com"
                  target="_blank"
                  className="text-info fw-bold text-decoration-none"
                >
                  Live Site <i className="fas fa-external-link-alt"></i>
                </a>
              </div>
            </div>
          </div>

          <div className="col-lg-6">
            <div className="bento-card d-flex flex-column h-100">
              <h3 className="fw-bold">banglarsomoy.com</h3>
              <p className="text-muted small">
                Community News Portal | PHP Laravel
              </p>
              <p className="small">
                Built and deployed a high-traffic news platform; managed full
                SDLC from planning and database design to deployment and
                maintenance.
              </p>
              <div className="mt-4">
                <span className="skill-pill">Laravel</span>
                <span className="skill-pill">MySQL</span>
                <span className="skill-pill">PHP 8.x </span>
                <span className="skill-pill">SEO Optimization</span>
              </div>
              <div className="mt-auto pt-3 d-flex justify-content-between">
                <a
                  href="https://github.com/rihasan/online-news-portal"
                  target="_blank"
                  className="text-info fw-bold text-decoration-none"
                >
                  Repo <i className="fas fa-code"></i>
                </a>
                <a
                  href="https://banglarsomoy.com"
                  target="_blank"
                  className="text-info fw-bold text-decoration-none"
                >
                  Live Site <i className="fas fa-external-link-alt"></i>
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="row g-4">
          <div className="col-12">
            <div className="bento-card border-0 shadow-sm text-center p-4">
              <h5 className="fw-bold">Enterprise Management</h5>
              <p className="small opacity-75">
                A collection of enterprise management systems designed to
                automate operations for educational institutions, hospitality
                services and restaurants. Each system focuses on secure
                authentication, efficient CRUD workflows and operational
                reporting dashboards.
              </p>

              {/*  inner row   */}
              <div className="row g-3 mt-3">
                <div className="col-md-4">
                  <div className="bento-card border-0 shadow-sm p-3">
                    <i className="fas fa-school fa-2x text-info mb-3"></i>
                    <h5 className="fw-bold">School MIS</h5>
                    <p className="small opacity-75">
                      Full-featured management app built with Laravel and
                      Bootstrap.
                    </p>
                    <a
                      href="https://github.com/rihasan/School-management-application"
                      target="_blank"
                      className="text-info small fw-bold text-decoration-none"
                    >
                      View Source
                    </a>
                  </div>
                </div>

                <div className="col-md-4">
                  <div className="bento-card border-0 shadow-sm p-3">
                    <i className="fas fa-hotel fa-2x text-info mb-3"></i>
                    <h5 className="fw-bold">Hotel MIS</h5>
                    <p className="small opacity-75">
                      End-to-end hospitality solution for booking and logistics.
                    </p>
                    <a
                      href="https://github.com/rihasan/Hotel-Management-System"
                      target="_blank"
                      className="text-info small fw-bold text-decoration-none"
                    >
                      View Source
                    </a>
                  </div>
                </div>

                <div className="col-md-4">
                  <div className="bento-card border-0 shadow-sm p-3">
                    <i className="fas fa-utensils fa-2x text-info mb-3"></i>
                    <h5 className="fw-bold">Restaurant MIS</h5>
                    <p className="small opacity-75">
                      Inventory and service management for the dining industry.
                    </p>
                    <a
                      href="https://github.com/rihasan/restaurants-management-system"
                      target="_blank"
                      className="text-info small fw-bold text-decoration-none"
                    >
                      View Source
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="text-center mt-5">
          <a
            href="https://github.com/rihasan?tab=repositories"
            target="_blank"
            className="btn btn-outline-secondary px-4 rounded-pill"
          >
            View 15+ More Repositories on GitHub
          </a>
        </div>
      </div>
    </section>
  );
}

export default Projects;
