import * as React from 'react';
import Total from './Total';
import { DataInput } from './DataInput';
import s from './style.css';


export default function App() {
 

  return (
    <div className='container'>
          <DataInput/>
      <Total/>
    </div>
  );
}
