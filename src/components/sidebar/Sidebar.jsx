import "./sidebar.scss";
import DashboardIcon from "@mui/icons-material/Dashboard";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import CreditCardIcon from "@mui/icons-material/CreditCard";
import StoreIcon from "@mui/icons-material/Store";
import InsertChartIcon from "@mui/icons-material/InsertChart";
import SettingsApplicationsIcon from "@mui/icons-material/SettingsApplications";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import { Link } from "react-router-dom";
import { useContext } from "react";
import React, { Component }  from 'react';

const Sidebar = () => {
  return (
    <div className="sidebar">
    
      <hr />
      <div className="center">
        <ul>
          <p className="title">MAIN</p>
          <li>
          <Link to="/admin/dashboard" style={{ textDecoration: "none" }}>
            <DashboardIcon className="icon" />
            <span>Dashboard</span>
            </Link>
          </li>
          <p className="title">Product Management</p>
          <Link to="/users" style={{ textDecoration: "none" }}>
          </Link>
            <li>
            <Link to="/admin/product" style={{ textDecoration: "none" }}>
              <StoreIcon className="icon" />
              <span>Create Products</span>
              </Link> 
            </li>
         
                 <li>
            <Link to="/admin/products" style={{ textDecoration: "none" }}>
              <StoreIcon className="icon" />
              <span>All Products</span>
              </Link>
            </li>
         
         
            {/* <li>
            <Link to="/admin/products" style={{ textDecoration: "none" }}>
              <StoreIcon className="icon" />
              <span>Product Stock</span>
              </Link>
            </li> */}
         
        
          <p className="title">Category Management</p>
          <li>
          <Link to="/admin/category" style={{ textDecoration: "none" }}>
            <CreditCardIcon className="icon" />
            <span>Categories</span>
            </Link>
          </li>
         
          <li>
          <Link to="/admin/sub" style={{ textDecoration: "none" }}>
            <CreditCardIcon className="icon" />
            <span>Sub Categories</span>
            </Link>
          </li>
          
          <p className="title">Coupon Management</p>
           <li>
           <Link to="/admin/coupon" className="nav-link">
            <CreditCardIcon className="icon" />
            <span>Coupon</span>
            </Link>
          </li>
          {/* <p className="title">USER MANAGEMENT</p>
          <li>
            <AccountCircleOutlinedIcon className="icon" />
            <span>All Users</span>
          </li>
          <li>
            <AccountCircleOutlinedIcon className="icon" />
            <span>Users Role</span>
          </li> */}
          <li>
            <ExitToAppIcon className="icon" />
            <span>Logout</span>
          </li>
        </ul>
      </div>
   
    </div>
  );
};

export default Sidebar;
