// Profile.js
import MyData from "./MyData";
import { descMe } from "./MyData";
import Photo from "./images/person.jpeg";
import './Profile.css';
import Typewriter from "typewriter-effect/dist/core";
import { useEffect } from "react";

function describe() {
    const desc = document.getElementById('desc');  // <span> 엘리먼트 레퍼런스 생성
    new Typewriter(desc,{
                            strings: descMe,
                            autoStart: true,
                            loop: true,
                            pauseFor: 1000
                        });            
}
const Profile = () => {
    // describe() 함수 호출
    useEffect(describe, []); 
    return (
        <main>
            <div className="info">
                <h1>Hi, Everyone!</h1>
                <h2>My name is {MyData.name}</h2>
                <h3>I'm working for {MyData.company}</h3>
                <h3>Email: {MyData.email}</h3>
                <div>
                    I'm a <span id="desc"></span>
                </div>
            </div>
            <div className="photo">
                <img src={Photo} alt="Peter lee"/>
            </div>
        </main>
    );
}
export default Profile;