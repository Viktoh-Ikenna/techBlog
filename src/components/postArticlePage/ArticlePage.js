import React from "react";
import './ArticlePage.css'
import { AiOutlineUser } from "react-icons/ai";
import { MdUpdate } from "react-icons/md";
import { Sidebar } from "../sidebar/sidebar";

export const ArticlePage = () => {
  return (
    <div style={{width:'100%',display:'flex',justifyContent:'center'}}>
    <div className='ArticlePage'>
       
      <div className="article">
        <h1 className="title">This is just about the Game</h1>
        <div className="artice_details">
          <div>
            <AiOutlineUser />
            don-viktoh
          </div>
          <div>
            <MdUpdate />
            jan 15 2021
          </div>
        </div>
        <div>
          Display Kuu A10 delivers a crystal clear display with the 15.6-inch
          FHD IPS screen that offers a resolution of 1920 x 1080 pixels. The
          screen has ultra narrow bezels, which enables the screen to offer
          higher screen-to-body ratio, hence providing vivid visual effects.
          Thanks to the FHD IPS panel, this laptop display offers a 178-degree
          wide-viewing angle, and also support 89% sRGB color gamut, hence,
          ensure that colors and contrast stay accurate no matter where you sit,
          even when viewed at sharp angles. Kuu A10 display also has a 16:9
          aspect ratio which delivers exceptionally detailed and realistic
          visuals. Performance KUU A10 is equipped with Intel Celeron J4125
          processor, a quad-core chipset based on the Gemini Lake platform to
          offer impressive performance.
        </div>
      </div>
      <Sidebar/>
    </div>
    </div>
  );
};
