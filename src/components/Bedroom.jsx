import React from 'react';

function Bedroom(props) {
  return (
    <div class="bedroom" id={`bed-${props.bedNum}`}>
      <h1>Bedroom {props.bedNum}</h1>
    </div>
  );
}

// Must export the component's function (or class)
export default Bedroom;