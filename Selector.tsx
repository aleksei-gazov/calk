import * as React from 'react';
import { InitialStateType } from './dataReducer';
import './style.css';


type SelectorPropsType = {
  data: InitialStateType[]
  onSelectValue: (value: string)=> void
}


export const Selector =({data, onSelectValue}) => {

const onBlurHandler = (e) => {
  // onSelectValue(e.currentTarget.value)
  console.log(e)
}

  return (
    <div>
     <select onChange={(e)=>{console.log(e.currentTarget.value)}} >
       {data.map(i=> {
         if(i.type === 'frame') {
           return (
<option  value={i.name} >{i.name}</option> 
           )
         }
       })}
</select>
    </div>
  );
}