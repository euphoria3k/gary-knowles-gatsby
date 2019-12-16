import React from "react";
import PropTypes from "prop-types";
import { IndexPageTemplate } from "../../templates/index-page";

const IndexPagePreview = ({ entry, getAsset }) => {
  const data = entry.getIn(["data"]).toJS();

  if (data) {
    return (
      <IndexPageTemplate
        image={data.image}
        title={data.title}
        subheading={data.subheading}
        contactBox={data.contactBox}
        mainpitch={data.mainpitch}
        services={data.services || { servicesList: [] }}
        testimonials={data.testimonials || { testimonialsList: [] }}
        latestWork={data.latestWork}
      />
    );
  } else {
    return <div>Loading...</div>;
  }
};

IndexPagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func
  }),
  getAsset: PropTypes.func
};

export default IndexPagePreview;
