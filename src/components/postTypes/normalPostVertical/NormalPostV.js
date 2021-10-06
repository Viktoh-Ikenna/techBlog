import React from "react";
import { BiComment } from "react-icons/bi";
import "./NormalPostV.css";
import {
  Link,
  useLocation,
} from "react-router-dom";
import { url } from "../../../baseHost";
export const NormalPostV = (props) => {
  // console.log(props.post)
  return (
<div style={props.style} className="Normal_postV_cont">
        <div className="Normal_postV_cont_image"style={{ 
      backgroundImage: `url("${url}/${props.post.image}")` 
    }} ></div>
        <div className="Normal_postV_text_cont">
          <h2>{props.post.Title}</h2>
          <div className="Normal_postV_cont_date">
            <div>{props.post.Date}</div>
            <div>
              <BiComment />
              200
            </div>
          </div>

          <p>
            {props.post.Article.replace(/<\/?[^>]+(>|$)/g, "").split('').filter((e,i)=>i<50).join('')} 
            ...
          </p>
          <Link to={`/article/${props.post._id}`} className="Normal_postV_morebtn">More ...</Link>
        </div>
      </div>

  );
};
