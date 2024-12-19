import React, { useEffect, useState } from 'react'

export default function Effect() {
    const[a, seta] = useState(0);
    const[count, setcount] = useState(0);

    useEffect(() =>{
        setcount(count+1);
    },[])
    function hndlclk() {
        seta(a+1);

    }
  return (
    <>
        <button type="button" onClick={hndlclk}>Click</button>
        <div> {count} runs in useeffect</div>
        <div> {a} times variable a runs</div>
    </>
  )
}
