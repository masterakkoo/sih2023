import React from 'react'
import "../css/makerequest.css"
import Agency from './Agency'
import Message from './Message'
import messages from './messages'
import agencies from './agencies'
function MakeRequest() {
    return (
        <>
            <div className='req-main'>
                <div className='agency-1'>
                    {
                        agencies.map(function (val, index) {
                            return (
                                <Agency
                                    pic={val.pic}
                                    name={val.name}
                                    bio={val.bio}
                                    index={index}
                                />
                            );
                        })
                    }
                </div>
                <div className='requests'>
                    <p style={{ fontSize: "20px", background: "#E2E7CC", padding: "5px", margin: "0px" }}>REQUESTS</p>
                    {
                        messages.map(function (val, index) {
                            return (
                                <Message
                                    pic={val.profile_pic}
                                    msg={val.message}
                                    index={index}
                                />
                            );
                        })
                    }
                    
                </div>
            </div >
        </>
    )
}

export default MakeRequest