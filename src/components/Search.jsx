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
      <div className="sm:align-middle flex flex-col m-5  justify-center align-middle h-screen">
        <div className="sm:align-middle img flex flex-col m-5 justify-center align-middle">
          <img
            src="src\assets\loogo.png"
            alt=""
            height={"260px"}
            width={"260px"}
          />
        </div>
        <div className="search flex  flex-col m-5 justify-center align-middle">
          <input
            className="rounded-lg h-8"
            type="text"
            name="query"
            id="query"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
          <Link
            className="bg-[#a9bcd7] text-center h-10 p-2 rounded-full cursor-pointer m-6"
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
