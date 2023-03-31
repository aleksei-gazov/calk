import * as React from 'react';
import { Table } from './Table';
import { initialTotalStateType } from './totalReducer';
import { InitialTableStateType } from './utils/table-reducer';
import { addBasket, isBasket } from './basket-reducer';
import { useAppDispatch, useAppSelector } from './store';

const Total = () => {
  const total = useAppSelector<initialTotalStateType>(state=>state.total)
  const table = useAppSelector<InitialTableStateType>(state=>state.table)
	//  console.log(total)
	const dispatch = useAppDispatch()
	  // const totalSum = total?.reduce((acc, i)=>acc + +i.sum, 0)
	// console.log(Array.isArray(total))
	let allTotal = total[table.tableId]
const addBasketHandler = () => {
	 dispatch(addBasket(allTotal))
	  console.log('Basket')
}

const inBasketHandler = () => {
dispatch(isBasket(true))
}
	
    return (
        <div>
					<button onClick={inBasketHandler}>Корзина</button>
					<h1>Total</h1>
					
          
					 {/* {table.map(i=> {
						     allTotal = total[i.tableId] */}
								{/* return ( */}
								
												<Table
												table={table.tableId}
												 total={allTotal}
												 />
												
								{/* ) */}
					 {/* })}
         */}
{/* Итого: {totalSum} */}
<div>
<button onClick={addBasketHandler}>В корзину</button>
</div>
        </div>
    );
};

export default Total;