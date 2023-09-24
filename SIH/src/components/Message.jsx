import React, { useState } from 'react'
import "../css/message.css"
const pro = "https://img.freepik.com/free-vector/abstract-company-logo_53876-120501.jpg";
function Message(p) {
    const [Req, setReq] = useState(true);
    const p1 = {
        display: "block"
    }
    const p2 = {
        display: "none"
    }
    const Help = () => {
        setReq(false);
    }
    return (
        <>
            <div className={(p.index % 2 == 0) ? "chat-box1" : "chat-box2"}>
                <div className='chat-pic' onClick={Help}>
                    <img src={p.pic} />
                </div>
                <div className={(p.index % 2 == 0) ? "chat-text1" : "chat-text2"}>
                    <p className='chat-content'>
                        {p.msg}
                    </p>
                    <div style={(Req) ? p2 : p1}>✅</div>
                </div>
            </div>
        </>
    )
}

export default Message