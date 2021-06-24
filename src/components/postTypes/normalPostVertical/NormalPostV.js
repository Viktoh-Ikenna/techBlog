import React from "react";
import { BiComment } from "react-icons/bi";
import "./NormalPostV.css";

export const NormalPostV = (props) => {
  return (

      <div style={props.style} className="Normal_postV_cont">
        <div className="Normal_postV_cont_image"></div>
        <div className="Normal_postV_text_cont">
          <h2>am just testing out to know whatsup</h2>
          <div className="Normal_postV_cont_date">
            <div>12-06-2021</div>
            <div>
              <BiComment />
              200
            </div>
          </div>

          <p>
            I is very great viewing this page like this, lets just start testing
            out some of the components here, and this will be very great though,
            just trying to make the content to full
          </p>
          <div className="Normal_postV_morebtn">More ...</div>
        </div>
      </div>
  
  );
};
