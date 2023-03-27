import * as React from 'react';
import './style.css';

export const Input =() => {
  return (
    <div>
      <input type={'number'} min={10} max={20}/>
    </div>
  );
}