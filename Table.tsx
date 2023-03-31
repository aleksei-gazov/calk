import * as React from 'react';



export const Table = ({table, total}) => {



 
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
	
	</tbody>
</table>

    </div>
  );
}
