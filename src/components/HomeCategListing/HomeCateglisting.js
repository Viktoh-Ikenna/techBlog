import React,{useEffect, useState} from "react";
import "./HomeCategListing.css";
import { NormalPost } from "../postTypes/normalPost/normalPost";
import { GrFormNextLink } from "react-icons/gr";
import { NormalPostV } from "../postTypes/normalPostVertical/NormalPostV";

export const HomeCateglisting = (props) => {
  // console.log(props.posts)
  const [posts, setposts] = useState(null)
 useEffect(()=>{
   if(props.posts) setposts(props.posts[0])

 },[props.posts])
  return (<>
    {posts?
    <div>
      <div className="HomeCateglisting_categName">
        <h4>{props.name ? props.name : "category"}</h4>
      </div>
      <div className="HomeCateglisting_posts">

        <div>
        {props.posts?props.posts.filter((e,i)=>i<5).map((e,i)=>{
          return(
                  <NormalPost key={i} post={e} />
          )
        }):''
          }
        </div>
        <div>
       { posts?
          <NormalPostV post={posts}/>:'empty'}
        </div>
      </div>
      <div className="HomeCateglisting_contBtn">
        <div className="HomeCateglisting_nextBtn">
          next <GrFormNextLink />
        </div>
      </div>
    </div>:''}</>
  );
};
