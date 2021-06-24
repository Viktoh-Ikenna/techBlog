import React from "react";
import "./HomeCategListing.css";
import { NormalPost } from "../postTypes/normalPost/normalPost";
import { GrFormNextLink } from "react-icons/gr";
import { NormalPostV } from "../postTypes/normalPostVertical/NormalPostV";

export const HomeCateglisting = (props) => {
  return (
    <div>
      <div className="HomeCateglisting_categName">
        <h4>{props.name ? props.name : "category"}</h4>
      </div>
      <div className="HomeCateglisting_posts">
        <div>
          <NormalPost />
          <NormalPost />
          <NormalPost />
          <NormalPost />
        </div>
        <div>
          <NormalPostV />
        </div>
      </div>
      <div className="HomeCateglisting_contBtn">
        <div className="HomeCateglisting_nextBtn">
          next <GrFormNextLink />
        </div>
      </div>
    </div>
  );
};
