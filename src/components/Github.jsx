function Github() {
  return (
    <section id="github" className="section-padding text-center">
      <div className="container">
        <span className="section-tag">Open Source</span>
        <h2 className="fw-800 mb-5">GitHub Activity</h2>

        <div className="row g-4 justify-content-center">
          {/*  GitHub Stats   */}
          <div className="col-lg-4">
            <div className="bento-card text-center">
              <h5 className="fw-bold mb-4">
                <i className="fab fa-github me-2 text-info"></i>
                Contribution Stats
              </h5>

              <img
                src="https://github-readme-stats.vercel.app/api?username=rihasan&show_icons=true&theme=transparent&hide_border=true"
                className="img-fluid"
                alt="GitHub Stats"
              />
            </div>
          </div>

          {/* GitHub Streak */}
          <div className="col-lg-4">
            <div className="bento-card text-center">
              <h5 className="fw-bold mb-4">
                <i className="fas fa-fire me-2 text-info"></i>
                Coding Streak
              </h5>

              <img
                src="https://github-readme-streak-stats.herokuapp.com/?user=rihasan&theme=transparent&hide_border=true"
                className="img-fluid"
                alt="GitHub Streak"
              />
            </div>
          </div>
          {/*  Contribution Graph   */}
          <div className="col-lg-4">
            <div className="bento-card text-center">
              <h5 className="fw-bold mb-4">
                <i className="fas fa-chart-line me-2 text-info"></i>
                Contribution Graph
              </h5>

              <img
                src="https://github-readme-activity-graph.vercel.app/graph?username=rihasan&theme=github-compact&hide_border=true"
                className="img-fluid"
                alt="GitHub Contribution Graph"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Github;
