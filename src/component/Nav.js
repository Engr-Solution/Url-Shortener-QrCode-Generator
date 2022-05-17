import React from 'react'

function Nav() {
  return (
    <div className='container-fluid d-flex justify-content-between px-5 py-3'>
        <div className="fw-bold fs-3">SoluTion<span className="text-danger">Dev</span></div>
        <div className="d-flex gap-2 md:gap-4 ">
            <a href="#" target="_blank" title='Email' rel="noopener noreferrer">
               <i className="fa fa-video"></i> Email
            </a>
            <a href="#" target="_blank" title='Email' rel="noopener noreferrer">
               <i className="fa fa-github"></i> Github
            </a>
        </div>
    </div>
  )
}

export default Nav