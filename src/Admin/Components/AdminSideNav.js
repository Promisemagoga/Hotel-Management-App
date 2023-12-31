import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { auth } from '../../Config/Firebase';
import { AddBox, AddBoxRounded, AddBoxTwoTone, AddRounded, Bed, Book, Home, Info, LoginOutlined } from '@mui/icons-material';

function SideNavBar({ setShowForm }) {
  const navigate = useNavigate()

  function logOut(event) {
    auth.signOut();
    // navigate("/")
    console.log("User signed out!");
    window.location.reload();
  }



  return (
    <div
      class="d-flex flex-column align-items-center align-items-sm-start px-3 pt-2 text-white"
      style={{ backgroundColor: "#ffffff", borderRadius: "20px", minHeight: "90vh", height: "auto" }}
    >
      <Link
        to="/AdminDashboard"
        class="d-flex align-items-center pb-3 mb-md-0 me-md-auto text-white text-decoration-none"
      >
        <span class="fs-5 d-none d-sm-inline">
          {" "}
          <h1 style={{ color: "#46464D" }}>Pro_Stay</h1>
        </span>
      </Link>
      <ul
        class="nav nav-pills flex-column mb-sm-auto mb-0 align-items-center align-items-sm-start"
        id="menu"
      >
        <li class="nav-item">
          <Link to="/AdminDashboard" class="nav-link align-middle px-0">
            <Home style={{ height: '30px', width: '30px', color: "#61dafb" }} />
            <span class="ms-1 d-none d-sm-inline" style={{ color: "#46464D" }}>Home</span>
          </Link>
        </li>
        <li>
        <li class="nav-item">
          <Link to="/AdminDashboard" class="nav-link align-middle px-0">
            <Bed style={{ height: '30px', width: '30px', color: "#61dafb" }} />
            <span class="ms-1 d-none d-sm-inline" style={{ color: "#46464D" }}>Rooms</span>
          </Link>
        </li>
          <ul
            class="collapse show nav flex-column ms-1"
            id="submenu1"
            data-bs-parent="#menu"
          >
            <li class="w-100" style={{ display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center" }}>
              <Link to="/AdminBooking" class="nav-link align-middle px-0">
                <Book style={{ height: '30px', width: '30px', color: "#61dafb" }} />
                <span class="ms-1 d-none d-sm-inline" style={{ color: "#000" }}>Bookings</span>
              </Link>
            </li>
            <li>
              <Link to="/AdminHotelInfo" class="nav-link align-middle px-0">
                <Info style={{ height: '30px', width: '30px', color: "#61dafb" }} />
                <span class="ms-1 d-none d-sm-inline" style={{ color: "#46464D" }}>Info</span>
              </Link>
            </li>
          </ul>
        </li>
        <li class="nav-item">
          <Link to="/AddRom" class="nav-link align-middle px-0" >
            <AddBoxTwoTone style={{ height: '30px', width: '30px', color: "#61dafb" }} />
            <span class="ms-1 d-none d-sm-inline" style={{ color: "#46464D" }}>Add Room</span>
          </Link>
        </li>
        <li class="nav-item">
          <Link to="/AddInfo" class="nav-link align-middle px-0" >
            <AddBox style={{ height: '30px', width: '30px', color: "#61dafb"}}/>
            <span class="ms-1 d-none d-sm-inline" style={{color:"#46464D"}}>Add Hotel Info</span>
          </Link>
        </li>
        <li class="nav-link px-0 align-middle" style={{ marginTop: "450px" }}>

          <LoginOutlined style={{ height: '30px', width: '30px', color: "#61dafb", }}  onClick={logOut}/>
          <span class="ms-1 d-none d-sm-inline">
            Logout
          </span>{" "}

        </li>
      </ul>
      <hr />
    </div>
  )
}

export default SideNavBar