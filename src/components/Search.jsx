import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { search } from "../features/search/searchSlice";
import { Link } from "react-router-dom";

const Search = () => {
  const dispatch = useDispatch();
  const [query, setQuery] = useState("");
  const [data, setData] = useState(null);

  function onSubmit(e) {
    e.preventDefault();
    dispatch(search(query)).then((e) => {
      setData(e.payload);
    });
  }
  return (
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
  );
};

export default Search;
