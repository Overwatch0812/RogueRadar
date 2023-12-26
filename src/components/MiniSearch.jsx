import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { search } from "../features/search/searchSlice";
import { Link, useNavigate } from "react-router-dom";
import List from "./List";

const MiniSearch = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [query, setQuery] = useState("");
  const [dataz, setData] = useState(null);
  const [items, setItems] = useState(null);

  // function onSubmit(e) {
  //   e.preventDefault();
  //   if (query) {
  //     dispatch(MiniSearch(query)).then((e) => setData(e.payload.items));
  //   } else {
  //     alert("Pls enter MiniSearch query");
  //   }
  // }
  return (
    <>
      <div className="flex justify-center flex-col">
        <div className="flex flex-row justify-center align-middle">
          <img
            className="m-5 w-44 "
            src="https://res.cloudinary.com/dkg89jcmm/image/upload/v1703620192/logo2_c2hjdi.png"
            alt=""
          />
        </div>
        <div className="flex flex-col justify-center align-middle">
          <input
            className=" w-56 self-center h-8 rounded-lg mx-10"
            type="text"
            name="query"
            id="query"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
          <Link
            className=" w-48 self-center bg-[#a9bcd7] text-center h-8 p-1 rounded-full hover:bg-[#88a0c2] cursor-pointer m-6 md:w-60 md:m-0"
            to={"/" + query}
          >
            MiniSearch
          </Link>
        </div>
      </div>
    </>
  );
};

export default MiniSearch;
