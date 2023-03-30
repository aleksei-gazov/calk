import * as React from 'react';
import Total from './Total';
import { DataInput } from './DataInput';
import './style.css';
import { Basket } from './Basket';
import { useAppSelector } from './store';
import { Divider } from '@material-ui/core';


export default function App() {
 const isBasket = useAppSelector(state=> state.basket.isBasket)

  return (
    <div>
      {isBasket ? 
 <Basket/>
      :
      <div  className='container'>
 <DataInput/>
      <Total/>
      </div>
      }
         
     
    </div>
  );
}
