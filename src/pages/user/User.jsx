import React from 'react'
import './user.css'
import PermIdentityIcon from '@material-ui/icons/PermIdentity';
import PhoneAndroidIcon from '@material-ui/icons/PhoneAndroid';
import CalendarTodayIcon from '@material-ui/icons/CalendarToday';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import PublishIcon from '@material-ui/icons/Publish';
import { Link } from 'react-router-dom';

export default function User() {
  return (
    <div className='user'> 
        <div className="userTtitleContainer">
            <h1 className="userTitle">Edit User</h1>
            <Link to="/newUser">
            <button className="userAddButton">Create</button>
            </Link>
        </div>
        <div className="userContainer">
          <div className="useShow">
            <div className="userShowTop">
              <img src="https://images.pexels.com/photos/1152994/pexels-photo-1152994.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" alt="" className='userShowImg' />
              <div className="userShowTopTitle">
                <div className="userShowUsername">Anna Becker</div>
                <div className="userShowUserTitle">Sofware Enginer</div>
              </div>
            </div>
            <div className="userShowBottom">
              <span className="userShowTitle">Account Detail</span>
              <div className="userShowInfo">
                <PermIdentityIcon className='userShowIcon'/>
                <span className="userShowInfoTitle">anbabeck99</span>
              </div>
              <div className="userShowInfo">
                <CalendarTodayIcon className='userShowIcon'/>
                <span className="userShowInfoTitle">10.12.1999</span>
              </div>
              <span className="userShowTitle">Account Detail</span>
              <div className="userShowInfo">
                <PhoneAndroidIcon className='userShowIcon'/>
                <span className="userShowInfoTitle">+1 123 456 567</span>
              </div>
              <div className="userShowInfo">
                <MailOutlineIcon className='userShowIcon'/>
                <span className="userShowInfoTitle">anbabeck99@gmail.com</span>
              </div>
              <div className="userShowInfo">
                <LocationOnIcon className='userShowIcon'/>
                <span className="userShowInfoTitle">New York | Viet Nam</span>
              </div>
            </div>
          </div>
          <div className="useUpdate">
            <span className="userUpdateTitle">Edit</span>
            <form action="" className="userUpdateForm">
              <div className="userUpdateLeft">
              <div className="userUpdateItem">
                  <label htmlFor="">Username</label>
                  <input type="text" placeholder='annabeck99'
                    className='userUpdateInput' />
                </div>
                <div className="userUpdateItem">
                  <label htmlFor="">Fullname</label>
                  <input type="text" placeholder='Anna Beck'
                    className='userUpdateInput' />
                </div>
                <div className="userUpdateItem">
                  <label htmlFor="">email</label>
                  <input type="text" placeholder='annabeck99.gmail.com'
                    className='userUpdateInput' />
                </div>
                <div className="userUpdateItem">
                  <label htmlFor="">Phone</label>
                  <input type="text" placeholder='+123.242.2141'
                    className='userUpdateInput' />
                </div>
                <div className="userUpdateItem">
                  <label htmlFor="">Address</label>
                  <input type="text" placeholder='Ha Noi'
                    className='userUpdateInput' />
                </div>
              </div>
              <div className="userUpdateRight">
                <div className="userUpdateUpload">
                  <img src="https://images.pexels.com/photos/1152994/pexels-photo-1152994.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" alt="" className="userUpdatreImg"  />
                  <label htmlFor="file"><PublishIcon className='userUpdateIcon'/>
                  </label>
                  <input type="file" id="file" style={{display: "none"}} />
                </div>
                <button className="userUpdateButton">Update</button>
              </div>
            </form>
          </div>
        </div>
    </div>
  )
}
