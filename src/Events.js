import React, { useState } from 'react'

export default function Events() {
    const [a, seta] = useState('Hello world');
    // const [chk, setchk] = useState(false);
    const [arr, setarr] = useState(['Besant']);
    // var a = 'Hello world';
    function hndlclk() {
        // seta(arg);
        // a = arg;
        // setchk(true);
        setarr((val) => [...val, a]);
        console.log(arr);
        
    }
    function hndlchge(val) {
        seta(val);
        // console.log(val);

    }
    return (
        <>
            {/* <div>{chk ? a : ''}</div> */}
            <input type='text' onChange={(e) => hndlchge(e.target.value)} />
            <button type='button' onClick={hndlclk}>Click me</button>
        </>
    )
}
