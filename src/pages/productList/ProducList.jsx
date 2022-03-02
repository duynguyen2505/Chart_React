import React, { useState } from 'react'
import './productList.css'
import { DataGrid } from '@mui/x-data-grid';
import DeleteOutlineIcon from '@material-ui/icons/DeleteOutline';
import { product } from '../../dummyData'
import { Link } from 'react-router-dom';

export default function ProducList() {
    const [data, setData] = useState(product);
    const handleDelete = (id) => {
      setData(data.filter(item => item.id !== id));
    }
    const columns = [
      { field: 'id', headerName: 'ID', width: 90 },
      { field: 'product', headerName: 'Product', width: 200, renderCell: (params) => {
        return (
          <div className="productListUser">
            <img src={params.row.img} alt=""  className='producListImg'/>
            {params.row.name}
          </div>
        )
      } },
      { field: 'stock', headerName: 'Stock', width: 200 },
      {
        field: 'status',
        headerName: 'Status',
        width: 120,
      },
      {
        field: 'price',
        headerName: 'Price',
        width: 160,
      },
      {
        field: 'action',
        headerName: 'Action',
        width: 160,
        renderCell: (params) => {
          return (
            <>
              <Link to={"/products/" + params.row.id} >
              <button className="productListEdit">Edit</button>
              </Link>
              <DeleteOutlineIcon className='productListDelete' onClick={() => handleDelete(params.row.id)}/>
            </>
          )
        }
      },
    ];
    return (
      <div className='productList'>
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

