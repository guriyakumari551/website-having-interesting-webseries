import react from 'react';
// This is a coustem card elements  and we have to used a multiple times
function Card(props)
{

return (<>
{/* THIS IS A BIG DIVISION */}
<div className="cards">
{/* THIS IS A SMALL DIVISION INSIDE THE CARDS CLASS */}
<div className="card">
{/* THERE IS ONE IMAGE */}
<img src={props.imgsrc} className="card_img" alt="no image"/>
{/* AND ALSO THE SECTION OF CARDS TITLE CARDS INFORMATION */}
<div className="card_info">
<span className="card_category">{props.title}</span>
<h3 className="card_title"> {props.sname}</h3>
{/* THIS IS AN IMPORTANT PART AS THIS IS AN ANCHOR TAG IN WHICH THE BUTTON IS CREATED WHEN CLICK ON THAT PARTICULAR LINK THEN DIRECTLY GO TO THE HREF INK */}
<a href= {props.link} target="_blank">
<button className="btn">Watch now</button>
</a>

</div>

</div>
  

</div>


















</>
);

}
export default Card;