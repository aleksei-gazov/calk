import * as React from 'react';
import { InitialStateType } from './configReducer';
import { Input } from './Input';
import { Selector } from './Selector';
import { useAppSelector } from './store';
import './style.css';
import {useForm} from 'react-hook-form';
import { InitialDataStateType } from './dataReducer';

export const DataInput = () => {
  const config = useAppSelector<InitialStateType[]>(state=> state.config)
  const data = useAppSelector<InitialDataStateType[]>(state=> state.data)
const [materiallFilter, setMateriallFilter] = React.useState('')
  const { register, handleSubmit } = useForm()
  const onSubmit = data => {
    console.log('data: ', data)
  }
let set =new Set( data.map(i=> {
  if(i.type === 'list') {
    return i.material
  }
}))
set.delete(undefined)
let arr =  [...set]

const onSelector = (e) => {
  setMateriallFilter(e.currentTarget.value)
  // console.log(e.currentTarget.value)
}
console.log(materiallFilter)
  return (
    <div>
     <div>
<label>Выберите тип покрытия:   </label>
<select onChange={onSelector}>
{arr.map(i=> { 
           return (
<option  value={i} >{i}</option> 
           )
       })}
</select>
</div>
       <form onSubmit={handleSubmit(onSubmit)}>  
       <div>
<label>Выберите ширину листа:   </label>
<select  {...register('sheetWidth')}>
{data.map(i=> { 
  if(i.material === materiallFilter) {
    return (
      <option  value={i. width} >{i. width}</option> 
                 )}        
       })}
</select>
</div>
       <div>
<label>Выберите толщину листа:   </label>
<select  {...register('thickness')}>
{data.map(i=> { 
  if(i.material === materiallFilter) {
    return (
      <option  value={i.thickness} >{i.thickness}</option> 
                 )}        
       })}
</select>
</div>
<div>
<label>Выберети тип каркаса:   </label>
<select  {...register('frame')}>
{config.map(i=> {
         if(i.type === 'frame') {
           return (
<option  value={i.name} >{i.name}</option> 
           )
         }
       })}
</select>
</div>
<div>
         <label>Ширина  </label>
<input
  type="number"
  min={config[1].min}
  max={config[1].max}
  name="example"
  {...register('roof width')}
/>
         </div>
<div>
<label>Длинна </label>
<input
  type="number"
  min={config[0].min}
  max={config[0].max}
  name="exampleRequired"
  {...register('roof length')}
/>
</div>
<div>
<input type="submit" />
</div>
</form>
      {/* <div>
      <span>Выберети тип покрытия:</span> <Selector data={data} onSelectValue={onSelectValue}/>
      </div>  */}
    {/* <Input />
    <Input/>
    <Selector data={data} onSelectValue={onSelectValue}/> */}
    </div>
  );
}