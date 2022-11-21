import React from "react";
import { useLocation, Link } from "react-router-dom";
import { motion } from "framer-motion"
import './ProjectDetail.scss'



const ProjectDetail = (props)=> {
  const location = useLocation();
  const state = location.state;

  const blackBox = {
    initial: {
      position: 'absolute',
      width: '100%',
      top: 0,
      left: 0,
      height: '100%',
      opacity: 1,
      backgroundColor: '#000',
    },
    animate: { opacity: 0 },
    exit: { opacity: 1 },
  }

  return (
    <div className="projectDetail">
      <motion.div
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
        <div className="detail-bg"></div>
      </div>
    </div>


  )
}

export default ProjectDetail