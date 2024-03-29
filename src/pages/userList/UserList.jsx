import React, { useState } from 'react'
import "./userList.css"
import { DataGrid } from '@mui/x-data-grid';
import DeleteOutlineIcon from '@material-ui/icons/DeleteOutline';
import { rows } from '../../dummyData'
import { Link } from 'react-router-dom';




export default function UserList() {
  const [data, setData] = useState(rows);
  const handleDelete = (id) => {
    setData(data.filter(item => item.id !== id));
  }
  const columns = [
    { field: 'id', headerName: 'ID', width: 90 },
    { field: 'user', headerName: 'User', width: 200, renderCell: (params) => {
      return (
        <div className="userListUser">
          <img src={params.row.avatar} alt=""  className='ListUserImg'/>
          {params.row.username}
        </div>
      )
    } },
    { field: 'email', headerName: 'Email', width: 200 },
    {
      field: 'status',
      headerName: 'Status',
      width: 120,
    },
    {
      field: 'transaction',
      headerName: 'Transaction',
      width: 160,
    },
    {
      field: 'action',
      headerName: 'Action',
      width: 160,
      renderCell: (params) => {
        return (
          <>
            <Link to={"/user/" + params.row.id} >
            <button className="userListEdit">Edit</button>
            </Link>
            <DeleteOutlineIcon className='userListDelete' onClick={() => handleDelete(params.row.id)}/>
          </>
        )
      }
    },
  ];
  return (
    <div className='userList'>
      <DataGrid
        rows={data}
        disableSelectionOnClick
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5]}
        checkboxSelection
      />
    </div>
  )
}
