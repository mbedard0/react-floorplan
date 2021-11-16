import React from 'react';
import Bath from './Bath';
import Bedroom from './Bedroom';
import Kitchen from './Kitchen';
import LivingRoom from './LivingRoom';

function FloorPlan(props) {
  return (
    <div class="floorplan">
      <Bedroom bedNum={1}/>
      <div class="kitchenRoom"><Kitchen /></div>
      <Bath size="Full"/>
      <Bedroom bedNum={2}/>
      <LivingRoom />
      <Bath size="Half"/>
      <Bedroom bedNum={3}/>
    </div>
  );
}

// Must export the component's function (or class)
export default FloorPlan;