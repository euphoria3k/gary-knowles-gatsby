import { Link } from "gatsby";
import React from "react";

const Header = () => (
  <>
    <div className="site-wrap">
      <div className="site-navbar mt-4">
        <div className="container py-1">
          <div className="row align-items-center">
            <div className="col-8 col-md-8 col-lg-4"></div>
            <div className="col-4 col-md-4 col-lg-8">
              <nav
                className="site-navigation text-right text-md-right"
                role="navigation"
              >
                <div className="d-inline-block d-lg-none ml-md-0 mr-auto py-3">
                  <a
                    href="#"
                    className="site-menu-toggle js-menu-toggle text-white"
                  >
                    <span className="icon-menu h3">
                      <i className="fas fa-bars"></i>
                    </span>
                  </a>
                </div>
                <ul className="site-menu js-clone-nav d-none d-lg-block">
                  <li className="active">
                    <Link to="/">Home</Link>
                  </li>
                  <li>
                    <Link to="/about-us">About Us</Link>
                  </li>
                  <li>
                    <Link to="/works">Latest Work</Link>
                  </li>
                  <li>
                    <a href="#">Contact Us</a>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="site-mobile-menu">
      <div className="site-mobile-menu-header">
        <div className="site-mobile-menu-close mt-3">
          <span className="icon-close2 js-menu-toggle">
            <i className="fas fa-times"></i>
          </span>
        </div>
      </div>
      <div className="site-mobile-menu-body"></div>
    </div>
  </>
);

export default Header;
