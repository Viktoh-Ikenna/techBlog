import React from "react";
import './pagination.css';
import {CgArrowLongRightE,CgArrowLongLeftE} from 'react-icons/cg'
import {AiOutlineDoubleRight,AiOutlineDoubleLeft} from 'react-icons/ai'
import { Link, useParams } from "react-router-dom";

export const Pagination = ({state}) => {
  console.log(state)
 const params= useParams()
  return (
    <div className="pagination">
      {+params.page>1?<Link className="s next" to={`/posts/${params.id}/${+params.page-1}`}><CgArrowLongLeftE/></Link>:<div className="s next"><CgArrowLongLeftE/></div>}
      <ul>
      {+params.page>2?<Link to={`/posts/${params.id}/${+params.page-2}`}><AiOutlineDoubleLeft/></Link>:<li><AiOutlineDoubleLeft/></li>}
        ...
        {+params.page>1&&<Link to={`/posts/${params.id}/${+params.page-1}`}>{+params.page-1}</Link>}
        <Link className='current_pagination'>{params.page}</Link>
        <Link to={`/posts/${params.id}/${+params.page+1}`}>{+params.page+1}</Link>
        <Link to={`/posts/${params.id}/${+params.page+2}`}>{+params.page+2}</Link>
        ...
      {state>14?<Link to={`/posts/${params.id}/${+params.page-1}`}><AiOutlineDoubleRight/></Link>:<li className=""><AiOutlineDoubleRight/></li>}

        
        
      </ul>
      {state>7?<Link className="s next" to={`/posts/${params.id}/${+params.page+1}`}><CgArrowLongRightE/></Link>:<div className="s next"><CgArrowLongRightE/></div>}

    </div>
  );
};
