import React from 'react'
import { NavLink , Link } from 'react-router-dom'
import { FaSearch} from'react-icons/fa'
import { IoPersonCircleOutline} from 'react-icons/io5'
import { IoCart } from'react-icons/io5'


const Header = () => {
  return (
    <>
    <div className='fixed-top'>
    <div className='Header-top '>
      <nav className="navbar navbar-expand-lg navbar-dark bg-black">
      <div className="container-xl">
      <Link to={""} className="navbar-brand">ReUseHub</Link>
            <form className="form-inline my-2 my-lg-0">
              <input className="form-control mr-sm-1 " type="search" placeholder="Search" aria-label="Search" />
              <button className="btn btn-outline-light my-2 my-sm-0 " type="submit"><FaSearch /></button>
            </form>
        <button className="navbar-toggler cursor-pointer" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        {/* ... Your navigation content */}
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item list">
            <Link to={"/sell"} className="nav-link">Sell</Link>
            </li>
            <li className="nav-item list">
            <Link to={"/donate"} className="nav-link">Donate</Link>
            </li>
            <li className="nav-item">
            <Link to={"/notification"} className="nav-link" style={{
              paddingLeft:"20px",
            }}
            >Notification</Link>
            </li>
            <li className="nav-item list">
            <Link to={"/cart"} className="nav-link"><IoCart style={{height:"30px" , width:"30px"}}/></Link>
            </li>
            <li className="nav-item" id="login-section">
            <Link to={"/login"} className="nav-link" style={{
              paddingLeft:"20px",
            }}
            ><IoPersonCircleOutline style={{height:"30px" , width:"30px"}}/></Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
    </div>
    <div className='Header-bottom bg-dark'>
        <div className='container-xl'>
          <div className='row'>
            <div className='col-12'>
            <div className='menu-bottom d-flex align-items-center'>
              <div className='menu-links'>
                <div className='"d-flex align-item-center gap-15'>
                  <NavLink to={"/"} className="nav-links cursor-pointer" >Home</NavLink>
                  <NavLink to={"/store"} className="nav-links cursor-pointer">Store</NavLink>
                  <NavLink to={"/contact"} className="nav-links cursor-pointer">Contact</NavLink>
                </div>
              </div>
            </div>
          </div>
        </div>
    </div>
    </div>
    </div>
    </>
  )
}

export default Header