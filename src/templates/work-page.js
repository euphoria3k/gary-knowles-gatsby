import React from "react";
import PropTypes from "prop-types";
import { graphql } from "gatsby";
import Layout from "../components/Layout";
import Content, { HTMLContent } from "../components/Content";
import Hero from "../components/Hero";
import AOS from "aos";
import WorkRoll from "../components/WorkRoll";

export const WorkPageTemplate = ({
  title,
  subheading,
  headerImage,
  content,
  contentComponent
}) => {
  const PageContent = contentComponent || Content;

  return (
    <div>
      <Hero fullHeight={false} title={title} image={headerImage}></Hero>

      <div className="site-section bg-light">
        <div className="container">
          <div className="row">
            <div
              className="site-section-heading text-center mb-5 w-border col-md-6 mx-auto"
              data-aos="fade-up"
            >
              <h2 className="mb-5">{subheading}</h2>
            </div>
          </div>
          <WorkRoll limit={36}></WorkRoll>
        </div>
      </div>
    </div>
  );
};

WorkPageTemplate.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string,
  contentComponent: PropTypes.func
};

const WorkPage = ({ data }) => {
  const { markdownRemark: post } = data;

  React.useEffect(() => {
    AOS.init({ duration: 800, easing: "slide", once: true });
  }, []);

  return (
    <Layout>
      <WorkPageTemplate
        contentComponent={HTMLContent}
        title={post.frontmatter.title}
        subheading={post.frontmatter.subheading}
        headerImage={post.frontmatter.image}
        content={post.html}
      />
    </Layout>
  );
};

WorkPage.propTypes = {
  data: PropTypes.object.isRequired
};

export default WorkPage;

export const workPageQuery = graphql`
  query WorkPage($id: String!) {
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
      }
    }
  }
`;
