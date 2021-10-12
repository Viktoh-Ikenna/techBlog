import React, { useState, useRef, useEffect } from "react";
import "./app.css";
import Newposts from "./utils/newpost/Newposts";
import Editposts from "./utils/EditPosts/Editposts";

import Allposts  from "./utils/AllPosts/Allposts";
import { Stats } from "./utils/stats/stats";
import { Comments } from "./utils/comments/comments";
import { Settins } from "./utils/settings/settins";
import { Dash } from "./utils/Dash/dash";
import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";
import { CgSidebarRight } from "react-icons/cg";
import { SideContents } from "./utils/SideContents";
import { RiEyeCloseLine, RiEyeLine } from "react-icons/ri";
import axios from "axios";
import { connect } from "react-redux";
import { Fullscreen } from "../components/Spinner/fullscreen";
import { url } from "../baseHost";
var slugify = require("slugify");



const AdminApp = (props) => {
  const [toggle, setToggle] = useState(false);
  const [showPass, setShowPass] = useState(false);
  const [Spinin, setSpining] = useState(false)
  const [background, setprofileImg] = useState(
    "https://upload.wikimedia.org/wikipedia/en/6/69/ImagineCover.jpg"
  );
  const [loggedin, setLoggen] = useState(0);
  const profile = useRef();

  const password = useRef();
  const username = useRef();

  // useEffect(() => {
  //   setLoggen(props.Login.state);
  // }, [props.Login.state]);
  useEffect(() => {
    axios
      .get(`${url}/admin`,{headers: {
        token: localStorage.getItem('token'),
      }})
      .then((data) => {
        console.log(data.data)
        props.user(data.data)
        if(data.data.state){
          if(window.location.pathname==="/admin-login"){
            console.log('hiiqfwfq')
            window.location.pathname="/admin"
          }
        }else{
          setSpining(false)
        }
      });
      
  }, [loggedin]);

  useEffect(() => {
    if (props.Login.data !== undefined) {
      setprofileImg(
        `${url}/${
          props.Login.data.image.split("/")[0]
        }/${slugify(`${props.Login.data.image.split("/")[1]}`, {
          replacement: "%20",
          remove: false, // remove characters that match regex, defaults to `undefined`
          locale: "vi", // language code of the locale to use
        })}`
      );
    }
  }, [props.Login]);
  const handleSubmit = () => {
    (async () => {
setSpining(true)
      const apiData = await fetch(`${url}/admin-login`, {
        method: "POST",
        body: JSON.stringify({
          name: username.current.value,
          password: password.current.value,
        }),
        credentials: "include", // added this part
        headers: {
          "Content-Type": "application/json",
          
        },
      });
      setLoggen(loggedin+1)
    const token =await apiData.json();
    // console.log(token)
    // console.log(token.token)
    localStorage.setItem('token',token.token)
    })();
  };
  const handleToggle = () => {
    if (!toggle) {
      setTimeout(() => {
        document.querySelector(".sideBar").classList.add("ttoggle_admin");
      }, 390);
    } else {
      document.querySelector(".sideBar").classList.remove("ttoggle_admin");
    }
    setToggle(!toggle);
  };

  const changeProfileImg = () => {
    profile.current.dispatchEvent(
      new MouseEvent("click", {
        bubbles: true,
        cancelable: true,
        clientX: 100,
        clientY: 100,
      })
    );
  };

  const handleSelectProfile = (e) => {
    let pix = new FormData();
    pix.append("profile", e.target.files[0]);

    const config = {
      headers: {
        "content-type": "multipart/form-data",
      },
      withCredentials: true,
    };
    axios.post(`${url}/admin-profile`, pix, config);
  };

  return (
    <Router>
      <Route path="/admin">
        {props.Login.state===false? (
          <Redirect to="/admin-login" />
        ) :<>{props.Login.state===true?(
          <div className="adminApp">
            <div
              className="sideBar"
              style={{ width: `${toggle ? "7%" : "22%"}` }}
            >
              <div className="toggle_admin">
                <span onClick={handleToggle}>
                  <CgSidebarRight />
                </span>
              </div>
              <SideContents />
            </div>
            <div
              className="constainer"
              style={{ width: `${toggle ? "93%" : "78%"}` }}
            >
              <div className="AdminNav">
                <div className="Adminlogout">logOut</div>
                <div
                  className="profileImg"
                  onClick={changeProfileImg}
                  style={{ backgroundImage: `url(${background})` }}
                ></div>
                <input
                  onChange={handleSelectProfile}
                  type="file"
                  ref={profile}
                  id="profile_file"
                  style={{ display: "none" }}
                />
              </div>
              <div className="content">
                <Route exact path="/admin">
                  <Dash />
                </Route>
                <Route path="/admin/newpost">
                  <Newposts />
                </Route>
                <Route path="/admin/editposts/:id">
                  <Editposts />
                </Route>
                <Route path="/admin/settings">
                  <Settins />
                </Route>
                <Route path="/admin/comments">
                  <Comments />
                </Route>
                <Route path="/admin/stats">
                  <Stats />
                </Route>
                <Route path="/admin/allposts">
                  <Allposts />
                </Route>
              </div>
            </div>
          </div>
        ):<Fullscreen/>} </>}
      </Route>
      <Route path="/admin-login">
        {props.Login.state===false?(<div className="admin_login">
        {Spinin?<Fullscreen/>:''}
          <div className="login_bal">
            
            <div></div>
            <div>
              <p>username</p>
              <div>
                <input ref={username} type="text" />
              </div>
            </div>
            <div>
              <p>password</p>
              <div>
                <input
                  ref={password}
                  type={showPass === true ? "text" : "password"}
                />
                <span onClick={() => setShowPass(!showPass)}>
                  {showPass ? <RiEyeLine /> : <RiEyeCloseLine />}
                </span>
              </div>
            </div>
            <div className="submit_cont">
              <label>
                <input type="checkbox" />
                <span>Remember me</span>
              </label>
              <button onClick={handleSubmit}>Login</button>
            </div>
          </div>
        </div>):<Redirect to="/admin" />}
      </Route>
    </Router>
  );
};
const mapStateToProps = (state) => {
  return {
    Login: state.Admin,
  };
};

//this sets the dispatch method props for the dispatching data

const setter = (dispatch) => {
  return {
    user: (body) => {
      dispatch({ type: "user", payload: body });
    },
    // Title: (t) => {
    //   dispatch({ type: "title", payload: t });
    // },
    // specs: (name, spec) => {
    //   dispatch({ type: "spec", payload: { name, spec } });
    // },
    // major: (major) => {
    //   dispatch({ type: "major", payload: major });
    // },
  };
};

export default connect(mapStateToProps, setter)(AdminApp);
