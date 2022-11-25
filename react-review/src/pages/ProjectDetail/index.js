import React from "react";
import { useLocation } from "react-router-dom";
import { HashLink as Link } from 'react-router-hash-link';
import styled,{css} from "styled-components";
import { motion } from "framer-motion"
import './ProjectDetail.scss'


const ProjectDetail = (props)=> {
  const location = useLocation();
  const state = location.state;

  const blackBox = {
    initial: {
      opacity: 1,
      backgroundColor: '#000',
    },
    animate: { opacity: 0 },
    exit: { opacity: 1 },
  }

  return (
    <div className="projectDetail">
      <motion.div
        className="motion-div"
        initial="initial"
        animate="animate"
        transition={{ duration: 0.6 }}
        variants={blackBox}
     >
    </motion.div>
      <div className="detailBox">
        <div className="detailBox-left">
          <div>{state.id}</div>
          <div>{state.title}</div>
        </div>
        <div className="detailBox-right">
          <div className="title">{state.title}</div>
          <div>{state.date}</div>
          <div className="desc">{state.discription}</div>
        </div>
        <Link className="prev-link" smooth to='/#project'>X</Link>
        <div className="detail-bg" style={{ backgroundImage: `url( ${state.bg})` }} ></div>
      </div>
    </div>


  )
}

export default ProjectDetail