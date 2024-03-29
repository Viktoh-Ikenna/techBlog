import React, { useEffect, useState } from "react";
import { MdKeyboardArrowDown } from "react-icons/md";
import { RiSearch2Line } from "react-icons/ri";
import { GrClose } from "react-icons/gr";
import { BsDash } from "react-icons/bs";
import "./deskNav.css";
import { Link } from "react-router-dom";
import {SideBar} from '../mobile/SideBar'
import { connect } from "react-redux";

const DeskNav = (props) => {
  const [search, SetSearch] = useState(false);
  const [textInput, setText] = useState(false);
  const [animate, setAnime] = useState({});
  const [toggle, setToggle] = useState(false);
  const [change, setChange] = useState(false);

useEffect(() => {
  if(window.location.pathname === '/search'){
SetSearch(true);
setTimeout(() => {
  if(window.screen.width>600) setAnime({ width: "60%" });
  document.querySelector('.space').style.width='20%';
  setAnime({ width: "75%" });
}, 0);
  }
}, [])


  const handleSearch = () => {
    SetSearch(!search);
    setTimeout(() => {
      if(window.screen.width>600) setAnime({ width: "60%" });
      document.querySelector('.space').style.width='20%';
      setAnime({ width: "75%" });
    }, 0);
  };
  const handleText = (e) => {
    if (e.target.value !== "") {
      setText(true);
    props.search(e.target.value)
    } else {
      setText(false);
    props.search(e.target.value)
    }
  };
  const mobileToggle=()=>{
    setToggle(!toggle);
    setTimeout(() => {
      setChange(!change)
    }, 6);
  }


  return (
    <div>
        {toggle?<SideBar change={change}/>:''}
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
        <div>
          <Link to="/" style={{ color: "white" }}>
            Logo
          </Link>
        </div>
        <div className="space"></div>
        {!search ? (
          <>
            {" "}
            <div className="categories">
            <Link to="/posts/mobile/1">Mobile</Link>
              <Link to="/posts/laptops/1">Laptops</Link>
              <div>
                gadgets <MdKeyboardArrowDown />
                <ul className="submenu">
                  <Link to="/posts/laptops/1">android</Link>
                  <Link to="/posts/laptops/1">chargers</Link>
                  <Link to="/posts/laptops/1">protable</Link>
                  <Link to="/posts/laptops/1">earPhones</Link>
                </ul>
              </div>
              <Link to="/posts/laptops/1">Laptops</Link>
              <Link to="/posts/accessories/1">accessories</Link>

            </div>
            {window.location.pathname !== '/search'?<Link to='/search' className="search_btn" onClick={handleSearch}>
              <RiSearch2Line />
            </Link>:<div className="search_btn" onClick={handleSearch}>
              <RiSearch2Line />
            </div>}
            <div className={`nav_toggle_menu ${toggle?'toggle_it':''}`} onClick={mobileToggle}>
              <div></div>
            </div>
          </>
        ) : (
          <div style={animate} className="nav_searchBox">
            <input
              onKeyUp={handleText}
              type="text"
              placeholder="Search for anything by name"
            />
            {textInput ? (
              <span
                onClick={() => {
                  document.querySelector(".nav_searchBox input").value = "";
                  props.search('')
                  setText(!textInput);
                }}
              >
                <GrClose />
              </span>
            ) : (
              <></>
            )}
            <span
              onClick={() => {
                setAnime({ width: "20%" });
                setTimeout(() => {
                  SetSearch(!search);
                  window.screen.width<600?
                  document.querySelector('.space').style.width='55%':document.querySelector('.space').style.width='30%';
                }, 350);
              }}
            >
              <BsDash />
            </span>
          </div>
        )}
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
    search: (search) => {
      dispatch({ type: "search", payload: search });
    }
  };
};

export default connect(mapStateToProps, setter)(DeskNav);
