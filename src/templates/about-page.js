import React from "react";
import PropTypes from "prop-types";
import { graphql } from "gatsby";
import Layout from "../components/Layout";
import Content, { HTMLContent } from "../components/Content";
import Hero from "../components/Hero";
import Img from "gatsby-image";
import AOS from "aos";

export const AboutPageTemplate = ({
  title,
  subheading,
  content,
  contentComponent,
  headerImage,
  contentImage
}) => {
  const PageContent = contentComponent || Content;

  return (
    <div>
      <Hero
        fullHeight={false}
        title={title}
        subheading={subheading}
        image={headerImage}
      ></Hero>

      <div className="site-section">
        <div className="container">
          <div className="row">
            <div
              className="site-section-heading text-center mb-5 w-border col-md-6 mx-auto"
              data-aos="fade-up"
            >
              <h2 className="mb-5">A bit more information about us</h2>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-7">
              <PageContent className="content" content={content} />
            </div>
            <div className="col-lg-5">
              <Img fluid={contentImage.childImageSharp.fluid} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

AboutPageTemplate.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string,
  contentComponent: PropTypes.func
};

const AboutPage = ({ data }) => {
  const { markdownRemark: post } = data;

  React.useEffect(() => {
    AOS.init({ duration: 800, easing: "slide", once: true });
  }, []);

  return (
    <Layout>
      <AboutPageTemplate
        contentComponent={HTMLContent}
        title={post.frontmatter.title}
        subheading={post.frontmatter.subheading}
        content={post.html}
        headerImage={post.frontmatter.image}
        contentImage={post.frontmatter.contentImage}
      />
    </Layout>
  );
};

AboutPage.propTypes = {
  data: PropTypes.object.isRequired
};

export default AboutPage;

export const aboutPageQuery = graphql`
  query AboutPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        title
        subheading
        image {
          childImageSharp {
            fluid(maxWidth: 2048, quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        contentImage {
          childImageSharp {
            fluid(maxWidth: 1024, quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`;
