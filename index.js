import React from 'react';
import ReactDOM from 'react-dom';
import Card from "./Card";
import './index.css';
import Sdata from'./Sdata';
function ncards(val)
{
   return(
      <Card  
   imgsrc={val.imgsrc}
   title={ val.title}
   sname= {val.sname}
   link={val.link}

/>

   );
}

ReactDOM.render
(
   //fat arrow function
   // const myname=(a,b)=>
   // {
   //    return a+b;
   // }
   <>

    <h1 className="heading_style">NAME OF TOP 6 NETFLIX SERIES IN 2021</h1>
 

{/* 
this is a jsx and also a mapping of an array */}
{Sdata.map(ncards)};

</>,












    document.getElementById("root")
);