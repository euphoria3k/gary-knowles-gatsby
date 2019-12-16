import React from "react";
import PropTypes from "prop-types";
import { WorkItemTemplate } from "../../templates/work-item";

const WorkItemPreview = ({ entry, widgetFor }) => (
  <WorkItemTemplate
    content={widgetFor("body")}
    description={entry.getIn(["data", "description"])}
    title={entry.getIn(["data", "title"])}
  />
);

WorkItemPreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func
  }),
  widgetFor: PropTypes.func
};

export default WorkItemPreview;
