import React from "react";
import { NormalPostV } from "../postTypes/normalPostVertical/NormalPostV";
import "./PostListing.css";
export const PostListing = () => {
  return (

    <div className="post_listing">
      <NormalPostV style={{ width: "32%" }} />
      <NormalPostV style={{ width: "32%" }} />
      <NormalPostV style={{ width: "32%" }} />
      <NormalPostV style={{ width: "32%" }} />
      <NormalPostV style={{ width: "32%" }} />
      <NormalPostV style={{ width: "32%" }} />
      <NormalPostV style={{ width: "32%" }} />
      <NormalPostV style={{ width: "32%" }} />
      <NormalPostV style={{ width: "32%" }} />
      <NormalPostV style={{ width: "32%" }} />
      <NormalPostV style={{ width: "32%" }} />
      <NormalPostV style={{ width: "32%" }} />
      <NormalPostV style={{ width: "32%" }} />
      <NormalPostV style={{ width: "32%" }} />
      <NormalPostV style={{ width: "32%" }} />
      <div className="pagination">
          <div className="s prev">Prev</div>
<ul>
    <li>1</li>
    <li>2</li>
    <li>3</li>
    <li>3</li>
    <li>4</li>
    <li>5</li>

</ul>
<div className="s next">Next</div>
      </div>
    </div>
   
  );
};
