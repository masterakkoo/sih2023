import React, { useState } from 'react'
import "../css/take_req.css"
import reg from "../images/req1.png"
function Take_Req() {
    // const reg = "https://t4.ftcdn.net/jpg/02/78/01/97/360_F_278019795_HhtJsgJoL9DUoVA0l2v2EGz2YgD37sbE.jpg";
    const [details, setdetails] = useState({ agency_name: "", category: "", request: "" })
    const Onchange = (e) => {


        const nam = e.target.name;
        const val = e.target.value;
        setdetails({ ...details, [nam]: val })
        console.log(details)
    }

    const Submit = async (e) => {
        e.preventDefault();
        console.log(details)
        // navigate("/");
        const { email, password } = details;

    }
    return (
        <>
            <div className='make-req'>
                <div className='req-img'>
                    <img src={reg} />
                </div>
                <form action="/" class="decor">
                    <div class="form-left-decoration"></div>
                    <div class="form-right-decoration"></div>
                    <div class="circle"></div>
                    <div class="form-inner">
                        <h1>Contact us</h1>
                        <input type="name" placeholder="Agency Id/Name" />
                        <input type="field" placeholder="Field" />
                        <textarea placeholder="Resources..." rows="5"></textarea>
                        <button type="submit" href="/" onClick={() => {
                            window.alert("Your Request is queued wait for other to reponsed")
                            Navigate("/")
                        }}>Make Request</button>
                    </div>
                </form>
            </div>
        </>
    )
}

export default Take_Req