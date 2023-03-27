import * as React from 'react';
import './style.css';

export const Selector =({data}) => {
  return (
    <div>
     <select >
       {data.map(i=> {
         if(i.type === 'frame') {
           return (
<option value={i.name} >{i.name}</option> 
           )
         }
       })}
</select>
    </div>
  );
}