import React from "react";
import './pagination.css';
import {CgArrowLongRightE,CgArrowLongLeftE} from 'react-icons/cg'
import {AiOutlineDoubleRight,AiOutlineDoubleLeft} from 'react-icons/ai'
export const Pagination = () => {
  return (
    <div className="pagination">
      <div className="s prev"><CgArrowLongLeftE/></div>
      <ul>
      <li><AiOutlineDoubleLeft/></li>
        ...
        <li className='current_pagination'>2</li>
        <li>4</li>
        <li>3</li>
        ...
        <li><AiOutlineDoubleRight/></li>
        
      </ul>
      <div className="s next"><CgArrowLongRightE/></div>
    </div>
  );
};
