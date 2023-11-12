import React from "react";
import "./Hero.css";
import HeroImg from "../../assets/hero.png";
import { RiShoppingBagFill } from "react-icons/ri";
import { BsArrowRight } from "react-icons/bs";
import { motion } from "framer-motion";

const Hero = () => {
  const transition = { duration: 3, type: "spring" };
  return (
    <div className="hero-container">
      <div className="h__sides">
        <span className="text1">skin prodection cream</span>
        <div className="text2">
          <span>terndy collection</span>
          <span>
            Seedily say has suitable disposal and boy.Experince joy man children
            rejoiced.
          </span>
        </div>
      </div>

      <div className="hero-wrapper">
        <motion.div
          initial={{ bottom: "2rem" }}
          whileInView={{ bottom: "0rem" }}
          transition={transition}
          className="blueCircle"
        ></motion.div>
        <motion.img
          transition={transition}
          initial={{ bottom: "-2rem" }}
          whileInView={{ bottom: "0rem" }}
          src={HeroImg}
          alt=""
          width={600}
        />
        <motion.div
          transition={transition}
          initial={{ right: "4%" }}
          whileInView={{ right: "2%" }}
          className="cart2"
        >
          <RiShoppingBagFill />
          <div className="signup">
            <span>Best signup Offers</span>

            <BsArrowRight className="signup-svg" />
          </div>
        </motion.div>
      </div>

      <div className="h__sides">
        <div className="traffic">
          <span>1.5m</span>
          <span>Montnly traffic</span>
        </div>
        <div className="customers">
          <span>100k</span>
          <span>Happy Customers</span>
        </div>
      </div>
    </div>
  );
};

export default Hero;
