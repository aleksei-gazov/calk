import * as React from 'react';
import { BasketStateType } from './basket-reducer';
import { useAppDispatch, useAppSelector } from './store';
import {  isBasket } from './basket-reducer';


export const Basket =() => {
 const basketTotal = useAppSelector<BasketStateType[]>(state=> state.basket.basket)
 const dispatch = useAppDispatch()
 console.log(Array.isArray(basketTotal))
 const inBasketHandler = () => {
  dispatch(isBasket(false))
  }
  return (
    <div className='container'>
      	<button onClick={inBasketHandler}>К рассчетам</button>
       <table >
	<thead>
		<tr>
			<th>Наименование</th>
			<th>ед.</th>
			<th>кол-во</th>
			<th>сумма</th>
		</tr>
	</thead>
	<tbody>
			{basketTotal.map((i)=> {
				return (
<tr style={i.name === 'Лист-1 0.5 ширина 1.8м' ? {backgroundColor: 'red'} :{}}>
<td >{i.name}</td>
					<td >{i.unit}</td>
					<td>{i.quantity}</td>
					<td>{i.sum}</td>
</tr>
				)
					
			})}		
	</tbody>
</table>
{/* Итого: {totalSum} */}
    </div>
  );
}