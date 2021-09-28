import React from 'react';
import {
    Link,
    useHistory
  } from "react-router-dom";
import { AiFillDashboard, AiOutlineComment } from "react-icons/ai";
import { RiArticleFill, RiSettings2Line } from "react-icons/ri";
import { ImStatsBars } from "react-icons/im";

export const SideContents = () => {
const history=useHistory();

    const pushIt=(url)=>{
        try{
            history.push(url)
        }
        catch(err){
console.log(err);
        }
}

    return (

        <div>
          <Link to='/admin/'>
            <span>
              <AiFillDashboard />{" "}
            <p>Dashboard</p>
            </span>
          </Link>
          <a>
            <span>
              <RiArticleFill />
            <p>Posts</p>
            </span>
            <ul>
              <li onClick={()=>pushIt("/admin/allposts")}>All Posts</li>
              <li onClick={()=>pushIt("/admin/newpost")}>New Post</li>
            </ul>
          </a>
          <Link to='/admin/stats'>
            <span>
              <ImStatsBars />
              <p>Stats</p>
            </span>
            
          </Link>
          <Link to='/admin/comments'>
            <span>
              <AiOutlineComment />
            <p>Comments</p>
            </span>
          </Link>
          <Link to='/admin/settings'>
            <span>
              <RiSettings2Line />
            <p>Settings</p>
            </span>
          </Link>
        </div>
    )
}
