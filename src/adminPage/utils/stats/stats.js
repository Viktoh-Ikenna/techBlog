import React from "react";
import "./stats.css";

export const Stats = () => {
  return (
    <div className="stats">
      <div className="stats_container">
        <div className="daily_stats">
          <div className="stats_size">
            <span>10000</span>
            <span>9000</span>
            <span>8000</span>
            <span>7000</span>
            <span>6000</span>
            <span>5000</span>
            <span>4000</span>
            <span>3000</span>
            <span>2000</span>
            <span>1000</span>
          </div>
          <div style={{ height: "10%" }}>
            <div>1000</div>
            <div>01</div>
          </div>
          <div style={{ height: "20%" }}>
            <div>2000</div>
            <div>02</div>
          </div>
          <div style={{ height: "5%" }}>
            <div>500</div>
            <div>03</div>
          </div>
          <div style={{ height: "50%" }}>
            <div>5000</div>
            <div>04</div>
          </div>
          <div style={{ height: "30%" }}>
            <div>3000</div>
            <div>05</div>
          </div>
          <div style={{ height: "90%" }}>
            <div>9000</div>
            <div>05</div>
          </div>
          <div style={{ height: "25%" }}>
            <div>2500</div>
            <div>07</div>
          </div>
        </div>
        <div className="quater">
          <div className="yearly">
            <select>
              <option value="">2019</option>
              <option value="">2019</option>
              <option value="">2019</option>
            </select>
            <div>1,200,000</div>
          </div>
          <div className="monthly">
            <select>
              <option value="">jan</option>
              <option value="">feb</option>
              <option value="">march</option>
              <option value="">april</option>
              <option value="">may</option>
            </select>
            <div>50000</div>
          </div>
        </div>
      </div>
    </div>
  );
};
