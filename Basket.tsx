import * as React from 'react';
import { useAppSelector } from './store';
import { Table } from './Table';
import { initialTotalStateType } from './totalReducer';

const Basket = () => {
  const total = useAppSelector<initialTotalStateType[]>(state=>state.total)
	//  console.log(total)
	const totalSum = total?.reduce((acc, i)=>acc + +i.sum, 0)
	 console.log(totalSum)
    return (
        <div>
           <h1>Basket</h1>
          <Table totalSum={totalSum} total={total}/>
        </div>
    );
};

export default Basket;