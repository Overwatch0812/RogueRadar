// import React, { useState, useEffect } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { useParams } from "react-router-dom";
// import { search } from "../features/search/searchSlice";
// import List from "./List";

// const Home = () => {
//   const dispatch = useDispatch();
//   const [dataz, setData] = useState([]);
//   const { query } = useParams();
//   const { data, isSuccess, isError, message } = useSelector(
//     (state) => state.search
//   );
//   useEffect(() => {
//     dispatch(search(query)).then((e) => setData(e.payload));
//   }, []);
//   console.log(data);
//   return !data === 0 ? (
//     <>
//       Home:
//       <h1>Done</h1>
//     </>
//   ) : (
//     <>
//       {data.map((list) => {
//         <List {...list} />;
//       })}
//     </>
//   );
// };

// export default Home;
