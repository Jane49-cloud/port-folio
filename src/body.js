import React from "react";
import profile from './profile.jpeg'

const HomeBody = ()=>{
    return<>
    <section>
        <div className="profile">
        <div className="img">
        <img src={profile} alt=""  className="person-img"/>
        </div>
    <div className="personalinfo">
        <h4>Jane-Ndirangu</h4>
        <h5>Web developer</h5>
        <p></p>
    </div>          
        </div>
        
        
        <div className="skills">
            <div><h1>Skills
                </h1></div>
             <div className="list">
             <li>HTML5</li>
            <li>CSS3</li>
            <li>SASS</li>
            <li>BootStrap</li>
            <li>Javascript</li>
            <li>ReactJs</li>
            <li>Python</li>
            <li>Django</li>
            <li>MongoDb</li>
            <li>SQL</li>
            <li>Java</li>
            <li>NodeJs</li>
            
                             </div>
        </div>
    </section>
    </>
}
export default HomeBody