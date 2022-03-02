import React from 'react';
import "./sidebar.scss";
import LineStyleIcon from '@material-ui/icons/LineStyle';
import TimelineIcon from '@material-ui/icons/Timeline';
import TrendingUpIcon from '@material-ui/icons/TrendingUp';
import PersonIcon from '@material-ui/icons/Person';
import StorefrontIcon from '@material-ui/icons/Storefront';
import AttachMoneyIcon from '@material-ui/icons/AttachMoney';
import EqualizerIcon from '@material-ui/icons/Equalizer';
import MailIcon from '@material-ui/icons/Mail';
import DynamicFeedIcon from '@material-ui/icons/DynamicFeed';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import BusinessCenterIcon from '@material-ui/icons/BusinessCenter';
import ReportIcon from '@material-ui/icons/Report';
import { Link } from 'react-router-dom';

export default function Sidebar() {
  return <div className='sidebar'>
      <div className="sidebarWrapper">
          <div className="sidebarMenu">
              <h3 className="sidebarTitle">Dashboard</h3>
              <ul className='sidebarList'>
                <Link to="/"  className='link'>
                  <li className="sidebarListItem">
                    <LineStyleIcon className= "sidebarIcon" />
                    Home
                  </li>
                </Link>
                  <li className="sidebarListItem">
                    <TimelineIcon className= "sidebarIcon"/>
                    Analytics
                  </li>
                  <li className="sidebarListItem">
                    <TrendingUpIcon className= "sidebarIcon"/>
                    Sales
                  </li>
              </ul>
              
          </div>
          <div className="sidebarMenu">
              <h3 className="sidebarTitle">Quick Menu</h3>
              <ul className='sidebarList'>
                <Link to="/user" className='link'>
                  <li className="sidebarListItem">
                    <PersonIcon className= "sidebarIcon" />
                    Users
                  </li>
                </Link >
                <Link to="/products" className='link'>
                  <li className="sidebarListItem">
                    <StorefrontIcon className= "sidebarIcon"/>
                    Products
                  </li>
                </Link>
                  <li className="sidebarListItem">
                    <AttachMoneyIcon className= "sidebarIcon"/>
                    Transactions
                  </li>
                  <li className="sidebarListItem">
                    <EqualizerIcon className= "sidebarIcon"/>
                    Reports
                  </li>
              </ul>
              
          </div>
          <div className="sidebarMenu">
              <h3 className="sidebarTitle">Notifications</h3>
              <ul className='sidebarList'>
                  <li className="sidebarListItem">
                    <MailIcon className= "sidebarIcon" />
                    Mail
                  </li>
                  <li className="sidebarListItem">
                    <DynamicFeedIcon className= "sidebarIcon"/>
                    Feedback
                  </li>
                  <li className="sidebarListItem">
                    <MailOutlineIcon className= "sidebarIcon"/>
                    Messages
                  </li>
              </ul>
              
          </div>
          <div className="sidebarMenu">
              <h3 className="sidebarTitle">Staff</h3>
              <ul className='sidebarList'>
                  <li className="sidebarListItem">
                    <BusinessCenterIcon className= "sidebarIcon" />
                    Manage
                  </li>
                  <li className="sidebarListItem">
                    <TimelineIcon className= "sidebarIcon"/>
                    Analytics
                  </li>
                  <li className="sidebarListItem">
                    <ReportIcon className= "sidebarIcon"/>
                    Reports
                  </li>
              </ul>
              
          </div>
      </div>
  </div>;
}
