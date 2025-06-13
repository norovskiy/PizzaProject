import React from 'react'

const Headers = ({img, ab, abc, abcd, abcde}) => {
  return (
	 <div style={{}}>
		<img src={img} alt="" />
		<a style={{marginLeft:"270px", color:"gray"}} href="">{ab}</a>
		<a  style={{marginLeft:"10px", color:"gray"}} href="">{abc}</a>
		<a style={{marginLeft:"10px", color:"gray"}}  href="">{abcd}</a>
		<a style={{marginLeft:"10px", color:"gray"}}  href="">{abcde}</a>
	 </div>
  )
}

export default Headers