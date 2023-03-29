import * as React from 'react';
import { useAppSelector } from './store';
import { initialTotalStateType } from './totalReducer';

const Basket = () => {
  const total = useAppSelector<initialTotalStateType[]>(state=>state.total)
	//  console.log(total)
    return (
        <div>
           <h1>Basket</h1>
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
		
			{total?.map((i)=> {
				return (
<tr>
<td>{i.name}</td>
					<td>{i.unit}</td>
					<td>{i.quantity}</td>
					<td>{i.sum}</td>
</tr>
				)
					
			})}
			{/* <td>{total[0].name}</td>
			<td>Reeves</td>
			<td>67439</td>
			<td>10/18/1985</td> */}
		
	</tbody>
</table>
Итого:
        </div>
    );
};

export default Basket;