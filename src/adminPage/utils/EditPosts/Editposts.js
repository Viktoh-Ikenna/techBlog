import React, { useState, useEffect, useRef } from "react";
import { ControlledEditor } from "../../editor";
import "./Editpost.css";
import { connect } from "react-redux";
import axios from "axios";
import { CgFormatIndentDecrease } from "react-icons/cg";
import { AiFillFileAdd } from "react-icons/ai";
import { useParams } from "react-router-dom";
import { RiNurseFill } from "react-icons/ri";
import { EditorToolbarWhenFocused } from "../../Editor2";
import { Fullscreen } from "../../../components/Spinner/fullscreen";
import { url } from "../../../baseHost";

export const Editposts = (props) => {
  const Titly = useRef();
  const paprams = useParams();
  const [send, setsend] = useState(0);
  const image = useRef("");
  const [data, setdata] = useState(null);
  const [spinner, setspinner] = useState(false);
  const [im, setimg] = useState(
    "https://upload.wikimedia.org/wikipedia/en/6/69/ImagineCover.jpg"
  );
  const Filldate = new Date();
  const date = `${Filldate.getDate()}-${Filldate.getMonth()+1}-${Filldate.getFullYear()}`;

  const handleEditor = (text) => {
    props.body(text);
  };

  const handleTitle = function (e) {
    props.Title(e.target.value);
  };
  const handlePublish = () => {
    return new Promise((res, rej) => {
      const inp = document.querySelectorAll(".admin_specification label input");
      const major = document.querySelectorAll(".category label input");
      for (let m of major) {
        if (m.checked) {
          props.major(m.getAttribute("cat"));
        }
      }
      for (let i of inp) {
        props.specs(i.getAttribute("name"), i.value);
      }
      const sel = document.querySelectorAll(
        ".admin_specification label select"
      );
      for (let i of sel) {
        props.specs(i.getAttribute("name"), i.value);
      }
      props.Date(date);
      res("hi");
      setsend(send + 1);
    });
  };

  //storing the state to db
  useEffect(() => {
    (async () => {
      try {
        const config = {
          headers: {
            "content-type": "multipart/form-data",
          },
          withCredentials: true,
        };

        let fmd = new FormData();
        fmd.append("Featured", props.SubmitPost.image);
        fmd.append("posts", JSON.stringify(props.SubmitPost));
        if (send > 0 && props.SubmitPost.Title !== "") {
          setspinner(true)
          const response = await axios.post(
            `${url}/api/save/updatePosts/${paprams.id}`,
            fmd,
            config
          );
          const da = await response.data.data;
          window.location.pathname='/admin/allposts'
        }

        // console.log(da);
      } catch (err) {
        // console.log(err);
      }
    })();
  }, [send]);

  useEffect(() => {
    (async () => {
      try {
        // console.log('z',paprams.id)
        const response = axios.get(
          `${url}/api/save/posts/${paprams.id}`,
          { withCredentials: true }
        );
        // console.log('daa',(await response).data.data)
        setdata((await response).data.data);
      } catch (err) {
        console.log("err", err);
      }
    })();
    // setdata(props.posts)
  }, []);

  const handleImgClick = () => {
    image.current.dispatchEvent(
      new MouseEvent("click", {
        bubbles: true,
        cancelable: true,
        clientX: 100,
        clientY: 100,
      })
    );
  };

  const handleimgChange = (e) => {
    const file = e.target.files[0];
    let reader = new FileReader();
    reader.onload = (env) => {
      setimg(`${env.target.result}`);
    };
    reader.readAsDataURL(file);
    props.image(file);
  };

  ///initial data in the edit
  useEffect(() => {
    const major = document.querySelectorAll(".category label input");
    const inp = document.querySelectorAll(".admin_specification label input");
    if (data !== null) {
      props.Title(data.Title);
      props.body(data.Article);
      Titly.current.value = data.Title;
      if (data.image) {
        props.image(data.image);
        setimg(data.image);
      }
    }
    for (let m of major) {
      if (data !== null) {
        if (m.getAttribute("cat") === data.category) {
          m.checked = true;
        }
      }
    }
    for (let i of inp) {
      if (data !== null) {
        if (i.getAttribute("name") === "CPU") {
          i.value = data.SpecialSpec.CPU;
        } else if (i.getAttribute("name") === "Colors") {
          i.value = data.SpecialSpec.Colors;
        } else if (i.getAttribute("name") === "Processor") {
          i.value = data.SpecialSpec.Processor;
        } else if (i.getAttribute("name") === "dimension") {
          i.value = data.SpecialSpec.dimension;
        } else if (i.getAttribute("name") === "weight") {
          i.value = data.SpecialSpec.weight;
        }
      }
    }
    const sel = document.querySelectorAll(
      ".admin_specification label select option"
    );
    for (let i of sel) {
      if (data !== null) {
        if (i.getAttribute("value") === data.SpecialSpec.OS) {
          i.setAttribute("selected", "selected");
        }
      }
    }
  }, [data]);
  // console.log(data);
  return (
    <>
      {data === null ? (
        <Fullscreen />
      ) : (
        <div className="NewPosts">
          <div className="select">
            <div>
              {spinner ? <Fullscreen /> : ""}
              <h3>Post Type</h3>
              <select>
                <option value="0">select</option>
                <option value="mobile">Mobile</option>
                <option value="laptops">laptops</option>
                <option value="Accessories">Accessories</option>
                <option value="techProducts">techProducts</option>
              </select>
            </div>
            <div className="Publish" onClick={(e) => handlePublish()}>
              Publish
            </div>
          </div>
          <div className="form_post">
            <div className="Editor_input">
              <div className="title">
                <h1>Title</h1>
                <input
                  type="text"
                  ref={Titly}
                  placeholder="The Title"
                  onChange={handleTitle}
                />
              </div>
              <div className="Text_Body">
                <EditorToolbarWhenFocused
                  initials={data.Article}
                  editor={handleEditor}
                />
                {/* <ControlledEditor  /> */}
              </div>
              <div className="post-image">
                <input
                  ref={image}
                  onChange={handleimgChange}
                  type="file"
                  style={{ display: "none" }}
                />
                <div
                  className="post_img"
                  style={{ backgroundImage: `url(${im})` }}
                >
                  <div onClick={handleImgClick} className="icon">
                    <AiFillFileAdd />
                  </div>
                </div>
              </div>
            </div>
            <div className="form_options">
              <div className="category">
                <h3>Major category</h3>
                <label>
                  <input type="radio" cat="Mobile" name="category" />
                  Mobile
                </label>
                <label>
                  <input type="radio" cat="Laptops" name="category" />
                  Laptops
                </label>
                <label>
                  <input type="radio" cat="Accessories" name="category" />
                  Accessories
                </label>
                <label>
                  <input type="radio" cat="Parts" name="category" />
                  Parts
                </label>
              </div>
              <div className="admin_specification">
                <h3>Specification</h3>
                <label>
                  <p>OS :</p>
                  <select name="OS">
                  <option value="windows" key="232">
                  windows
                </option>
                <option value="linux" key="444">
                  linux
                </option>
                <option value="mac" key="88">
                  mac
                </option>
                <option value="android" key="668">
                  android
                </option>
                <option value="ios" key="3564">
                  ios
                </option>
                  </select>
                </label>
                <label>
                  <p>Colors :</p>
                  <input type="text" name="Colors" />
                </label>
                <label>
                  <p>CPU :</p>
                  <input type="text" name="CPU" />
                </label>
                <label>
                  <p>Processor :</p>
                  <input type="text" name="Processor" />
                </label>
                <label>
                  <p>dimension :</p>
                  <input type="text" name="dimension" />
                </label>
                <label>
                  <p>weight :</p>
                  <input type="text" name="weight" />
                </label>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
const mapStateToProps = (state) => {
  return {
    SubmitPost: state.SubmitPostReducer,
    posts: state.posts,
  };
};

//this sets the dispatch method props for the dispatching data

const setter = (dispatch) => {
  return {
    body: (body) => {
      dispatch({ type: "body", payload: body });
    },
    Title: (t) => {
      dispatch({ type: "title", payload: t });
    },
    specs: (name, spec) => {
      dispatch({ type: "spec", payload: { name, spec } });
    },
    major: (major) => {
      dispatch({ type: "major", payload: major });
    },
    image: (file) => {
      dispatch({ type: "image", payload: file });
    },
    Date: (date) => {
      dispatch({ type: "date", payload: date });
    },
  };
};

export default connect(mapStateToProps, setter)(Editposts);
