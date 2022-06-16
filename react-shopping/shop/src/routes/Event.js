import { Routes, Route, Link, useNavigate, Outlet } from 'react-router-dom'

function Event(){
  return (
    <>
    <div className="row">
      <h2>오늘의 이벤트</h2>
      <Outlet></Outlet>
    </div> 
    </>
  )
}

export default Event;