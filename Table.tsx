import * as React from 'react';
import { addBasket } from './basket-reducer';
import { useAppDispatch, useAppSelector } from './store';


export const Table = ({table, total}) => {
	const dispatch = useAppDispatch()
	// console.log(Array.isArray(total))
const addBasketHandler = () => {
	dispatch(addBasket(total))
}


   const totalSum = total?.reduce((acc, i)=>acc + +i.sum, 0)
  return (
    <div>
    
			{total?.map((i)=> {
				return (
<tr style={i.name === 'Лист-1 0.5 ширина 1.8м' ? {backgroundColor: 'red'} :{}}>
<td >{i.name}</td>
					<td >{i.unit}</td>
					<td>{i.quantity}</td>
					<td>{i.sum}</td>
</tr>
				)
					
			})}		
	
Итого: {totalSum}
<div>
<button onClick={addBasketHandler}>В корзину</button>
</div>
    </div>
  );
}
