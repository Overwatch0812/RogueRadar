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
// const Navbar = () => {
//   const dispatch = useDispatch();
//   const { data, isSuccess, isError, message } = useSelector(
//     (state) => state.search
//   );
//   console.log(data);
//   useEffect(() => {
//     const data1 = dispatch(search());
//   }, []);
//   return <h1 className="text-3xl font-bold underline">Hello world!</h1>;
// };

export default Navbar;
