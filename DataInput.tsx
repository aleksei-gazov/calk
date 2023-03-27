import * as React from 'react';
import { InitialStateType } from './dataReducer';
import { Input } from './Input';
import { Selector } from './Selector';
import { useAppSelector } from './store';
import './style.css';

export const DataInput = () => {
  const data = useAppSelector<InitialStateType[]>(state=> state.data)

const onSelectValue = () => {

}

  return (
    <div>
      <div>
      <span>Выберети тип покрытия:</span> <Selector data={data} onSelectValue={onSelectValue}/>
      </div> 
    <Input />
    <Input/>
    <Selector data={data} onSelectValue={onSelectValue}/>
    
    </div>
  );
}