import React from "react";
import { ControlledEditor } from "../../editor";
import "./Newposts.css";

export const Newposts = () => {
  return (
    <div className="NewPosts">
      <div className="select">
          <div>
        <h3>Post Type</h3>
        <select>
          <option value="0">select</option>
          <option value="mobile">Mobile</option>
          <option value="laptops">laptops</option>
          <option value="Accessories">Accessories</option>
          <option value="techProducts">techProducts</option>
        </select>
        </div>
        <div className="Publish">
            Publish
        </div>
      </div>
      <div className="title">
        <h1>Title</h1>
        <input type="text" placeholder="The Title" />
      </div>
      <div className="Text_Body">
       <ControlledEditor/>
      </div>

      <div className="category">
        <h3>Major category</h3>
        <label>
          <input type="radio" />
          Mobile
        </label>
        <label>
          <input type="radio" />
          Laptops
        </label>
        <label>
          <input type="radio" />
          Accessories
        </label>
        <label>
          <input type="radio" />
          Parts
        </label>
      </div>
    </div>
  );
};
