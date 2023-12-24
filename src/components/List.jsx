import React from "react";
import { Link } from "react-router-dom";

const List = (props) => {
  return (
    <>
      <div className="head  m-5">
        <div className="right">
          <div className="link m-1 text-xs">{props.link}</div>
          <div className="title">
            <h1 className="cursor-pointer hover:underline visited:bg-[#3a3a67]">
              <Link to={props.formattedUrl}>{props.title}</Link>
            </h1>
          </div>
        </div>
        <p>{props.snippet}</p>
      </div>
    </>
  );
};

export default List;
