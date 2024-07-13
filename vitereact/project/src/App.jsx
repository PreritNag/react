import { useState } from 'react'
import './App.css'
import Card from './component/card'
function App() {
// const addvalue=()=>{
//   const btn=document.querySelector("#cool");
//   btn.innerHTML=count;
//   count=count+1;
// }
// const removeValue=()=>{
//   const btn=document.querySelector("#cool");
//   btn.innerHTML=count;
//   count=count-1;
// }
// let [count,setcount]=useState(0);
// const addvalue=()=>{
//   count=count+1;
//   setcount(count);
// }
// const removeValue=()=>{
//   count=count-1;
//   setcount(count);
// }
let myobj={
  name:"ataksuki",
  price:"10000"
}
  return (
    <>
     {/* <h1>welcome to my channel</h1>
     <h2>how much you love itachi</h2> */}
     {/* <h2>counter:<span id="cool">{count}</span></h2> */}
     {/* <h2>counter:{count}</h2> */}
     {/* <button onClick={addvalue}>like</button> */}
     {/* <button onClick={removeValue}>hate</button> */}
     <Card username="new clothes" otherdetail={myobj}/>
     <Card username="darling"/>
    </>
  )
}

export default App
