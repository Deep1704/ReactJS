import { BrowserRouter, Link, Outlet, Route, Routes, useNavigate, useParams } from "react-router-dom";
import { React, useEffect, useState } from "react";
export default function Detail() {
  const navigate = useNavigate();
  const param = useParams();
  const [data, setData] = useState({});

  useEffect(() => {
    fetch("https://63176e6fece2736550b31750.mockapi.io/Smartphones" + "/" + param.id, { method: "GET" })
      .then(res => res.json())
      .then(res => setData(res))
  }, [])

  return (

    <>
    	<div class="card-container">

         <div class="image-container">

            <img src={data.smartPhoneImage} className="img-fluid rounded  d-block ratio ratio-1x1" alt="image of smartphone" />
  
        </div>

        <div class="price-container">
  
           <p class="name"><b><u>smartphoneNames : {data.smartphoneNames}</u></b></p>
           <p class="price">smartPhonePrice : {data.smartPhonePrice}</p>

        </div>

          <div class="detail-container">

          <table>
    
              <tr>
                <td>smartphoneModel : {data.smartphoneModel}</td>
              </tr>

              <tr>
                <td>smartPhoneMaker : {data.smartphoneMaker}</td>
              </tr>

              <tr>
                <td> smartPhoneDecription : {data.smartPhoneDecription}</td>
              </tr>

              <tr>
                <td>ID : {data.id}</td>
              </tr>
              
        {/* <button type="button" class="btn btn-outline-warning mx-3 my-3"
                  onClick={()=>{
                    navigate("/Api/edit/"+param.id);
                }}>
                  Edit
                </button>
                <button type="button" class="btn btn-outline-danger" onClick={() => {
                  fetch("https://63176e6fece2736550b31750.mockapi.io/Smartphones" + "/" + param.id, { method: "DELETE" })
                    .then(res => {
                      navigate('/Api');
                    })
                }}>Delete</button> */}
       </table>``

</div>

</div>  

              <button type="button" class="btn btn-warning" 
                  onClick={()=>{
                    navigate("/Api/edit/"+param.id);
                }}>
                  Edit
                </button>
                <button type="button" class="btn btn-success" onClick={() => {
                  fetch("https://63176e6fece2736550b31750.mockapi.io/Smartphones" + "/" + param.id, { method: "DELETE" })
                    .then(res => {
                      navigate('/Api');
                    });
                }}>Delete</button>
      
      </> 
  )
}
