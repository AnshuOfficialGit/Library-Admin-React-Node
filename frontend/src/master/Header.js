import React from "react";
import face28 from '../assets/images/faces/face28.png'
import logo from '../assets/images/logo.svg'
import logoMini from '../assets/images/logo-mini.svg'
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <>
      <nav class="navbar default-layout-navbar col-lg-12 col-12 p-0 fixed-top d-flex flex-row">
        <div class="text-center navbar-brand-wrapper d-flex align-items-center justify-content-center">
          <a class="navbar-brand brand-logo" href="index.html">
            <img src={logo} alt="logo" />
          </a>
          <a class="navbar-brand brand-logo-mini" href="index.html">
            <img src={logoMini} alt="logo" />
          </a>
        </div>
        <div class="navbar-menu-wrapper d-flex align-items-stretch">
          <button
            class="navbar-toggler navbar-toggler align-self-center"
            type="button"
            data-toggle="minimize"
          >
            <span class="mdi mdi-menu"></span>
          </button>

          <ul class="navbar-nav navbar-nav-right">
            <li class="nav-item nav-language dropdown d-none d-md-block">
              <Link
                class="nav-link dropdown-toggle"
                id="languageDropdown"
                href="#"
                data-toggle="dropdown"
                aria-expanded="false"
              >
                <div class="nav-language-icon">
                  <i class="flag-icon flag-icon-us" title="us" id="us"></i>
                </div>
                <div class="nav-language-text">
                  <p class="mb-1 text-black">English</p>
                </div>
              </Link>
              <div
                class="dropdown-menu navbar-dropdown"
                aria-labelledby="languageDropdown"
              >
                <Link class="dropdown-item" to="/">
                  <div class="nav-language-icon mr-2">
                    <i class="flag-icon flag-icon-ae" title="ae" id="ae"></i>
                  </div>
                  <div class="nav-language-text">
                    <p class="mb-1 text-black">Arabic</p>
                  </div>
                </Link>
                <div class="dropdown-divider"></div>
                <Link class="dropdown-item" to="/">
                  <div class="nav-language-icon mr-2">
                    <i class="flag-icon flag-icon-gb" title="GB" id="gb"></i>
                  </div>
                  <div class="nav-language-text">
                    <p class="mb-1 text-black">English</p>
                  </div>
                </Link>
              </div>
            </li>
            <li class="nav-item nav-profile dropdown">
              <div class="nav-profile-img">
                <img src={face28} alt=""/>
              </div>
              <div class="nav-profile-text">
                <p class="mb-1 text-black">Henry Klein</p>
              </div>

              <div
                class="dropdown-menu navbar-dropdown dropdown-menu-right p-0 border-0 font-size-sm"
                aria-labelledby="profileDropdown"
                data-x-placement="bottom-end"
              >
                <div class="p-3 text-center bg-primary">
                  <img
                    class="img-avatar img-avatar48 img-avatar-thumb"
                    src="assets/images/faces/face28.png"
                    alt=""
                  />
                </div>
                <div class="p-2">
                  <h5 class="dropdown-header text-uppercase pl-2 text-dark">
                    User Options
                  </h5>
                  
                  
                  
                  <div role="separator" class="dropdown-divider"></div>
                  <h5 class="dropdown-header text-uppercase  pl-2 text-dark mt-2">
                    Actions
                  </h5>
                 
                  <Link
                    class="dropdown-item py-1 d-flex align-items-center justify-content-between"
                   to='/'
                  >
                    <span>Log Out</span>
                    <i class="mdi mdi-logout ml-1"></i>
                  </Link>
                </div>
              </div>
            </li>
         
           
          </ul>
          <button
            class="navbar-toggler navbar-toggler-right d-lg-none align-self-center"
            type="button"
            data-toggle="offcanvas"
          >
            <span class="mdi mdi-menu"></span>
          </button>
        </div>
      </nav>
    </>
  );
};

export default Header;
