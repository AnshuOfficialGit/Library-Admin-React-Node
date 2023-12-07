import React from "react";
import face28 from "../assets/images/faces/face28.png";
import { Link } from "react-router-dom";
const Sidebar = () => {
  return (
    <>
      <nav class="sidebar sidebar-offcanvas" id="sidebar">
        <ul class="nav">
          <li class="nav-item nav-category">Main</li>
          <li class="nav-item">
            <Link class="nav-link" to="/user/dashboard">
              <span class="icon-bg">
                <i class="mdi mdi-cube menu-icon"></i>
              </span>
              <span class="menu-title">Dashboard</span>
            </Link>
          </li>
          <li class="nav-item">
            <Link class="nav-link" to="/user/location">
              <span class="icon-bg">
                <i class="mdi mdi-format-list-bulleted menu-icon"></i>
              </span>
              <span class="menu-title">Location</span>
            </Link>
          </li>
          <li class="nav-item">
            <Link class="nav-link" to="/user/category">
              <span class="icon-bg">
                <i class="mdi mdi-format-list-bulleted menu-icon"></i>
              </span>
              <span class="menu-title">Category</span>
            </Link>
          </li>

          <li class="nav-item">
            <Link class="nav-link" to="/user/book/request">
              <span class="icon-bg">
                <i class="mdi mdi-chart-bar menu-icon"></i>
              </span>
              <span class="menu-title">Book Request</span>
            </Link>
          </li>
          <li class="nav-item">
            <Link class="nav-link" to="/user/manage/books">
              <span class="icon-bg">
                <i class="mdi mdi-table-large menu-icon"></i>
              </span>
              <span class="menu-title">Manage Books</span>
            </Link>
          </li>
          <li class="nav-item">
            <Link class="nav-link" to="/user/users">
              <span class="icon-bg">
                <i class="mdi mdi-format-list-bulleted menu-icon"></i>
              </span>
              <span class="menu-title">Manage User</span>
            </Link>
          </li>
          <li class="nav-item sidebar-user-actions">
            <div class="user-details">
              <div class="d-flex justify-content-between align-items-center">
                <div>
                  <div class="d-flex align-items-center">
                    <div class="sidebar-profile-img">
                      <img src={face28} alt="" />
                    </div>
                    <div class="sidebar-profile-text">
                      <p class="mb-1">Henry Klein</p>
                    </div>
                  </div>
                </div>
                <div class="badge badge-danger">3</div>
              </div>
            </div>
          </li>

          <li class="nav-item sidebar-user-actions">
            <div class="sidebar-user-menu">
              <Link to="/" class="nav-link">
                <i class="mdi mdi-logout menu-icon"></i>
                <span class="menu-title">Log Out</span>
              </Link>
            </div>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Sidebar;
