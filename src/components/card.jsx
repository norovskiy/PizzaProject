import React from 'react'

const Card = ({name,desc,img, price}) => {
  return (
	 <div style={{display:"flex", flexDirection:"column", alignItems:"center", width:"280px",margin:"10px"}}>
		<img src={img} alt="" />
		<h1>{name}</h1>
		<center><p>{desc}</p></center>
		<button style={{background:"black" ,border:"1px solid #FE9C1C", padding:"10px 45px", borderRadius:"15px"}}>+ Ingridients</button>
		<div className="">
		<h1>{price}</h1>
		</div>
		<button style={{backgroundColor:"#FE9C1C", border:"none", padding:"9px 25px", borderRadius:"15px"}}>Order Now</button>
	 </div>
  )
}

export default Card