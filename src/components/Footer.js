import { Link } from "gatsby";
import React from "react";

const Footer = () => (
  <footer className="site-footer bg-dark">
    <div className="container">
      <div className="row">
        <div className="col-lg-4">
          <div className="mb-5">
            <h3 className="footer-heading mb-4">About us</h3>
            <p>
              Gary Knowles Kitchen Fitters is a local based company serving the
              Tendring District &amp; surrounding areas, focusing on 100%
              customer satisfaction within all of its fitting services no matter
              how large or small the installation may be.
            </p>
          </div>
        </div>
        <div className="col-lg-4 mb-5 mb-lg-0">
          <div className="row mb-5">
            <div className="col-md-12">
              <h3 className="footer-heading mb-4">Navigations</h3>
            </div>
            <div className="col-md-6 col-lg-6">
              <ul className="list-unstyled">
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li>
                  <Link to="/about">About Us</Link>
                </li>
                <li>
                  <Link to="/work">Latest Work</Link>
                </li>
                <li>
                  <Link to="/contact">Contact Us</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="col-lg-4 mb-5 mb-lg-0">
          <h3 className="footer-heading mb-4">Follow Us</h3>
          <div>
            <iframe
              src="https://www.facebook.com/plugins/like.php?href=https%3A%2F%2Fwww.facebook.com%2Fpg%2Fgaryknowleskitchens&width=155&layout=button_count&action=like&size=large&share=true&height=46&appId"
              width="155"
              height="46"
              style={{ border: "none", overflow: "hidden" }}
              scrolling="no"
              frameBorder="0"
              allowtransparency="true"
              title="Follow us on Facebook"
              allow="encrypted-media"
            ></iframe>
          </div>
          <div>
            <a
              href="https://www.facebook.com/pg/garyknowleskitchens"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-dark"
            >
              <i className="fab fa-facebook-f" aria-hidden="true"></i> Find us
              on Facebook
            </a>
          </div>
        </div>
      </div>
      <div className="row pt-5 mt-5 text-center">
        <div className="col-md-12">
          <p>
            Copyright &copy;
            <script type="1c092284f34991ae7ec08e88-text/javascript">
              document.write(new Date().getFullYear());
            </script>
            Gary Knowles. All rights reserved
          </p>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
