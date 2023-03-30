import * as React from 'react';
import { BasketStateType } from './basket-reducer';
import { useAppSelector } from './store';


export const Basket =() => {
 const basketTotal = useAppSelector<BasketStateType[]>(state=> state.basket.basket)
 console.log(Array.isArray(basketTotal))
  return (
    <div className='container'>
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