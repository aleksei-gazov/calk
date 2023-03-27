import * as React from 'react';
import { Input } from './Input';
import { Selector } from './Selector';
import './style.css';

export const DataInput = () => {
  return (
    <div>
    <Input/>
    <Selector/>
    </div>
  );
}