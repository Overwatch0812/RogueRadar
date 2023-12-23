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
      <form onSubmit={(e) => onSubmit(e)}>
        <input
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
    </>
  ) : (
    <>
      <form onSubmit={(e) => onSubmit(e)}>
        <input
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

      {dataz.map((data, i) => {
        return <List {...data} key={i} />;
      })}
    </>
  );
};

export default Search;
