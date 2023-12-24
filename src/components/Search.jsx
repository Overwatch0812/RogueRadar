import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { search } from "../features/search/searchSlice";
import { Link } from "react-router-dom";
import List from "./List";

const Search = () => {
  const dispatch = useDispatch();
  const [query, setQuery] = useState("");
  const [dataz, setData] = useState(null);
  const [items, setItems] = useState(null);

  function onSubmit(e) {
    e.preventDefault();
    if (query) {
      dispatch(search(query)).then((e) => setData(e.payload.items));
    } else {
      alert("Pls enter search query");
    }
  }
  return !dataz ? (
    <>
      <div className="form flex h-6 justify-center align-middle">
        <form onSubmit={(e) => onSubmit(e)}>
          <input
            className="rounded-full h-10 w-96 hover:bg-[#f1eeee] hover:drop-shadow-md border-red-700"
            type="text"
            name="query"
            id="query"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
          <input
            type="submit"
            value="Search"
            className="cursor-pointer bg-[#3937a6]"
          />
        </form>
      </div>
    </>
  ) : (
    <>
      <div className="form flex h-6 justify-center align-middle">
        <form onSubmit={(e) => onSubmit(e)}>
          <input
            className="rounded-full h-10 w-10 hover:bg-[#f1eeee] hover:drop-shadow-md border-red-700 px-3 lg:w-20"
            type="text"
            name="query"
            id="query"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
          <input
            type="submit"
            value="Search"
            className="cursor-pointer bg-[#3937a6]"
          />
        </form>
      </div>
      {dataz.map((data, i) => {
        return (
          <div className="card">
            <List {...data} key={i} />
          </div>
        );
      })}
    </>
  );
};

export default Search;
