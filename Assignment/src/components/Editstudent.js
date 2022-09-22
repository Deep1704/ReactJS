import { BrowserRouter, Link, Outlet, Route, Routes, useNavigate, useParams } from "react-router-dom";
import { React, useEffect, useState } from "react";
export default function Editstudent() {
  const navigate = useNavigate();
  const param=useParams();
  const apiurl = "https://63176e6fece2736550b31750.mockapi.io/Smartphones";
  const [data, setData] = useState({ smartphoneNames: "" })
  useEffect(()=>{
    fetch(apiurl+"/"+param.id,{method:"GET"})
    .then(res=>res.json())
    .then(res=>setData(res));
  },[]);

  

  return (
    <>
    
      <div  className="row g-3">
        <div className="col-md-4 g-4">
          <label for="inputEmail4" className="form-label" >smartphoneNames</label>
          <input type="email" className="form-control" placeholder="smartphoneNames" onChange={(e) => { setData({ ...data, smartphoneNames: e.target.value }); }} value={data.smartphoneNames} id="inputEmail4" />
        </div>
        <div className="col-md-4  g-4">
          <label for="inputPassword4" className="form-label">smartphoneModel</label>
          <input type="text" className="form-control" onChange={(e) => { setData({ ...data, smartphoneModel: e.target.value }); }} value={data.smartphoneModel} placeholder="smartphoneModel" id="inputPassword4" />
        </div>
        <div className="col-4 g-4">
          <label for="inputAddress" className="form-label">smartPhoneMaker</label>
          <input type="text" className="form-control" id="inputAddress" onChange={(e) => { setData({ ...data, smartPhoneMaker: e.target.value }); }} value={data.smartPhoneMaker} placeholder="smartPhoneMaker" />
        </div>
        <div className="col-8 g-4">
          <label for="inputAddress2" className="form-label">smartPhoneImage</label>
          <input type="text" className="form-control" id="inputAddress2" onChange={(e) => { setData({ ...data, smartPhoneImage: e.target.value }); }} value={data.smartPhoneImage} placeholder="imagepath" />
        </div>
        <div className="col-4 g-4">
          <label for="inputAddress" className="form-label">smartPhoneDecription</label>
          <input type="text" className="form-control" id="inputAddress" onChange={(e) => { setData({ ...data, smartPhoneDecription: e.target.value }); }} value={data.smartPhoneDecription} placeholder="smartPhoneDecription" />
        </div>
        <div className="col-md-4  g-4">
          <label for="inputPassword4" className="form-label">smartPhonePrice</label>
          <input type="text" className="form-control" onChange={(e) => { setData({ ...data, smartPhonePrice: e.target.value }); }} value={data.smartPhonePrice} placeholder="smartPhonePrice" id="inputPassword4" />
        </div>

        <div className="col-12 g-4">
          <button type="submit" className="btn btn-primary" onClick={() => {

            fetch(apiurl+"/"+param.id, {
              method: "PUT",
              body: JSON.stringify(data),
              headers: {
                "Content-Type": "application/json"
              }
            })
              .then((res) => {
                navigate('/Api');
              })
          }}>Edit Smartphone</button>
        </div>
      </div>
    </>
  )
}