import axios from "axios";
import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { useParams } from "react-router-dom";
import { PostListing } from "../postListing/PostListing";
import { Sidebar } from "../sidebar/sidebar";
import { url } from "../../baseHost";
const PostListingPages = (props) => {
  const params = useParams();
  const [posts, setPosts] = useState(null);

useEffect(()=>{
  (async()=>{
    const response =axios.get(`${url}/api/save/Blogposts-page`)
// console.log((await response).data.data)
    props.StorePosts((await response).data.data);
    filterIt()
  })()
},[])
const filterIt=()=>{
  if(props.posts.all) setPosts(props.posts.all.filter(e=>e.category===params.id))
}
// console.log('gen',props.posts[`${params.id}`])
  return (
    <div
      style={{
        display: "flex",
        width: "90%",
        margin: "20px auto",
        justifyContent:"space-between"
      }}
    >
      
      <PostListing state={props.posts[params.id]} />
      <Sidebar />
    </div>
  );
};
const mapStateToProps = (state) => {
  return {
    posts: state.Client,
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

export default connect(mapStateToProps, setter)(PostListingPages);