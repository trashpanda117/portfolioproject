import React from "react";
import ScrollService from "../../../utilities/ScrollService";
import "./Profile.css";
import { TypeAnimation } from 'react-type-animation';

export default function Profile() {
  return (
    <div className="profile-container">
      <div className="profile-parent">
        <div className="profile-details">
          <div className="colz">
            <div className="colz-icon">
                <a href="https://www.linkedin.com/in/robert-nivon-69210720b/">
                    <i className='fa fa-linkedin'></i>
                </a>
            </div>
          </div>
          <div className="profile-details-name">
            <span className="primary-text">
              {" "}
              Hello, I'm <span className="highlighted-text">Robert</span>
            </span>
          </div>
          <div className="profile-details-role">
            <span className="primary-text">
              {" "}
              <h1>
              {" "}
                <TypeAnimation
                    sequence={[
                        'Software Engineer 💻',
                        1000,
                        'Hardworking Developer 📱',
                        1000,
                        'Java Developer 🌐',
                        1000,
                    ]}
                    wrapper="span"
                    speed={50}
                    style={{ fontSize: '1em', display: 'inline-block' }}
                    repeat={Infinity}
                />
              </h1>
            </span>
            <span className="profile-role-tagline">
                Software engineer who enjoys working on 
                enterprise-level software applications.
            </span>
          </div>

          <div className="profile-options">
            <button className="btn primary-btn"
            onClick={() => ScrollService.scrollHandler.scrollToHireMe()}> Hire Me </button>
            <a href="Robert_Nivon_Resume.pdf" download="Robert_Nivon.pdf">
              <button className="btn highlighted-btn">Get Resume</button>
            </a>
          </div>
        </div>
        <div className="profile-picture">
          <div className="profile-picture-background"></div>
        </div>
      </div>
    </div>
  );
}
