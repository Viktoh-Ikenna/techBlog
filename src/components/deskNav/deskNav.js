import React from "react";
import { MdKeyboardArrowDown } from "react-icons/md";
import {RiSearch2Line} from 'react-icons/ri'
import "./deskNav.css";

const DeskNav = () => {
  return (
    <div>
      <div className="site_menu">
        <div className="site_menu_div">
          <div>Home</div>
          <div>About Us</div>
          <div>Contact Us</div>
        </div>
        <div>
          <div>fb</div>
          <div>yt</div>
          <div>tw</div>
          <div>ig</div>
        </div>
      </div>
      <div className="category_menu">
        <div>Logo</div>
        <div style={{width:'30%'}}></div>
        <div className="categories">
          <div>Mobile <MdKeyboardArrowDown/>
          <ul className="submenu">
                  <li>android</li>
                  <li>iphones</li>
                  <li>protable</li>
                  <li>google pixes</li>
              </ul>
          </div>
          <div>Laptops</div>
          <div>gadgets <MdKeyboardArrowDown/>
          <ul className="submenu">
                  <li>android</li>
                  <li>chargers</li>
                  <li>protable</li>
                  <li>earPhones</li>
              </ul>
          </div>
          <div>accessories</div>
          <div>others</div>
        </div>
        <div className='search_btn'>
<RiSearch2Line/>
        </div>
      </div>
    </div>
  );
};

export default DeskNav;
