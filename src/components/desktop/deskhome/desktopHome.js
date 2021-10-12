import axios from "axios";
import React, { useEffect } from "react";
import { connect } from "react-redux";
import { url } from "../../../baseHost";
import { HomeCateglisting } from "../../HomeCategListing/HomeCateglisting";
import { ImagePost } from "../../postTypes/imagePost/imagePost";
import { NormalPost } from "../../postTypes/normalPost/normalPost";
import { Sidebar } from "../../sidebar/sidebar";
import "./deskHome.css";



const DesktopHome = (props) => {

  useEffect(()=>{
    
      setTimeout(()=>{
        (async()=>{
        const response =axios.get(`${url}/api/save/Blogposts-page`,{withCredentials:true})
        
        // console.log((await response).data.data)
            props.StorePosts((await response).data.data);
          })()
      },1500)

    
  },[])
  // console.log(props.posts)
  return (
    <div>
      <div className="banner_post">
        <div>
          <div>
          {props.posts.all?props.posts.all.filter((e,i)=>i===(props.posts.all.length-1)).map((e,i)=>{
          return(
            <ImagePost key={i} post={e} width="100%" height="100%" font="20px" />
          )
        }):<ImagePost  width="100%" height="100%" font="20px" />
      }
          </div>
          <div className="banner_post_side m600px">
          {props.posts.all?props.posts.all.filter((e,i)=>i<4).map((e,i)=>{
          return(
            <ImagePost key={i} post={e}  width="49.5%" height="49.5%" font="20px" />
          )
        }):<>
        <ImagePost  width="49.5%" height="49.5%" font="20px" />
        <ImagePost  width="49.5%" height="49.5%" font="20px" />
        <ImagePost  width="49.5%" height="49.5%" font="20px" />
        <ImagePost  width="49.5%" height="49.5%" font="20px" />
        </>
      } 
          </div>
          <div className="banner_post_side mnot600px">
          {props.posts.all?props.posts.all.filter((e,i)=>i<2).map((e,i)=>{
          return(
            <ImagePost key={i} post={e} width="49.5%" height="49.5%" font="20px" />
          )
        }):<>
        <ImagePost width="49.5%" height="49.5%" font="20px" />
        <ImagePost width="49.5%" height="49.5%" font="20px" />
        </>
      } 
          </div>
        </div>
      </div>
      
      <div className="banner_post_bottom">
      {props.posts.all?props.posts.all.filter((e,i)=>i<4).map((e,i)=>{
          return(
            <ImagePost key={i} post={e} width="25%" height="100%" font="12px" />
          )
        }):<>
        <ImagePost width="25%" height="100%" font="12px" />
        <ImagePost width="25%" height="100%" font="12px" />
        <ImagePost width="25%" height="100%" font="12px" />
        <ImagePost width="25%" height="100%" font="12px" />
        </>
      } 
      </div>
      <div className="Desktop_home_body">    
        <div className="main_bar">
          <div>
            {props.posts?<><HomeCateglisting name="mobile" posts={props.posts['mobile']}/>
            <HomeCateglisting name="laptops" posts={props.posts['laptops']} />
            <HomeCateglisting name="accessories" posts={props.posts['accessories']}/></>:''}
          </div>
        </div>
        <Sidebar />
      </div>
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

export default connect(mapStateToProps, setter)(DesktopHome);
