import React from "react";
import { skills } from "./data";
import profile from './profile.jpeg'

const HomeBody = ()=>{
    return<>
    <section className="section-one">
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

                {
                    skills.map((skill,index)=>{
                        const{name, icon,color}= skill
                        return <li key={index}  style={{color: `${color}`}}>
                            {icon}                         
                            <p className="name"> {name}</p>
                        </li>
                    })
                }
            
                             </div>
        </div>
    </section>
    </>
}
export default HomeBody