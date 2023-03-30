import * as React from 'react';
import { useAppSelector } from './store';
import { Table } from './Table';
import { initialTotalStateType } from './totalReducer';
import { InitialTableStateType } from './utils/table-reducer';

const Total = () => {
  const total = useAppSelector<initialTotalStateType>(state=>state.total)
  const table = useAppSelector<InitialTableStateType[]>(state=>state.table)
	//  console.log(total)
	
	
    return (
        <div>
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
        </div>
    );
};

export default Total;