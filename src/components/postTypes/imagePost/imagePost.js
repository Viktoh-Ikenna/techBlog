import React from "react";
import "./imagePost.css";
import {
  Link,
  useLocation,
} from "react-router-dom";
import { url } from "../../../baseHost";
import Skeleton from "react-loading-skeleton";

export const ImagePost = (props) => {
  return (
      <div style={{width:props.width,height:props.height,fontSize:props.font}} className="outer">
      {props.post? <><div className="inner" style={{ 
      backgroundImage: `url("${url}/${props.post.image}")` 
    }}>
        </div>
        <Link to={`/article/${props.post._id}`} className="text">
          <h3>{props.post.Title}</h3>
          <div>
          {props.post.Article.replace(/<\/?[^>]+(>|$)/g, "").split('').filter((e,i)=>i<50).join('')}
          </div>
        </Link></>:<Skeleton height={'100%'} width={'100%'}/>}
        
      </div>
  );
};
