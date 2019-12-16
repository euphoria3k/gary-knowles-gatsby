import React from "react";
import PropTypes from "prop-types";
import { Link, graphql } from "gatsby";

import Layout from "../components/Layout";
import WorkRoll from "../components/WorkRoll";

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
    <div
      className="full-width-image margin-top-0"
      style={{
        backgroundImage: `url(${
          !!image.childImageSharp ? image.childImageSharp.fluid.src : image
        })`,
        backgroundPosition: `top left`,
        backgroundAttachment: `fixed`
      }}
    >
      <h1>{title}</h1>
      <h2>{subheading}</h2>
      <h4>{contactBox}</h4>
    </div>
    <div id="mainpitch">
      <h1 className="title">{mainpitch.title}</h1>
      <h3 className="subtitle">{mainpitch.description}</h3>
      <button type="button">Find out more about us</button>
    </div>
    <div id="services">
      <h1 className="title">{services.heading}</h1>
      <h3 className="subtitle">{services.description}</h3>
      <ul>
        {services.servicesList &&
          services.servicesList.map((service, idx) => (
            <li key={idx + `-serivce`}>{service.title}</li>
          ))}
      </ul>
    </div>
    <div id="latest-work">
      <h1 className="title">{latestWork.title}</h1>
      <h3 className="subtitle">{latestWork.description}</h3>
      <WorkRoll></WorkRoll>
    </div>
    <div id="testimonials">
      <h1 className="title">{testimonials.heading}</h1>
      <h3 className="subtitle">{testimonials.description}</h3>
      <ul>
        {testimonials.testimonialsList &&
          testimonials.testimonialsList.map((testimonial, idx) => (
            <li key={idx + `-testimonial`}>{testimonial.title}</li>
          ))}
      </ul>
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

  return (
    <Layout>
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
          title
          description
          servicesList {
            image {
              childImageSharp {
                fluid(maxWidth: 240, quality: 64) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
            heading
            description
          }
        }
        testimonials {
          title
          description
          testimonialsList {
            image {
              childImageSharp {
                fluid(maxWidth: 240, quality: 64) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
            heading
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
