import React from "react";
import {FaPhoneAlt, FaMailBulk,FaFacebookSquare,FaWhatsapp,FaGithub} from 'react-icons/fa'


const Homepage = ()=>{
    return<>
<header>
    <div className="phone">
    <h3>
   <FaPhoneAlt></FaPhoneAlt>
    <a href="tel: +254791055992">  
    +254791055992     
       </a>
    </h3>       
    </div>
    <div className="contacts">
        <a href="mailto:janendirangu49@gmai.com"><FaMailBulk id="icon"></FaMailBulk></a>
        <a href="#"><FaFacebookSquare id="icon"></FaFacebookSquare></a>
        <a href="https://wa.me/+25491055992/?"><FaWhatsapp id="icon"></FaWhatsapp></a>
         <a href="https://github.com/Jane49-cloud"><FaGithub id="icon"></FaGithub></a>
    </div>
</header>

    </>
}

export default Homepage