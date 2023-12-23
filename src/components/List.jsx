import React from "react";
import { Link } from "react-router-dom";

const List = (props) => {
  return (
    <div>
      <Link to={props.formattedUrl}>{props.title}</Link>
    </div>
  );
};

export default List;
