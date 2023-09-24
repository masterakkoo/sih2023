import React from 'react'
import { useNavigate } from "react-router-dom";
import "../css/agency_profile.css"
import home from "../images/home.png"
function Agency_Profile() {
    const navigate = useNavigate();
    let newObject = localStorage.getItem("agency_data");
    const data = JSON.parse(newObject)
    console.log(data)

    return (
        <>
            <div className='agency-pro'>
                <div class="card-container">
                    {/* <span class="pro">PRO</span> */}
                    <img class="round" src={data.pic} alt="user" />
                    <h3>{data.name}</h3>
                    <h6>Nawab Ganj , near HBTU west campus ,Kanpur , Utter Prades</h6>
                    <p>We're stronger when we're together. <br /> Aim to  save life</p>
                    <div class="buttons">
                        <button class="primary">
                            Message
                        </button>
                    </div>
                    <div class="skills">
                        <h6>Skills</h6>
                        <ul>
                            {
                                data.bio.map(function (val, index) {
                                    return (<li>{val}</li>)
                                })
                            }
                        </ul>
                    </div>
                </div>

                <div className='home-btn-main'>
                    <button onClick={() => { navigate("/") }}><img src={home} className='home-btn' /></button>
                </div>
            </div>
        </>
    )
}

export default Agency_Profile