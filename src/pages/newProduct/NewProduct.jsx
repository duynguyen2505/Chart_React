import React from 'react'
import "./newProduct.css"

export default function NewProduct() {
  return (
    <div className='newProduct'>
        <h1 className="newProductTitle">New Product</h1>
        <form action="" className="newProductForm">
        <div className="newProductItem">
                <label htmlFor="" className="">Image</label>
                <input type="file" className='productInput' />
            </div>
            <div className="newProductItem">
                <label htmlFor="" className="">Name</label>
                <input type="text" placeholder='Apple Watch' />
            </div>
           
            <div className="newProductItem">
                <label htmlFor="" className="">Stoke</label>
                <input type="number" placeholder='123' />
            </div>
            
            <div className="newProductItem">
                <label htmlFor="">Active</label>
                <select name="active" id="active" className="newProductSelect">
                    <option value="Yes">Yes</option>
                    <option value="No">No</option>
                </select>
            </div>
            <button className="newProductButton">Create</button>
        </form>
    </div>
  )
}
