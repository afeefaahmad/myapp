import React from 'react'
import List from './List'

export default function Samp(props) {
  var txt = '';
  var players = [];
  if (props.data) {
    txt = 'Indian Players';
    players = ['rohit', 'virat', 'Dhoni'];
  } else {
    txt = 'Non Indian Players';
    players = ['bravo', 'gayle', 'Faf'];
  }
  return (
    <>
      <div>
        {txt}
        <ul>
          {players.map((val) => (<List data={val} />))}
          
        </ul>
      </div>
    </>
  )
}

