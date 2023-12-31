import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { search } from "../features/search/searchSlice";
import { Link, useNavigate } from "react-router-dom";
import List from "./List";

const Search = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [query, setQuery] = useState("");
  const [dataz, setData] = useState(null);
  const [items, setItems] = useState(null);

  // function onSubmit(e) {
  //   e.preventDefault();
  //   if (query) {
  //     dispatch(search(query)).then((e) => setData(e.payload.items));
  //   } else {
  //     alert("Pls enter search query");
  //   }
  // }
  return (
    <>
      <div className="flex flex-col m-5 justify-center align-middle h-50">
        <div className="flex flex-col  md:flex-row m-5 justify-center align-middle">
          <img
            className="md:w-96 sm:w-50"
            src="https://res.cloudinary.com/dkg89jcmm/image/upload/v1703620192/logo2_c2hjdi.png"
            alt=""
          />
        </div>
        <div className="flex  flex-col md:flex-row m-5 md:m-0 md: justify-center md:gap-8 align-middle">
          <input
            className="rounded-lg h-10 md:w-96"
            type="text"
            name="query"
            id="query"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
          <Link
            className="bg-[#a9bcd7] text-center h-10 p-2 rounded-full hover:bg-[#88a0c2] cursor-pointer m-6 md:w-60 md:m-0"
            to={"/" + query}
          >
            Search
          </Link>
        </div>
      </div>
    </>
  );
};

export default Search;
