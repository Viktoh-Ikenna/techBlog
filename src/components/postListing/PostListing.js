import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Pagination } from "../paginaton/Pagination";
import { NormalPostV } from "../postTypes/normalPostVertical/NormalPostV";
import { Fullscreen } from "../Spinner/fullscreen";
import "./PostListing.css";
export const PostListing = ({ state }) => {
  const params = useParams()
  const [posts,setPosts]=useState(null)
  const [size, setSize] = useState("32%");
  useEffect(() => {
    const w = window.screen.width;
    if (w < 1100 && w > 900) {
      setSize("31%");
    } else if (w < 900 && w > 750) {
      setSize("47%");
    } else if (w < 750 && w > 600) {
      setSize("31%");
    } else if (w < 600) {
      setSize("90%");
    }
  }, []);
  window.onresize = () => {
    const w = window.screen.width;

    if (w < 1100 && w > 900) {
      setSize("31%");
    } else if (w < 900 && w > 750) {
      setSize("47%");
    } else if (w < 750 && w > 600) {
      setSize("31%");
    } else if (w < 600) {
      setSize("90%");
    }
  };
  useEffect(() => {
    setPosts(state?state.reverse().filter((el,page)=>page>(+params.page===1?-1:(+params.page-1)*6)):"")
  }, [params.page,state])
  
  return (
    <div className="post_listing">
      {posts ? (
        posts.map((lement, id) => {
          return <NormalPostV style={{ width: size }} post={lement} key={id} />;
        })
      ) : (
        <Fullscreen />
      )}
      {posts ? state.length > 7 ? <Pagination state={state.reverse().filter((el,page)=>page>(+params.page===1?-1:(+params.page-1)*6)).length} /> : <></> : <></>}
    </div>
  );
};
