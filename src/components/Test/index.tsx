import React, { useState, useEffect } from 'react';
import './styles.scss';

const Test = (props) => {
  
  const [count, setCount] = useState(0);
  const [ variable, setVariable ] = useState(null);
  const { name } = props;

  useEffect(() => {
    // console.log('useEffect');
  }, []);

  const domChange = () => {
    setVariable('new Value')
    setCount(pedrito => pedrito + 1);
  }

  return (
    <div>
      <h1 className='_title'> { name } </h1>
      <button onClick={domChange}> change</button>
      <p>{count}</p>
    </div>
  )
}

export default Test;
