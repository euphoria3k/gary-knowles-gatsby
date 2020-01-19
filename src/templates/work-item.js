import React from "react";
import PropTypes from "prop-types";
import Helmet from "react-helmet";
import { graphql, Link } from "gatsby";
import Layout from "../components/Layout";
import Content, { HTMLContent } from "../components/Content";
import Hero from "../components/Hero";
import WorkRoll from "../components/WorkRoll";
import Gallery from "../components/Gallery";
import AOS from "aos";

export const WorkItemTemplate = ({
  content,
  contentComponent,
  description,
  title,
  helmet,
  featuredimage,
  images
}) => {
  const PageContent = contentComponent || Content;

  return (
    <div>
      <Hero fullHeight={true} title={title} image={featuredimage}></Hero>
      <div className="container">
        <div className="featured-message d-flex">
          <div className="text text-center">
            <h2>{description}</h2>
            <div className="mb-5">
              <PageContent className="content" content={content} />
            </div>
            <Gallery
              images={images.map(img => {
                return {
                  src: img.name.childImageSharp.large.src,
                  thumbnail: img.name.childImageSharp.small.src,
                  caption: img.description
                };
              })}
            />
          </div>
        </div>
      </div>
      <div className="site-section bg-light">
        <div className="container">
          <div className="row">
            <div className="site-section-heading text-center mb-5 w-border col-md-6 mx-auto">
              <h2 className="mb-5">Latest work</h2>
              <p>Take a look at some of our latest completed kitchens.</p>
            </div>
          </div>
          <WorkRoll></WorkRoll>
          <div
            className="col-md-12 text-center mt-5 aos-init aos-animate"
            data-aos="fade-up"
          >
            <Link to="/work" className="btn btn-dark px-5 py-3">
              See more of our work
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

WorkItemTemplate.propTypes = {
  content: PropTypes.node.isRequired,
  contentComponent: PropTypes.func,
  description: PropTypes.string,
  title: PropTypes.string,
  helmet: PropTypes.object
};

const WorkItem = ({ data }) => {
  const { markdownRemark: post } = data;

  React.useEffect(() => {
    AOS.init({ duration: 800, easing: "slide", once: true });
  }, []);

  return (
    <Layout>
      <WorkItemTemplate
        content={post.html}
        contentComponent={HTMLContent}
        description={post.frontmatter.description}
        helmet={
          <Helmet titleTemplate="%s | Blog">
            <title>{`${post.frontmatter.title}`}</title>
            <meta
              name="description"
              content={`${post.frontmatter.description}`}
            />
          </Helmet>
        }
        title={post.frontmatter.title}
        featuredimage={post.frontmatter.featuredimage}
        images={post.frontmatter.images}
      />
    </Layout>
  );
};

WorkItem.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.object
  })
};

export default WorkItem;

export const pageQuery = graphql`
  query WorkItemByID($id: String!) {
    markdownRemark(id: { eq: $id }) {
      id
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        title
        description
        featuredimage {
          childImageSharp {
            fluid(maxWidth: 2048, quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        images {
          name {
            childImageSharp {
              large: fluid(maxWidth: 2048, quality: 100) {
                ...GatsbyImageSharpFluid
              }
              small: fluid(maxWidth: 500, quality: 100) {
                ...GatsbyImageSharpFluid
              }
            }
          }
          description
        }
      }
    }
  }
`;
