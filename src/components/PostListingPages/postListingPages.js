import React from "react";
import { PostListing } from "../postListing/PostListing";
import { Sidebar } from "../sidebar/sidebar";

export const PostListingPages = () => {
  return (
    <div
      style={{
        display: "flex",
        width: "90%",
        margin: "20px auto",
        border: "1px solid red",
        justifyContent:"space-between"
      }}
    >
      <PostListing />
      <Sidebar />
    </div>
  );
};
