import { useState } from 'react'
import Image from './images/img.jpg'

export default ()=>{
    const [product, setProduct]=useState([]);
return <>
<img src={Image} style={{width: 500 }}></img>
{product.map((x,i)=>(<div>x</div>))}
</>
}