import Link from "next/link";

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-inner">
        <div className="footer-brand">
          <span>Pastel Pixels</span>
          <span className="line"></span>
          <span>Studio</span>
        </div>

        <div className="footer-columns">
          <div className="footer-col">
            <h4>Our Location</h4>
            <p>
              Calgary, AB
              <br />
              Canada
            </p>
          </div>

          <div className="footer-col">
            <h4>Get In Touch</h4>
            <a className="socials" href="mailto:hellopastelpixelsstudio@gmail.com">
              hellopastelpixelsstudio@gmail.com →
            </a>
          </div>

          <div className="footer-col">
            <h4>Socials</h4>
            <a
              className="socials"
              target="_blank"
              rel="noopener noreferrer"
              href="https://ca.pinterest.com/designbypastelpixelsstudio/"
            >
              Pinterest →
            </a>
          </div>
        </div>

        <div className="footer-bottom">
          <div className="footer-nav">
            <Link href="/">Home</Link> /  <Link href="/#services">Services</Link>  /{" "}
            <Link href="/contact">Contact</Link>
          </div>
          <div>All Rights Reserved ©2026 Pastel Pixels Studio</div>
        </div>
      </div>
    </footer>
  );
}