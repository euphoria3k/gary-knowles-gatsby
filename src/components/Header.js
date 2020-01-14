import { Link } from "gatsby";
import React from "react";

const Header = ({ showLogo }) => {
  const [showMobileMenu, setShowMobileMenu] = React.useState(false);
  return (
    <>
      <div className="site-wrap">
        <div className="site-navbar mt-4">
          <div className="container py-1">
            <div className="row align-items-center">
              <div className="col-8 col-md-8 col-lg-4" data-aos="fade-up">
                {showLogo && (
                  <div className="d-inline-block text-center">
                    <h3
                      style={{ fontSize: "1.3rem" }}
                      className="text-white font-weight-bold roboto"
                    >
                      GARY KNOWLES<br></br>KITCHEN FITTERS
                    </h3>
                    <h4
                      style={{ fontSize: "0.6rem" }}
                      className="text-white roboto"
                    >
                      DESIGN, SUPPLY AND INSTALLATION
                    </h4>
                  </div>
                )}
              </div>
              <div className="col-4 col-md-4 col-lg-8">
                <nav
                  className="site-navigation text-right text-md-right"
                  role="navigation"
                >
                  <div className="d-inline-block d-lg-none ml-md-0 mr-auto py-3">
                    <button
                      className="btn btn-link site-menu-toggle js-menu-toggle text-white"
                      style={{ cursor: "pointer" }}
                      onClick={() => setShowMobileMenu(true)}
                    >
                      <span className="icon-menu h3">
                        <i className="fas fa-bars"></i>
                      </span>
                    </button>
                  </div>
                  <ul className="site-menu d-none d-lg-block">
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
                </nav>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={showMobileMenu ? "offcanvas-menu" : ""}>
        <div className="site-mobile-menu">
          <div className="site-mobile-menu-header">
            <div className="site-mobile-menu-close mt-3">
              <span
                className="icon-close2 js-menu-toggle"
                onClick={() => setShowMobileMenu(false)}
              >
                <i className="fas fa-times"></i>
              </span>
            </div>
          </div>
          <div className="site-mobile-menu-body">
            {showMobileMenu && (
              <ul className="site-nav-wrap">
                <li className="active">
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
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
