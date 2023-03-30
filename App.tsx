import * as React from 'react';
import Total from './Total';
import { DataInput } from './DataInput';
import './style.css';
import { Basket } from './Basket';


export default function App() {
 

  return (
    <div className='container'>
          <DataInput/>
      <Total/>
      <Basket/>
    </div>
  );
}
