import React, { createContext, useState } from 'react'
import Contxt2 from './Contxt2';

export const UserText = createContext();

export default function Contxt1() {
    const[a, seta] = useState("Pass it changed");

  return (
    <>
        <UserText.Provider value={a}>
            <div>Contxt1 {a}</div>
            <Contxt2 data={a} />
        </UserText.Provider>
    </>
  )
}
