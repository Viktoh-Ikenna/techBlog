import React from "react";
import "./normalPost.css";
import {BiComment} from 'react-icons/bi'
import {
  Link,
  useLocation,
} from "react-router-dom";
export const NormalPost = () => {
  return (
    <Link to='/article' className="Normal_post_cont">
      <div className='Normal_post_cont_image'></div>
      <div className='Normal_post_text_cont'>
        <h3>am just testing out to know whatsup</h3>
        <div>
          <div>12-06-2021</div>
          <div><BiComment/>200</div>
        </div>
      </div>
    </Link>
  );
};
