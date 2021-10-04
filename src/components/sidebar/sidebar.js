import React from "react";
import { Search } from "../search/search";
import "./sidebar.css";

export const Sidebar = () => {
  return (
    <div className="side_bar">
      <Search />
      <div className="popularPost">
        <h3>popularPost</h3>
        <div>
          <div>i am just testing it out</div>
          <div>i am just testing it out</div>
          <div>i am just testing it out</div>
          <div>i am just testing it out</div>
          <div>i am just testing it out</div>
        </div>
      </div>
      <div
        style={{
          backgroundImage: `url("https://i.pinimg.com/originals/2f/e1/f8/2fe1f88fd7c7e398dee3fa97ab115f30.png")`,
        }}
        className="side_banner"
      ></div>
     
    </div>
  );
};
