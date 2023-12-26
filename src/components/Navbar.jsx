import React, { useState, useEffect } from "react";

import { useSelector, useDispatch } from "react-redux";
import { search } from "../features/search/searchSlice";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <div className="bg-[#7b8cbec8] h-12 flex justify-end px-5 items-center">
        <Link to="/images">
          <h1 className="text">Images</h1>
        </Link>
      </div>
    </>
  );
};

export default Navbar;
