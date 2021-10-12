import React, { useEffect ,useRef,useState} from "react";
import './ArticlePage.css'
import { AiOutlineUser } from "react-icons/ai";
import { MdUpdate } from "react-icons/md";
import { Sidebar } from "../sidebar/sidebar";
import { LeaveC } from "../LeaveComments/LeaveC";
import { Comments } from "../Comments/Comments";
import axios from "axios";
import { useParams } from "react-router-dom";
import { Markup } from 'react-render-markup';
import { Fullscreen } from "../Spinner/fullscreen";
import { url } from "../../baseHost";


export const ArticlePage = (props) => {
  const params=useParams();
  const [posts, setposts] = useState(null);
  const title = useRef()
  useEffect(()=>{
    (async()=>{
      const response =await axios.get(`${url}/api/save/posts-page/${params.id}`)
     const data=await response.data.data;
     setposts(data)
    })()
  },[]);

  useEffect(()=>{
    document.querySelector('.site_menu').scrollIntoView({behavior: "smooth", block: "end", inline: "nearest"});
  },[]);

  return (

    <div style={{width:'100%',display:'flex',flexDirection:'column',justifyContent:'center',alignItems:'center'}}>
    {
      posts?(
        <div className='ArticlePage'>
       
        <div className="article">
          <h1 ref={title} className="title">{posts.Title}</h1>
          <div className="artice_details">
            <div>
              <AiOutlineUser />
              {posts.Author.name}
            </div>
            <div>
              <MdUpdate />
            {posts.Date}
            </div>
          </div>
          <div className='article_text'>
       <Markup markup={posts.Article} />
          </div>
        </div>
        <Sidebar/>
       
      </div>
      ): <Fullscreen/>
    }
   
    <Comments/>
    <LeaveC/>
    </div>
  );
};
