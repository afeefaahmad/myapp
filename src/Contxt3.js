import React, { useContext } from 'react';
import { UserText } from './Contxt1';

export default function Contxt3() {

    const pval = useContext(UserText);
  return (
    <>
        <div>Contxt3 {pval} </div>
    </>
  )
}
