import { useNavigate, useParams, Link } from 'react-router-dom'
import { React, useEffect, useState } from "react";
export default function Api() {
    const [data, setData] = useState([]);
    const navigate = useNavigate();
    const parms= useParams()

    useEffect(() => {
        fetch("https://63176e6fece2736550b31750.mockapi.io/Smartphones")
            .then(res => res.json())
            .then(res => setData(res))
    }, []);
    const formatedData = data.map((stu) => {
        return (<>
                <div class="card col-md-2 mx-5 my-3 text-center" onClick={()=>{
                    navigate('/Detail/'+stu.id);
                }}>
                    <img src={stu.smartPhoneImage} class="card-img-top" alt="..." />
                    <div class="card-body">
                        <h5 class="card-title font-family-sans-serif"><u>{stu.smartphoneNames}</u></h5>
                        <p class="card-text"><h3>{stu.smartPhonePrice}</h3></p>
                    </div>
                    <ul class="list-group list-group-flush">
                        <li class="list-group-item">{stu.smartphoneModel}</li>
                        <li class="list-group-item">{stu.smartPhoneMaker}</li>
                        <li class="list-group-item">{stu.smartPhoneDecription}</li>
                        <li class="list-group-item">{stu.id}</li>
                    </ul>
                </div>
          
        </>)
    })

    return (
        <>

            {/* <!-- Example single danger button --> */}
            <div class="btn-group mx-4 my-4 item-center">
                <button type="button" class="btn btn-warning">
                <Link to="/Api/add" class="dropdown-item">Add Smartphone</Link>
                </button>
            </div>

            {/* <h1>api here</h1> */}

            <div className='row'>
            {formatedData}
                    </div>
            
        </>
    )
}

