import React from 'react';
import Oven from './Oven';
import Sink from './Sink';

function Kitchen(props) {
  return (
    <div>
      <h1>Kitchen</h1>
      <Oven />
      <Sink />
    </div>
  );
}

// Must export the component's function (or class)
export default Kitchen;