import React from "react";
import "./imagePost.css";
import {
  Link,
  useLocation,
} from "react-router-dom";

export const ImagePost = (props) => {
  return (
      <div style={{width:props.width,height:props.height,fontSize:props.font}} className="outer">
       <div className="inner">
        </div>
        <Link to='/article' className="text">
          <h3>i am just trying to know whether it will work</h3>
          <div>
            a kind of still testing this one too to know whethter e go work
          </div>
        </Link>
      </div>
  );
};
