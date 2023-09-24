import React from 'react'
import "../css/agency.css"
const pro = "https://img.freepik.com/free-vector/abstract-company-logo_53876-120501.jpg";
import { useNavigate } from "react-router-dom";
function Agency(p) {
    const navigate = useNavigate();
    return (
        <>
            <div className='profile'>
                <div className='profile-pic' onClick={() => { localStorage.setItem("agency_data", JSON.stringify(p)); navigate("/profile") }}>
                    <img src={p.pic} />
                </div>
                <div className='profile-info'>
                    <p style={{ fontWeight: "1000" }}>{p.name}</p>
                    <p>{p.bio}</p>
                </div>
            </div>
        </>
    )
}

export default Agency