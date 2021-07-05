import React from "react";
import { HomeCateglisting } from "../../HomeCategListing/HomeCateglisting";
import { ImagePost } from "../../postTypes/imagePost/imagePost";
import { NormalPost } from "../../postTypes/normalPost/normalPost";
import { Sidebar } from "../../sidebar/sidebar";
import "./deskHome.css";



export const DesktopHome = () => {
  return (
    <div>
      <div className="banner_post">
        <div>
          <div>
            <ImagePost width="100%" height="100%" font="20px" />
          </div>
          <div className="banner_post_side m600px">
            <ImagePost width="49.5%" height="49.5%" font="20px" />
            <ImagePost width="49.5%" height="49.5%" font="20px" />
            <ImagePost width="49.5%" height="49.5%" font="20px" />
            <ImagePost width="49.5%" height="49.5%" font="20px" />
          </div>
          <div className="banner_post_side mnot600px">
            <ImagePost width="49.5%" height="49.5%" font="20px" />
            <ImagePost width="49.5%" height="49.5%" font="20px" />
          </div>
        </div>
      </div>
      <div className="banner_post_bottom">
        <ImagePost width="25%" height="100%" font="12px" />
        <ImagePost width="25%" height="100%" font="12px" />
        <ImagePost width="25%" height="100%" font="12px" />
        <ImagePost width="25%" height="100%" font="12px" />
      </div>
      <div className="Desktop_home_body">
        <div className="main_bar">
          <div>
            <HomeCateglisting name="mobile" />
            <HomeCateglisting name="laptops" />
            <HomeCateglisting name="accessories" />
          </div>
        </div>
        <Sidebar />
      </div>
    </div>
  );
};
