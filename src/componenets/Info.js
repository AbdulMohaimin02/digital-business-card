import React from "react";
import selfie from "../images/profilePic.jpg"
import "./Info.css"

export default function Info(){
    return(

        <div>
            <img src={selfie} alt="selfie" />
            <h2>Abdul Mohaimin</h2>
            <h4>Frontend Developer</h4>
            <h6>abdulmohaimin@email.com</h6>
            <div className="info-buttons">
                <button className="email-button">Email</button>
                <button className="linkedin-button">Linkedin</button>
            </div>
            
        </div>
        
    )
}