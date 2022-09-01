import React, { useState } from "react";
import "./App.css"




const title = 'Select the gradient and then the Box to change the color';

const Paint = () => {
  const [color, setcolor]=useState("")
console.log(color)
  return (
  <>
  
  <div className={color}>

    <h1>{title}</h1>
    
  <div className="btn-c">

      <button onClick={()=>setcolor("parent1")}  className="red btn">#f12828</button>
      <button  onClick={()=>setcolor("parent2")} className="blue btn">#1b25e6</button>
      <button  onClick={()=>setcolor("parent3")} className="green btn">#4cfc7b</button>
  </div>
  </div>
  
  </>
  )
  
}


export default Paint;