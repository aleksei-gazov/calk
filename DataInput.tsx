import * as React from 'react';
import { InitialStateType } from './dataReducer';
import { Input } from './Input';
import { Selector } from './Selector';
import { useAppSelector } from './store';
import './style.css';

export const DataInput = () => {
  const data = useAppSelector<InitialStateType[]>(state=> state.data)
  return (
    <div>
    <Input/>
    <Selector data={data}/>
    </div>
  );
}