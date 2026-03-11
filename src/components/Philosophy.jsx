function Philosophy() {
  return (
    <section id="philosophy" className="section-padding bg-dark text-white">
      <div className="container text-center">
        <span className="section-tag text-info">Mindset</span>
        <h2 className="fw-800 text-white mb-5">
          Programming Hobbies & Mindset
        </h2>
        <div className="row g-4">
          <div className="col-md-4">
            <div className="hobby-box bg-dark border border-secondary">
              <i className="fas fa-lightbulb fa-2x mb-3 text-info"></i>
              <h5 className="small fw-bold">Creative Logic</h5>
              <p className="small opacity-75">
                Problem solving and promoting creative thinking to approach
                challenges from alternative angles.
              </p>
            </div>
          </div>
          <div className="col-md-4">
            <div className="hobby-box bg-dark border border-secondary">
              <i className="fas fa-battery-half fa-2x mb-3 text-info"></i>
              <h5 className="small fw-bold">Mental Balance</h5>
              <p className="small opacity-75">
                Boosting mood and job satisfaction by balancing work-life stress
                through structured breaks
              </p>
            </div>
          </div>
          <div className="col-md-4">
            <div className="hobby-box bg-dark border border-secondary">
              <i className="fas fa-microchip fa-2x mb-3 text-info"></i>
              <h5 className="small fw-bold">Performance Flow</h5>
              <p className="small opacity-75">
                Allowing the brain to process information by taking breaks from
                intensive thinking.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Philosophy;
