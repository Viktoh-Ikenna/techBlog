import axios from "axios";
import React, { useEffect, useRef, useState } from "react";
import { connect } from "react-redux";
import { url } from "../../baseHost";
import "./LeaveC.css";
const LeaveC = (props) => {
  const message = useRef();
  const name = useRef();
  const email = useRef();
  const [save,setSave]=useState(0);

  const handleSubmit = (e) => {
    
    animate(e);
};
// console.log(props.postid)
useEffect(()=>{
    (async()=>{
        if(props.comments.name){
            // console.log(props.comments);
            
            const response = await axios.post(
                `${url}/api/save/comments`,
                props.comments
              );
            // console.log(await response.data)
        props.nullIt();
        props.setAnother(Math.random);
        reset()
        }
    })()
    

},[save])

  const animate=(targ)=>{
    const Filldate=new Date();
    const date = `${Filldate.getDate()}-${Filldate.getMonth()+1}-${Filldate.getFullYear()}`;
    targ.target.classList.remove('animate');
        
    targ.target.classList.add('animate');
    
    targ.target.classList.add('animate');
    props.storeComments(message.current.value);
    props.commenter({ name: name.current.value, email: email.current.value,post:props.postid,date });
    setTimeout(function(){
        targ.target.classList.remove('animate');
setSave(save+1)
    },3000);
  }

  const reset=()=>{
    message.current.value='';
    name.current.value="";
    email.current.value="";
  }
  return (
    <div className="leave_comments">
      {/* <div class="wrapper">
        <div className="block">
          <br />
          <button onClick={animate} className="button success">Submit</button>
        </div>
           Success state animation
       <div className="block">
          Error state animation
          <br />
          <button onClick={animate} className="button error">Submit</button>
        </div>
      </div> */}

      <div>
        <textarea ref={message} cols="90" rows="10"></textarea>
        <input ref={name} type="text" placeholder="Name" />
        <input ref={email} type="text" placeholder="Emails Address" />
        <button onClick={handleSubmit} className="button success">Submit</button>
        {/* <div onClick={handleSubmit} className="submit_comment">
          Submit
        </div> */}
      </div>
    </div>
  );
};
const mapStateToProps = (state) => {
  return {
    comments: state.Comments,
  };
};

//this sets the dispatch method props for the dispatching data

const setter = (dispatch) => {
  return {
    storeComments: (message) => {
      dispatch({ type: "comment", payload: message });
    },
    commenter: (user) => {
      dispatch({ type: "commenter", payload: user });
    },
    nullIt: () => {
        dispatch({ type: "null", payload: '' });
      },
  };
};

export default connect(mapStateToProps, setter)(LeaveC);
