import { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";

const sections = ["hero", "about", "portfolio", "experience", "contact"];

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [active, setActive] = useState("hero");

  const location = useLocation();
  const navigate = useNavigate();

  const [theme, setTheme] = useState(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) return savedTheme;

    return window.matchMedia("(prefers-color-scheme: dark)").matches
      ? "dark"
      : "light";
  });

  const toggleTheme = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };

  useEffect(() => {
    document.documentElement.setAttribute("data-bs-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  /*
  INTERSECTION OBSERVER
  Detects which section is visible
  */

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(entry.target.id);
          }
        });
      },
      {
        rootMargin: "-40% 0px -40% 0px",
      },
    );

    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  /*
  Scroll handler
  */

  const scrollToSection = (id) => {
    setIsOpen(false);

    if (location.pathname !== "/") {
      navigate("/");
      return;
    }

    const el = document.getElementById(id);

    if (el) {
      el.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <nav
      className="navbar navbar-expand-lg navbar-dark fixed-top"
      style={{ backgroundColor: "#111", borderBottom: "1px solid #222" }}
    >
      <div className="container">
        {/* BRAND */}

        <div
          className="navbar-brand fw-bold fs-3 order-1"
          style={{ cursor: "pointer" }}
          onClick={() => {
            setIsOpen(false);
            navigate("/");
            window.scrollTo({ top: 0, behavior: "smooth" });
          }}
        >
          R I Hasan
        </div>

        {/* SOCIALS */}

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

        {/* TOGGLER */}

        <button
          className="navbar-toggler order-3"
          onClick={() => setIsOpen(!isOpen)}
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* NAV LINKS */}

        <div
          className={`collapse navbar-collapse order-4 order-lg-3 flex-grow-0 ${
            isOpen ? "show" : ""
          }`}
        >
          <ul className="navbar-nav ms-auto align-items-center text-uppercase small fw-bold pt-3 pt-lg-0">
            {sections.map((id) => (
              <li key={id} className="nav-item">
                <button
                  className={`nav-link px-3 btn btn-link ${
                    active === id ? "text-info" : ""
                  }`}
                  onClick={() => scrollToSection(id)}
                  style={{ textDecoration: "none" }}
                >
                  {id === "hero"
                    ? "Home"
                    : id.charAt(0).toUpperCase() + id.slice(1)}
                </button>
              </li>
            ))}

            {/* RESUME */}

            <li className="nav-item">
              <Link
                to="/cv"
                className="btn btn-info btn-sm rounded-pill px-4 ms-lg-3 fw-bold text-white my-2 my-lg-0"
                onClick={() => setIsOpen(false)}
              >
                Resume
              </Link>
            </li>

            {/* THEME TOGGLE */}

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
                      textShadow: "0 0 10px rgba(241,196,15,0.5)",
                    }}
                  />
                ) : (
                  <i
                    className="fas fa-sun"
                    style={{
                      color: "#ffdb58",
                      textShadow: "0 0 15px rgba(255,219,88,0.8)",
                    }}
                  />
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
