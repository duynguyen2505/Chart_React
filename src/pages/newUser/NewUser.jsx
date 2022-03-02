import React from 'react'
import "./newUser.css"

export default function NewUser() {
  return (
    <div className='newUser'>
        <h1 className="newUserTitle">New User</h1>
        <form action="" className="newUserForm">
            <div className="newUserItem">
                <label htmlFor="" className="">Username</label>
                <input type="text" placeholder='duyyn' />
            </div>
            <div className="newUserItem">
                <label htmlFor="" className="">Fullname</label>
                <input type="text" placeholder='Tung Duy' />
            </div>
            <div className="newUserItem">
                <label htmlFor="" className="">Email</label>
                <input type="email" placeholder='tungduy@gmail.com' />
            </div>
            <div className="newUserItem">
                <label htmlFor="" className="">Phone</label>
                <input type="password" placeholder='password' />
            </div>
            <div className="newUserItem">
                <label htmlFor="" className="">Phone</label>
                <input type="number" placeholder='+1 123 456 78' />
            </div>
            <div className="newUserItem">
                <label htmlFor="" className="">Address</label>
                <input type="text" placeholder='Ha Noi' />
            </div>
            <div className="newUserItem">
                <label htmlFor="" className="">Gender</label>
                <div className="newUserGender">
                    <input type="radio" name='gender' id='male' value="male"/>
                    <label htmlFor="male">Male</label>
                    <input type="radio" name='gender' id='female' value="female"/>
                    <label htmlFor="female">Female</label>
                    <input type="radio" name='gender' id='other' value="other"/>
                    <label htmlFor="other">Other</label>
                </div>
            </div>
            <div className="newUserItem">
                <label htmlFor="">Active</label>
                <select name="active" id="active" className="newUserSelect">
                    <option value="Yes">Yes</option>
                    <option value="No">No</option>
                </select>
            </div>
            <button className="newUserButton">Create</button>
        </form>
    </div>
  )
}
