import React from "react";
import "./normalPost.css";
import {BiComment} from 'react-icons/bi'
import {
  Link,
  useLocation,
} from "react-router-dom";
import { url } from "../../../baseHost";
export const NormalPost = (props) => {
  return (
    <Link key={props.post._id} to={`/article/${props.post._id}`} className="Normal_post_cont">
      <div className='Normal_post_cont_image' style={{ 
      backgroundImage: `url("${url}/${props.post.image}")` 
    }}></div>
      <div className='Normal_post_text_cont'>
        <h3>{props.post.Title}</h3>
        <div>
          <div>{props.post.Date}</div>
          <div><BiComment/>200</div>
        </div>
      </div>
    </Link>
  );
};
