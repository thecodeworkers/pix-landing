import React from 'react';

const ScrollDown = ({scrollTo, landing}) => {

   return (
     <div>
       <button onClick={() => scrollTo(landing)}>scroll down</button>
     </div>
   )
}

export default ScrollDown;