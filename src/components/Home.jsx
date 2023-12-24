import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { search } from "../features/search/searchSlice";
import List from "./List";
import { Link, useNavigate } from "react-router-dom";
import Search from "./Search";

const Home = () => {
  const dispatch = useDispatch();
  const { query } = useParams();
  const [newquery, setNewQuery] = useState(query);
  const { data } = useSelector((state) => state.search);

  useEffect(() => {
    if (query) {
      dispatch(search(query));
    } else {
      alert("Pls enter search query");
    }
  }, [query]);
  return !data ? (
    <>Fetching</>
  ) : (
    <>
      <Search />
      {data.items.map((item) => {
        return <List {...item} />;
      })}
    </>
  );
};

export default Home;
