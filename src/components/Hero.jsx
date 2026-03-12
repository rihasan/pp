function Hero() {
  return (
    <header id="hero" className="hero text-center text-lg-start">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-7">
            <span className="section-tag">
              Software Engineer | Full-Stack PHP & Laravel
            </span>
            <h1 className="display-3 fw-800 mb-4">
              Architecting <span className="text-info">Scalable</span> Web
              Solutions.
            </h1>
            <p className="lead opacity-75 mb-5">
              Full-Stack PHP & Laravel developer with a strong foundation in
              Data Structures and Algorithms. I design and build scalable web
              applications, focusing on clean architecture, efficient databases
              and seamless user experiences from backend logic to modern
              frontend interfaces.
            </p>
            <div className="d-flex flex-wrap gap-3 justify-content-center justify-content-lg-start">
              <a
                href="#contact"
                className="btn btn-info btn-lg px-5 py-3 rounded-pill text-white fw-bold"
              >
                Hire Me Now
              </a>
              <a
                href="#portfolio"
                className="btn btn-outline-light btn-lg px-5 py-3 rounded-pill"
              >
                Explore Case Studies
              </a>
            </div>
          </div>
          {/* 
                 <div className="col-lg-5 d-none d-lg-block text-end">
                    <div className="position-relative d-inline-block">
                        <img src="https://ui-avatars.com/api/?name=Riazul+Islam&background=3498db&color=fff&size=512" 
                             className="img-fluid rounded-4 shadow-lg border border-info border-3" 
                             style="width: 400px; height: 500px; object-fit: cover;"
                             alt="A.H.M Riazul Islam">
                        <div className="position-absolute bottom-0 end-0 bg-info text-white p-2 rounded-start small fw-bold">
                            Photo Coming Soon
                        </div>
                    </div>
                </div> 
                */}
          <div className="col-lg-5 d-none d-lg-block text-end">
            <img
              src="/pp/1.png"
              className="img-fluid rounded-4 shadow-lg border border-info border-3"
              alt="Riazul Islam"
            />
          </div>
        </div>
      </div>
    </header>
  );
}

export default Hero;
