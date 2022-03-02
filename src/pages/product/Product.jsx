import React from 'react'
import { Link } from 'react-router-dom'
import './product.css'
import Chart from "../../components/chart/Chart"
import {productData} from "../../dummyData"
import Publish from '@material-ui/icons/Publish'

export default function Product() {
  return (
    <div className='product'>
        <div className="productTitleContainer">
            <h1 className="productTitle">Product</h1>
            <Link to="./newproduct">
                <button className="productButton">Create</button>
            </Link>
        </div>
        <div className="productTop">
          <div className="productTopLeft">
            <Chart data = {productData}  title= "Sales Performance" grid dataKey="Sales" />
          </div>
          <div className="productTopRight">
            <div className="productInfoTop">
              <img src="https://cdn.tgdd.vn/Products/Images/54/236016/bluetooth-airpods-2-apple-mv7n2-imei-1-org.jpg" alt="" className="productInfoImg" />
              <span className="productName">Apple Airpods</span>
            </div>
            <div className="productInfoBottom">
              <div className="productInfoItem">
                <span className="productInfoKey">id:</span>
                <span className="productInfoKey">123</span>
              </div>
              <div className="productInfoItem">
                <span className="productInfoKey">sales:</span>
                <span className="productInfoKey">123</span>
              </div>
              <div className="productInfoItem">
                <span className="productInfoKey">active:</span>
                <span className="productInfoKey">yes</span>
              </div>
              <div className="productInfoItem">
                <span className="productInfoKey">in stock:</span>
                <span className="productInfoKey">no</span>
              </div>
            </div>
          </div>
        </div>
        <div className="productBottom">
          <form action="" className="productForm">
              <div className="productFormLeft">
                <label htmlFor="" className="">Product Name</label>
                <input type="text" placeholder='Apple AirPod' />
                <label htmlFor="" className="">In Stock</label>
                <select name="inStock" id="idStock">
                  <option value="yes">Yes</option>
                  <option value="no">No</option>
                </select>
                <label htmlFor="" className="">Active</label>
                <select name="active" id="active">
                  <option value="yes">Yes</option>
                  <option value="no">No</option>
                </select>
              </div>
              <div className="productFormRight">
                <div className="productUpload">
                  <img src="https://cdn.tgdd.vn/Products/Images/54/236016/bluetooth-airpods-2-apple-mv7n2-imei-1-org.jpg" alt="" className="productUploadImg" />
                  <label htmlFor="file">
                    <Publish/>
                  </label>
                  <input type="file" id='file' style={{display:"none"}}/>
                </div>
                <button className="productButton">Update</button>
              </div>
          </form>
        </div>
    </div>
  )
}
