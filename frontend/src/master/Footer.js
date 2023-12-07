import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <footer class="footer">
        <div class="footer-inner-wraper">
          <div class="d-sm-flex justify-content-center justify-content-sm-between">
            <span class="text-muted d-block text-center text-sm-left d-sm-inline-block">
              Copyright © Anshu Sharma 2023
            </span>
            <span class="float-none float-sm-right d-block mt-1 mt-sm-0 text-center">
              {" "}
              {" "}
              <Link to="/user/dashboard" target="_blank">
               Library Management System
              </Link>{" "}
              Designed and Developed By Anshu Sharma
            </span>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
