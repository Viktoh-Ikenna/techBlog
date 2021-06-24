import React from "react";
import "./app.css";
import { Newposts } from "./utils/newpost/Newposts";
import {AiFillDashboard,AiOutlineComment} from 'react-icons/ai'
import {RiArticleFill,RiSettings2Line} from 'react-icons/ri'
import {ImStatsBars} from 'react-icons/im'
import { Allposts } from "./utils/AllPosts/Allposts";
import { Stats } from "./utils/stats/stats";

export const AdminApp = () => {
  console.log(window.innerHeight, window.outerHeight);
  return (
    <div className="adminApp">
      <div className="sideBar">
        <div>
          <div>
            <span><AiFillDashboard/> </span>
            Dashboard
          </div>
          <div>
            <span><RiArticleFill/></span>
            Posts
            <ul>
              <li>All Posts</li>
              <li>New Post</li>
            </ul>
          </div>
          <div>
            <span><ImStatsBars/></span>
            Stats
          </div>
          <div>
            <span ><AiOutlineComment/></span>
           Comments
          </div>
          <div>
            <span ><RiSettings2Line/></span>
            Settings
          </div>
        </div>
      </div>
      <div className="constainer">
        <div className="AdminNav">
          <div className="Adminlogout">logOut</div>
          <div className="profileImg"></div>
        </div>
        <div className="content">
          {/* <Newposts /> */}
          {/* <Allposts/> */}
          <Stats/>
        </div>
      </div>
    </div>
  );
};
