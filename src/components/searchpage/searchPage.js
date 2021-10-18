import axios from "axios";
import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { useParams } from "react-router-dom";
import { PostListing } from "../postListing/PostListing";
import { Sidebar } from "../sidebar/sidebar";
import { url } from "../../baseHost";
import { ImagePost } from "../postTypes/imagePost/imagePost";

const SearchPages = (props) => {
  const params = useParams();
  const [posts, setPosts] = useState(null);

useEffect(()=>{
  (async()=>{
    const response =axios.get(`${url}/api/save/Blogposts-page`)
// console.log((await response).data.data)
    const filtered =(await response).data.data.filter(el=>el.Title.toLowerCase().match(props.searching.message?props.searching.message:''))
setPosts(filtered)  
})()
},[props.searching])
const filterIt=()=>{
  if(props.posts.all) setPosts(props.posts.all.filter(e=>e.category.match('')))
  console.log(props.posts)
}
  return (
    <div
      style={{
        display: "flex",
        width: "90%",
        margin: "20px auto",
        justifyContent:"space-between"
      }}
    >
      {posts?
          <>
          <PostListing state={posts} />
      <Sidebar />
          </>:<div style={{width:'100%',height:'auto'}}>
          <ImagePost  width="100%" height="200px" font="20px" />
          <ImagePost  width="100%" height="200px" font="20px" />
          <ImagePost  width="100%" height="200px" font="20px" />
          <ImagePost  width="100%" height="200px" font="20px" />
          </div>
      }
      
    </div>
  );
};
const mapStateToProps = (state) => {
  return {
    searching: state.searching,
  };
};

//this sets the dispatch method props for the dispatching data

const setter = (dispatch) => {
  return {
    StorePosts: (posts) => {
      dispatch({ type: "allPost", payload: posts });
    }
  };
};

export default connect(mapStateToProps, setter)(SearchPages);