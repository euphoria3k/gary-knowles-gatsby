import { useStaticQuery, graphql } from "gatsby";
import React, { Fragment } from "react";

const Hero = ({ fullHeight, image, title, subheading, contactBox }) => {
  return (
    <>
      <div
        className="site-blocks-cover overlay"
        style={{
          height: `calc(${fullHeight ? 100 : 30}vh)`,
          backgroundImage: `url(${
            !!image.childImageSharp ? image.childImageSharp.fluid.src : image
          })`,
          backgroundPosition: `top left`,
          backgroundAttachment: `fixed`
        }}
        data-aos="fade"
        data-stellar-background-ratio="0.5"
      >
        <div className="container">
          <div className="row align-items-center justify-content-center">
            <div
              className="col-lg-12 col-xl-8 text-center"
              data-aos="fade-up"
              data-aos-delay="400"
            >
              <h1 className="mb-4">
                {title.split("\n").map((item, key) => (
                  <Fragment key={key}>
                    {item}
                    <br />
                  </Fragment>
                ))}
              </h1>
              <p className="mb-5">{subheading}</p>

              <p className="p-4 bg-dark">{contactBox}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
