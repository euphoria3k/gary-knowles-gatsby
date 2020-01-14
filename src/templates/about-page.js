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

      <div className="container" data-aos="fade-up">
        <div className="featured-message d-flex">
          <div className="row mt-5">
            <div className="col-md-12 col-lg-7 mb-5">
              <PageContent className="content" content={content} />
            </div>
            <div className="col-md-12 col-lg-5 mb-5">
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
