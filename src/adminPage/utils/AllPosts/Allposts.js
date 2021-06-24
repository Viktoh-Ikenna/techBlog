import React from "react";
import "./Allposts.css";
import {GrFormView,GrEdit} from 'react-icons/gr';
import {MdDateRange} from 'react-icons/md'

export const Allposts = () => {
  return (
    <div className="Admin_allposts">
      <div className="Admin_allposts_container">
        <h2>All Posts</h2>
        <div className="admin_eachPosts">
          <div>the quenching fire on the mountain</div>
          <div><span><MdDateRange/></span> 12-9-2019</div>
          <div> <span><GrFormView/></span> 2900</div>
          <div className="edit_post"><span><GrEdit/></span> edit</div>
        </div>
      </div>
    </div>
  );
};
