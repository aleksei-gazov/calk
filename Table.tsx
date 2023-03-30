import * as React from 'react';



export const Table = ({table, total}) => {



   const totalSum = total?.reduce((acc, i)=>acc + +i.sum, 0)
  return (
    <div>
    
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
	
Итого: {totalSum}

    </div>
  );
}
