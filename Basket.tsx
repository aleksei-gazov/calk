import * as React from 'react';
import { useAppSelector } from './store';
import { Table } from './Table';
import { initialTotalStateType } from './totalReducer';
import { InitialTableStateType } from './utils/table-reducer';

const Basket = () => {
  const total = useAppSelector<initialTotalStateType>(state=>state.total)
  const table = useAppSelector<InitialTableStateType[]>(state=>state.table)
	 console.log(total)
	
	
    return (
        <div>
           <h1>Basket</h1>
					 {table.map(i=> {
						    let allTotal = total[i.tableId]
								return (
												<Table
												table={i}
												 total={allTotal}
												 />
								)
					 })}
          
        </div>
    );
};

export default Basket;