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
        Our people
        </div>
        <div className="detailBox-right">
          <div className="title">{state.title}</div>
          <div className="desc">{state.discription}</div>
        </div>
        <Link className="prev-link" smooth to='/#project'>X</Link>
        <div className="detail-bg" style={{backgroundColor: `${state.color}`}}></div>
      </div>
    </div>


  )
}

export default ProjectDetail