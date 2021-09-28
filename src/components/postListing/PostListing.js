import React, { useState, useEffect } from "react";
import { Pagination } from "../paginaton/Pagination";
import { NormalPostV } from "../postTypes/normalPostVertical/NormalPostV";
import { Fullscreen } from "../Spinner/fullscreen";
import "./PostListing.css";
export const PostListing = ({ state }) => {
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
  // console.log('state',state)
  return (
    <div className="post_listing">
      {state ? (
        state.map((lement, id) => {
          return <NormalPostV style={{ width: size }} post={lement} key={id} />;
        })
      ) : (
        <Fullscreen />
      )}
      {state ? state.length > 9 ? <Pagination /> : <></> : <></>}
    </div>
  );
};
