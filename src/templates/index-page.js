import React from "react";
import PropTypes from "prop-types";
import { Link, graphql } from "gatsby";
import Layout from "../components/Layout";
import WorkRoll from "../components/WorkRoll";
import Hero from "../components/Hero";
import AOS from "aos";
import TinySlider from "tiny-slider-react";

export const IndexPageTemplate = ({
  image,
  title,
  subheading,
  contactBox,
  mainpitch,
  services,
  latestWork,
  testimonials
}) => (
  <div>
    <Hero
      fullHeight={true}
      title={title}
      subheading={subheading}
      contactBox={contactBox}
      image={image}
    ></Hero>
    <div className="container">
      <div className="featured-message d-flex">
        <div className="text text-center">
          <h2>{mainpitch.title}</h2>
          <p className="mb-5">{mainpitch.description}</p>
          <Link to="/about" className="btn btn-dark px-5 py-3 mb-3">
            Find out more about us
          </Link>
        </div>
      </div>
    </div>
    <div className="site-section">
      <div className="container">
        <div className="row">
          <div
            className="site-section-heading text-center mb-5 w-border col-md-6 mx-auto"
            data-aos="fade-up"
          >
            <h2 className="mb-5">{services.heading}</h2>
            <p>{services.description}</p>
          </div>
        </div>
        <div className="row">
          <>
            {services.service &&
              services.service.map((service, idx) => (
                <div
                  key={idx + `-serivce`}
                  className="col-md-6 col-lg-3 mb-4 mb-lg-0"
                  data-aos="fade-up"
                  data-aos-delay={(idx + 1) * 100}
                >
                  <img
                    src={`${
                      !!service.image.childImageSharp
                        ? service.image.childImageSharp.fluid.src
                        : service.image
                    }`}
                    alt={service.title}
                    className="img-fluid"
                  />
                  <div className="p-4 bg-white">
                    <h2 className="h5 text-black mb-3">{service.title}</h2>
                    <p>{service.description}</p>
                  </div>
                </div>
              ))}
          </>
        </div>
      </div>
    </div>
    <div className="site-section bg-light">
      <div className="container">
        <div className="row">
          <div className="site-section-heading text-center mb-5 w-border col-md-6 mx-auto">
            <h2 className="mb-5">{latestWork.title}</h2>
            <p>{latestWork.description}</p>
          </div>
        </div>
        <WorkRoll></WorkRoll>
        <div className="col-md-12 text-center mt-5" data-aos="fade-up">
          <Link to="/work" className="btn btn-dark px-5 py-3">
            See more of our work
          </Link>
        </div>
      </div>
    </div>
    <div className="site-section block-13">
      <div className="container" data-aos="fade-up">
        <div className="row">
          <div className="site-section-heading text-center mb-5 w-border col-md-6 mx-auto">
            <h2 className="mb-5">{testimonials.heading}</h2>
            <p>{testimonials.description}</p>
          </div>
        </div>
        <div className="nonloop-block-13">
          <>
            {typeof window !== "undefined" &&
              testimonials.testimonial &&
              testimonials.testimonial.map((testimonial, idx) => (
                <TinySlider
                  settings={{
                    lazyload: true,
                    nav: false,
                    mouseDrag: true,
                    loop: true,
                    items: 1,
                    gutter: 5,
                    responsive: {
                      420: {
                        items: 3
                      }
                    }
                  }}
                  key={idx + `-testimonial`}
                >
                  <div className="text-center p-3 p-md-5 bg-white">
                    <div>
                      <a
                        className="text-black"
                        href="https://www.yell.com/biz/gary-knowles-kitchen-fitters-frinton-on-sea-6370085/?sharedReview=00fb60d2-81c3-42af-82d1-43dd05c0301d&fbclid=IwAR2mQBHuQK9hc9nmihj1fXbBOtSryqpLRvuul7LsNeRPAvzCTnWFZ9hOyXE#view=popup5728"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <h3 className="font-weight-light h5">
                          {testimonial.title}
                        </h3>
                        <p className="font-italic">
                          &ldquo;{testimonial.description}&rdquo;
                        </p>
                      </a>
                    </div>
                  </div>
                </TinySlider>
              ))}
          </>
        </div>
      </div>
    </div>
  </div>
);

IndexPageTemplate.propTypes = {
  image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  title: PropTypes.string,
  subheading: PropTypes.string,
  contactBox: PropTypes.string,
  mainpitch: PropTypes.object,
  services: PropTypes.object,
  testimonials: PropTypes.object,
  latestWork: PropTypes.object
};

const IndexPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark;

  React.useEffect(() => {
    AOS.init({ duration: 800, easing: "slide", once: true });
  }, []);

  return (
    <Layout hideLogo={true}>
      <IndexPageTemplate
        image={frontmatter.image}
        title={frontmatter.title}
        subheading={frontmatter.subheading}
        contactBox={frontmatter.contactBox}
        mainpitch={frontmatter.mainpitch}
        services={frontmatter.services}
        testimonials={frontmatter.testimonials}
        latestWork={frontmatter.latestWork}
      />
    </Layout>
  );
};

IndexPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object
    })
  })
};

export default IndexPage;

export const pageQuery = graphql`
  query IndexPageTemplate {
    markdownRemark(frontmatter: { templateKey: { eq: "index-page" } }) {
      frontmatter {
        title
        image {
          childImageSharp {
            fluid(maxWidth: 2048, quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        subheading
        contactBox
        mainpitch {
          title
          description
        }
        services {
          heading
          description
          service {
            image {
              childImageSharp {
                fluid(maxWidth: 600, quality: 64) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
            title
            description
          }
        }
        testimonials {
          heading
          description
          testimonial {
            title
            description
          }
        }
        latestWork {
          title
          description
        }
      }
    }
  }
`;
