import * as React from 'react';

const Basket = () => {
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
		<tr>
			<td>Gloria</td>
			<td>Reeves</td>
			<td>67439</td>
			<td>10/18/1985</td>
		</tr>
		...
	</tbody>
</table>
        </div>
    );
};

export default Basket;