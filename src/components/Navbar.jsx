import { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  // Theme logic
  const [theme, setTheme] = useState(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) return savedTheme;
    return window.matchMedia("(prefers-color-scheme: dark)").matches
      ? "dark"
      : "light";
  });

  const location = useLocation();
  const navigate = useNavigate();

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  useEffect(() => {
    document.documentElement.setAttribute("data-bs-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  const handleSectionClick = (e, targetId) => {
    if (e) e.preventDefault();
    setIsOpen(false);

    // If not on Home, navigate to root hash first
    if (location.pathname !== "/") {
      navigate("/");
      setTimeout(() => {
        const el = document.getElementById(targetId);
        if (el) el.scrollIntoView({ behavior: "smooth" });
      }, 100);
    } else {
      const el = document.getElementById(targetId);
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
        // FIXED: Use a relative hash update to avoid dropping /pp/
        window.location.hash = `#/${targetId === "hero" ? "" : targetId}`;
      }
    }
  };

  return (
    <nav
      className="navbar navbar-expand-lg navbar-dark fixed-top"
      style={{ backgroundColor: "#111", borderBottom: "1px solid #222" }}
    >
      <div className="container">
        {/* 1. BRAND - Instant Home Scroll & URL Reset */}
        <a
          className="navbar-brand fw-bold fs-3 order-1"
          href="#/"
          onClick={(e) => {
            e.preventDefault();
            setIsOpen(false);

            // 1. If on CV page, go back to Home first
            if (location.pathname !== "/") {
              navigate("/");
              // Small delay to let the Home page mount before scrolling
              setTimeout(() => {
                window.scrollTo({ top: 0, behavior: "smooth" });
              }, 100);
            } else {
              // 2. If already on Home, just smooth scroll to top
              window.scrollTo({ top: 0, behavior: "smooth" });

              // 3. Clean the URL hash to the base project root
              window.history.pushState(null, null, "#/");
            }
          }}
          style={{ cursor: "pointer" }}
        >
          R I Hasan
        </a>

        {/* 2. SOCIALS */}
        <div className="d-flex order-2 flex-grow-1 justify-content-center">
          <div className="d-flex gap-2">
            <a
              href="https://github.com/rihasan"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-outline-light rounded-circle btn-sm border-secondary opacity-75"
            >
              <i className="fab fa-github"></i>
            </a>
            <a
              href="https://www.linkedin.com/in/rihasan"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-outline-light rounded-circle btn-sm border-secondary opacity-75"
            >
              <i className="fab fa-linkedin"></i>
            </a>
          </div>
        </div>

        {/* 3. TOGGLER */}
        <button
          className="navbar-toggler order-3"
          type="button"
          onClick={() => setIsOpen(!isOpen)}
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* 4. MENU + THEME */}
        <div
          className={`collapse navbar-collapse order-4 order-lg-3 flex-grow-0 ${isOpen ? "show" : ""}`}
        >
          <ul className="navbar-nav ms-auto align-items-center text-uppercase small fw-bold pt-3 pt-lg-0">
            {["hero", "about", "portfolio", "experience", "contact"].map(
              (id) => (
                <li key={id} className="nav-item">
                  <a
                    className="nav-link px-3"
                    /* FIXED: Removed the leading slash to keep it relative to /pp/ */
                    href={`#/${id === "hero" ? "" : id}`}
                    onClick={(e) => handleSectionClick(e, id)}
                  >
                    {id === "hero"
                      ? "Home"
                      : id.charAt(0).toUpperCase() + id.slice(1)}
                  </a>
                </li>
              ),
            )}

            <li className="nav-item">
              <Link
                to="/cv"
                className="btn btn-info btn-sm rounded-pill px-4 ms-lg-3 fw-bold text-white my-2 my-lg-0"
                onClick={() => setIsOpen(false)}
              >
                Resume
              </Link>
            </li>

            <li className="nav-item ms-lg-3">
              <div
                onClick={toggleTheme}
                className="nav-link"
                style={{
                  cursor: "pointer",
                  fontSize: "1.2rem",
                  transition: "all 0.3s ease",
                }}
              >
                {theme === "light" ? (
                  <i
                    className="fas fa-moon"
                    style={{
                      color: "#f1c40f",
                      textShadow: "0 0 10px rgba(241, 196, 15, 0.5)",
                    }}
                  ></i>
                ) : (
                  <i
                    className="fas fa-sun"
                    style={{
                      color: "#ffdb58",
                      textShadow: "0 0 15px rgba(255, 219, 88, 0.8)",
                    }}
                  ></i>
                )}
              </div>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
