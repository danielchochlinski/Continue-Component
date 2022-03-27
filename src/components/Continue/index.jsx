import React from "react";
import "./Continue.css";
import LinearProgress from "@mui/material/LinearProgress";

const Continue = () => {
  return (
    <div className="container">
      <div className="box">
        <div className="left_grid">
          <h3>Course</h3>
          <h1>
            JavaScript
            <br /> Fundamentals
          </h1>

          <h4>
            View all chapters <i class="arrow right"></i>
          </h4>
        </div>
        <div className="right_grid">
          <div className="chapter_info">
            <h3>CHAPTER 4</h3>
            <div className="progress_bar">
              <div></div>
              <LinearProgress
                style={{
                  margin: "2rem",
                  marginBottom: "0.2rem",
                  width: "15rem",
                  borderRadius: "2rem",
                  height: "0.4rem"
                }}
                value={6}
              />
              <div className="desc">
                <span>6/9 Challenges</span>
              </div>
            </div>
          </div>

          <h1>Callbacks & Closures</h1>
          <button>Continue</button>
        </div>
      </div>
    </div>
  );
};

export default Continue;
