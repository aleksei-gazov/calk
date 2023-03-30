import * as React from 'react';
import { Table } from './Table';
import { initialTotalStateType } from './totalReducer';
import { InitialTableStateType } from './utils/table-reducer';
import { addBasket, isBasket } from './basket-reducer';
import { useAppDispatch, useAppSelector } from './store';

const Total = () => {
  const total = useAppSelector<initialTotalStateType>(state=>state.total)
  const table = useAppSelector<InitialTableStateType[]>(state=>state.table)
	//  console.log(total)
	const dispatch = useAppDispatch()
	  // const totalSum = total?.reduce((acc, i)=>acc + +i.sum, 0)
	// console.log(Array.isArray(total))
const addBasketHandler = () => {
	dispatch(addBasket(total))
}

const inBasketHandler = () => {
dispatch(isBasket(true))
}
	
    return (
        <div>
					<button onClick={inBasketHandler}>Корзина</button>
					<h1>Total</h1>
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
          
					 {table.map(i=> {
						    let allTotal = total[i.tableId]
								return (
								
												<Table
												table={i}
												 total={allTotal}
												 />
												
								)
					 })}
           </tbody>
</table>
{/* Итого: {totalSum} */}
<div>
<button onClick={addBasketHandler}>В корзину</button>
</div>
        </div>
    );
};

export default Total;