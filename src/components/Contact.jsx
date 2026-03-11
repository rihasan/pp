import React, { useState } from "react";

function Contact() {
  const [result, setResult] = useState("");
  const [isSending, setIsSending] = useState(false);

  const onSubmit = async (event) => {
    event.preventDefault();
    setIsSending(true);
    setResult("Sending...");

    const formData = new FormData(event.target);
    // Your specific Web3Forms Access Key
    formData.append("access_key", "ebcdf041-c0ec-4ca8-bc94-59577a06abf9");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();

      if (data.success) {
        setResult("Success! Message sent.");
        event.target.reset();
      } else {
        setResult("Error! Please try again.");
        console.error("Submission Error:", data);
      }
    } catch (error) {
      setResult("Network error. Try again.");
    } finally {
      setIsSending(false);
      // Auto-clear the result status after 4 seconds
      setTimeout(() => setResult(""), 4000);
    }
  };

  return (
    <section id="contact" className="section-padding container">
      <div className="row g-5">
        {/* --- LEFT SIDE: Contact Info --- */}
        <div className="col-lg-5">
          <span className="section-tag">Let's Connect</span>
          <h2 className="fw-800 mb-4">
            Let’s build something impactful together.
          </h2>

          <div className="d-flex flex-column gap-3 mb-4">
            {/* Email */}
            <a
              href="mailto:swiftmail2hasan@gmail.com"
              className="text-decoration-none text-body d-flex align-items-center"
            >
              <div className="btn btn-info rounded-circle me-3 text-white shadow-sm">
                <i className="fas fa-envelope"></i>
              </div>
              <span className="fw-bold">swiftmail2hasan@gmail.com</span>
            </a>

            {/* Phone + WhatsApp */}
            <a
              href="https://wa.me/8801680375710"
              target="_blank"
              rel="noopener noreferrer"
              className="text-decoration-none text-body d-flex align-items-center"
            >
              <div className="btn btn-info rounded-circle me-3 text-white shadow-sm">
                <i className="fab fa-whatsapp"></i>
              </div>
              <span className="fw-bold">+8801680375710 (Call / WhatsApp)</span>
            </a>

            {/* Location */}
            <div className="d-flex align-items-center text-body">
              <div className="btn btn-info rounded-circle me-3 text-white shadow-sm">
                <i className="fas fa-map-marker-alt"></i>
              </div>
              <span className="small">507/C, Shahjahanpur, Dhaka 1207</span>
            </div>
          </div>

          <p className="small text-muted mb-4">
            I typically respond within 24 hours.
          </p>

          {/* Social Links */}
          <div className="d-flex gap-3">
            <a
              href="https://www.linkedin.com/in/rihasan"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-outline-info rounded-circle p-3 text-body"
            >
              <i className="fab fa-linkedin fs-2"></i>
            </a>
            <a
              href="https://github.com/rihasan"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-outline-info rounded-circle p-3 text-body"
            >
              <i className="fab fa-github fs-2"></i>
            </a>
            <a
              href="https://wa.me/8801680375710"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-outline-info rounded-circle p-3 text-success"
            >
              <i className="fab fa-whatsapp fs-2"></i>
            </a>
          </div>
        </div>

        {/* --- RIGHT SIDE: Contact Form (Functional with Web3Forms) --- */}
        <div className="col-lg-7">
          <div className="bento-card p-5 bg-opacity-10 bg-info border-0 shadow-none">
            <form onSubmit={onSubmit}>
              {/* Optional Anti-Spam (Honeypot) */}
              <input
                type="checkbox"
                name="botcheck"
                className="d-none"
                style={{ display: "none" }}
              />

              <div className="row g-3">
                <div className="col-md-6">
                  <label className="form-label fw-semibold">Full Name</label>
                  <input
                    type="text"
                    name="name"
                    className="form-control"
                    placeholder="John Doe"
                    required
                  />
                </div>

                <div className="col-md-6">
                  <label className="form-label fw-semibold">
                    Email Address
                  </label>
                  <input
                    type="email"
                    name="email"
                    className="form-control"
                    placeholder="john@email.com"
                    required
                  />
                </div>

                <div className="col-12">
                  <label className="form-label fw-semibold">
                    Project Details
                  </label>
                  <textarea
                    name="message"
                    rows="5"
                    className="form-control"
                    placeholder="Tell me about your project..."
                    required
                  ></textarea>
                </div>

                <div className="col-12 text-center">
                  <button
                    type="submit"
                    disabled={isSending}
                    className="btn btn-info text-white fw-bold w-100 py-3 rounded-pill mt-3 shadow"
                  >
                    {isSending ? (
                      <span>
                        <i className="fas fa-spinner fa-spin me-2"></i>
                        Sending...
                      </span>
                    ) : (
                      <span>
                        Send Message <i className="fas fa-paper-plane ms-2"></i>
                      </span>
                    )}
                  </button>

                  {/* Status Text (Matches your theme) */}
                  {result && (
                    <div
                      className={`mt-3 small fw-bold ${result.includes("Success") ? "text-success" : "text-danger"}`}
                    >
                      {result}
                    </div>
                  )}
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
