import { BrowserRouter, Link, Outlet, Route, Routes, useNavigate, useParams } from "react-router-dom";
import { React, useEffect, useState } from "react";
export default function Addstudent() {
  const navigate = useNavigate();
  const apiurl = "https://63176e6fece2736550b31750.mockapi.io/Smartphones";

  const [data, setData] = useState({ id: "" })

  return (
    <>
<h2 className="text-dark">Add Smartphone</h2>
    <div className="container border border-secondar G-4">
      
      <div className="row g-3 mx-3 my-2">
        <div className="col-4">
          <input type="text" onChange={(e) => { setData({ ...data, smartphoneNames: e.target.value }); }} className="form-control" placeholder="smartphoneNames" />
        </div>
        <div className="col-4">
          <input type="text" onChange={(e) => { setData({ ...data, smartphoneModel: e.target.value }); }} className="form-control" placeholder="smartphoneModel" aria-label="smartphoneModel" />
        </div>
        <div className="col-4">
          <input type="text" onChange={(e) => { setData({ ...data, smartPhoneMaker: e.target.value }); }} className="form-control" placeholder="smartPhoneMaker" aria-label="smartPhoneMaker" />
        </div>
        <div className="col">
          <input type="text" onChange={(e) => { setData({ ...data, smartPhoneImage: e.target.value }); }} className="form-control" placeholder="imagepath" aria-label="smartPhoneImage" />
        </div>
        <div className="col">
          <input type="text" onChange={(e) => { setData({ ...data, smartPhoneDecription: e.target.value }); }} className="form-control" placeholder="smartPhoneDecription" aria-label="smartPhoneDecription" />
        </div>
        <div className="col">
          <input type="text" onChange={(e) => { setData({ ...data, smartPhonePrice: e.target.value }); }} className="form-control" placeholder="smartPhonePrice" aria-label="smartPhonePrice" />
        </div>
      </div>
      
      <button type="button" className="btn btn-primary btn-lg" onClick={() => {

        fetch(apiurl, {
          method: "POST",
          body: JSON.stringify(data),
          headers: {
            "Content-Type": "application/json"
          }
        })
          .then((res) => {
            navigate('/Api');
          })
      }} >Add Smartphone</button>
      </div>
    </>
  )
}