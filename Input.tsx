import * as React from 'react';
import './style.css';

type InpytPropsType = {
  type: string;
  min: number
  max: number
}

export const Input =() => {
  return (
    <div>
      <input type={'number'} min={10} max={20} />
    </div>
  );
}