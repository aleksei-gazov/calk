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
	// console.log(Array.isArray(total))
const addBasketHandler = () => {
	dispatch(addBasket(total))
}

const inBasketHandler = () => {
dispatch(isBasket())
}
	
    return (
        <div>
					<button onClick={inBasketHandler}>Корзина</button>
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
           <h1>Total</h1>
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
<div>
<button onClick={addBasketHandler}>В корзину</button>
</div>
        </div>
    );
};

export default Total;