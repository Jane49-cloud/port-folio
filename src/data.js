import { 
    FaHtml5, 
    FaCss3Alt, 
    FaBootstrap,
    FaReact,
 
 } from 'react-icons/fa';
 import {  DiMongodb,} from "react-icons/di";
 import {     GrNode } from "react-icons/gr";
 import { SiJavascript,   SiPython, SiDjango, SiMysql,} from "react-icons/si";
import React from 'react';

export const skills =[

    {
        icon :<FaHtml5/>,
        name:'HTML5',
        color:"hsl(205, 57%, 25%)"
    }, 
     {
        icon :<FaCss3Alt/>,
        name:'CSS3',
        color:"orange"
    }
    , 
     {
        icon :<FaBootstrap/>,
        name:'Bootstrap',
        color:"hsl(205, 86%, 17%)"
    }
    , 
     {
        icon :<SiJavascript/>,
        name:'JavaScript',
        color:"hsl(205, 57%, 25%)"
    }
    , 
     {
        icon :<FaReact/>,
        name:'React',
        color:" hsl(205, 63%, 48%)"
    }
    , 
     {
        icon :<SiPython/>,
        name:'Python',
        color:"black"
    }
    , 
     {
        icon :<SiDjango/>,
        name:'Django',
        color:'hsl(205, 57%, 25%)'
    }
    , 
     {
        icon :<DiMongodb/>,
        name:'Mongodb',
        color:"green"
    }
    , 
     {
        icon :<SiMysql/>,
        name:'Mysql',
        color:"black"
    }
    , 
    {
       icon :<GrNode/>,
       name:'Node',
       color:"green"
   }
]