import React from 'react';

function Bath(props) {
  return (
    <div class="bath" id={`bath-${props.size}`}>
      <h1>{props.size} Bath</h1>
    </div>
  );
}

// Must export the component's function (or class)
export default Bath;