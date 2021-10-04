import React,{useEffect} from "react";
import "./Allposts.css";
import {GrFormView,GrEdit} from 'react-icons/gr';
import {MdDateRange} from 'react-icons/md';
import { connect } from "react-redux";
import axios from "axios";
import { Link } from "react-router-dom";
import { HaphSpinner } from "../../../components/Spinner/haphSpinner";
import { url } from "../../../baseHost";

const Allposts = (props) => {
useEffect(()=>{
  (async()=>{
const response =axios.get(`${url}/api/save/Blogposts`,{withCredentials:true})
props.StorePosts((await response).data.data)
  })()
},[])

// console.log(props.posts)
  return (
    <div className="Admin_allposts">
      <div className="Admin_allposts_container">
        <h2>All Posts</h2>
        {props.posts.length>0?props.posts.reverse().map((da,i)=>{
          return(<div key={i} className="admin_eachPosts">
          <div>{da.Title}</div>
          <div><span><MdDateRange/></span> {da.Date}</div>
          <div> <span><GrFormView/></span> {da.views||500}</div>
          <Link to={`/admin/editposts/${da._id}`}className="edit_post"><span><GrEdit/></span> edit</Link>
        </div>)}):<HaphSpinner/>}
       
       
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    posts: state.posts,
  };
};

//this sets the dispatch method props for the dispatching data

const setter = (dispatch) => {
  return {
    StorePosts: (posts) => {
      dispatch({ type: "allPosts", payload: posts });
    }
  };
};

export default connect(mapStateToProps, setter)(Allposts);