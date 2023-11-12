import React from "react";
import "./Footer.css";
import logo from "../../assets/logo.png";

import { GrLocation } from "react-icons/gr";
import { AiOutlinePhone } from "react-icons/ai";
import { HiOutlineInbox } from "react-icons/hi";
import { BiLogIn } from "react-icons/bi";

import { BsPeople } from "react-icons/bs";

import { PiLink } from "react-icons/pi";

const Footer = () => {
  return (
    <div className="footer">
      <hr />
      <div className="cfooter">
        <div className="clogo">
          <img src={logo} alt="" />
          <span>amazon</span>
        </div>

        <div className="block">
          <div className="fdetail">
            <span>Contact us</span>
            <span className="pngLine">
              <GrLocation className="icon" />
              <span>Iran,karaj,kamalshahr</span>
            </span>
            <span className="pngLine">
              <AiOutlinePhone className="icon" />
              <a href="tel:+989384029498">+989384029498</a>
            </span>
            <span className="pngLine">
              <HiOutlineInbox  className="icon" />
              <a href="mdilto:mehranbasirideveloper@gmail.com">
                Mehranbasirideveloper@gmail.com
              </a>
            </span>
          </div>
        </div>
        <div className="block">
          <div className="fdetail">
            <span>Account</span>
            <span className="pngLine">
              <BiLogIn className="icon" />
              <span>Sign In</span>
            </span>

            
          </div>
        </div>
        <div className="block">
          <div className="fdetail">
            <span>Company</span>
            <span className="pngLine">
              <BsPeople className="icon" />
              
                <p>About us</p>
             
            </span>
          </div>
        </div>
        <div className="block">
          <div className="fdetail">
            <span>Resources</span>
            <span className="pngLine">
              <PiLink className="icon" />
             
              <p>Safety Privacy & Terms</p>
            </span>
          </div>
        </div>
      </div>

      <div className="copyright">
        <span>Copyright @2023 by amazon,Inc.</span>
        <span>All rights reserved</span>
      </div>
    </div>
  );
};

export default Footer;
