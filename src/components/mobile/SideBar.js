import React, { useState } from "react";
import "./sideBar.css";
import { MdKeyboardArrowDown } from "react-icons/md";
import { RiSearch2Line } from "react-icons/ri";

export const SideBar = (props) => {
  const [Toglle, setToglle] = useState(false);
  const handletoggle = (e) => {
    if (e.target.dataset.role === "sub_Parent") {
      setToglle(!Toglle);
      if(Toglle){
        e.target.querySelector("ul").style.display='block'
        setTimeout(() => {
        e.target.querySelector("ul").classList.add("m_menu_display")
        }, 0);
      }else{
        e.target.querySelector("ul").classList.remove("m_menu_display");
        setTimeout(() => {
          e.target.querySelector("ul").style.display='none'
        
        }, 0);
      }
      
    }
  };
  return (
    <div className="m_side">
      <div className={`mobile_menus_nav ${props.change?'anime_m_side':''}`}>
        <div>
          <div onClick={handletoggle} data-role="sub_Parent">
            Mobile <MdKeyboardArrowDown />
            <ul className="Msubmenu ">
              <li>android</li>
              <li>iphones</li>
              <li>protable</li>
              <li>google pixes</li>
            </ul>
          </div>
          <div>Laptops</div>
          <div onClick={handletoggle} data-role="sub_Parent">
            gadgets <MdKeyboardArrowDown />
            <ul className="Msubmenu">
              <li>android</li>
              <li>chargers</li>
              <li>protable</li>
              <li>earPhones</li>
            </ul>
          </div>
          <div>accessories</div>
          <div>others</div>
        </div>
      </div>
    </div>
  );
};
