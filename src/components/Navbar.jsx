import React, { useState, useEffect } from "react";

import { useSelector, useDispatch } from "react-redux";
import { search } from "../features/search/searchSlice";

const Navbar = () => {
  return (
    <>
      <div className="bg-[#7b8cbec8] h-12 flex justify-center items-center">
        <h1 className="text">RogueRadar</h1>
      </div>
    </>
  );
};

export default Navbar;
