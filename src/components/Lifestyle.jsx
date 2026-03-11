function Lifestyle() {
  return (
    <section className="section-padding container">
      <span className="section-tag text-center">Lifestyle</span>
      <h2 className="fw-800 text-center mb-5">Beyond the Code</h2>
      <div className="row g-4 text-center">
        <div className="col-md-3">
          <div className="bento-card border-0 shadow-sm">
            <i className="fas fa-rocket fa-3x text-info mb-3"></i>
            <h5 className="fw-bold">New Features</h5>
          </div>
        </div>
        <div className="col-md-3">
          <div className="bento-card border-0 shadow-sm">
            <i className="fas fa-book-reader fa-3x text-info mb-3"></i>
            <h5 className="fw-bold">Motivational Books</h5>
          </div>
        </div>
        <div className="col-md-3">
          <div className="bento-card border-0 shadow-sm">
            <i className="fas fa-music fa-3x text-info mb-3"></i>
            <h5 className="fw-bold">Listening Music</h5>
          </div>
        </div>

        <div className="col-md-3">
          <div className="bento-card border-0 shadow-sm">
            <i className="fas fa-guitar fa-3x text-info mb-3"></i>
            <h5 className="fw-bold">Playing Guitar</h5>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Lifestyle;
