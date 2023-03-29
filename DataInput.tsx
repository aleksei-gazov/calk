import * as React from 'react';
import { InitialStateType, getConfig } from './configReducer';
import { Input } from './Input';
import { Selector } from './Selector';
import { useAppDispatch, useAppSelector } from './store';
import './style.css';
import {useForm} from 'react-hook-form';
import { InitialDataStateType } from './dataReducer';
import { productDimensions, numberOfSheets, numberOfScrews, pipeQuantity, sumSheets } from './utils/frame';
import { useDispatch } from 'react-redux';

//https://stackblitz.com/edit/react-hook-form-typescript?file=App.tsx

export const DataInput = () => {
  const dispatch = useAppDispatch()
  const config = useAppSelector<InitialStateType[]>(state=> state.config)
  const data = useAppSelector<InitialDataStateType[]>(state=> state.data)
const [materiallFilter, setMateriallFilter] = React.useState('')
  const { register, handleSubmit } = useForm()
  const onSubmit = dataForm => {
    // console.log('data: ', dataForm)
    productDimensions(dataForm.roofWidth, dataForm.roofLength)
    numberOfSheets(dataForm.roofWidth, dataForm.roofLength, dataForm.sheetWidth)
    sumSheets(data, dispatch)

    numberOfScrews(data, dataForm.roofWidth, dataForm.roofLength, materiallFilter, dispatch)
    pipeQuantity(data, dataForm.roofWidth, dataForm.roofLength, 1.2, 0.3, dispatch)
  }
let set =new Set( data.map(i=> {
  if(i.type === 'list') {
    return i.material
  }
}))
set.delete(undefined)
let arr =  [...set]

const onSelector = (e) => {
  // dispatch()
  setMateriallFilter(e.currentTarget.value)
}
// console.log(materiallFilter)



React.useEffect(()=>{
dispatch(getConfig())
},[])

let d
let valueSheet = data.map(i=> { 
  if(i.material === materiallFilter) {
    d = i.width
    return (
      <option  value={i. width} >{i. width}</option> 
                 )}        
       })
// console.log( d)
  return (
    <div>
     <div>
<label>Выберите тип покрытия:   </label>
<select onChange={onSelector}>
<option  value={'plastic'} >Пластик</option> 
<option  value={'metal'} >Металл</option> 
{/* {arr.map(i=> { 
           return (
<option  value={i} >{i}</option> 
           )
       })} */}
</select>
</div>
       <form onSubmit={handleSubmit(onSubmit)}>  
       <div>
<label>Выберите ширину листа:   </label>
<select  {...register('sheetWidth')} >
{valueSheet}
</select>
</div>
       <div>
<label>Выберите толщину листа:   </label>
<select  {...register('thickness')}>
{data.map(i=> { 
  if(i.material === materiallFilter) {
    return (
      <option   value={i.thickness} >{i.thickness}</option> 
                 )}        
       })}
</select>
</div>
<div>
<label>Выберети тип каркаса:   </label>
<select  {...register('frame')} >
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
<label>Выберети размер трубы:   </label>
<select  {...register('pipeSize')}>
{data.map(i=> {
         if(i.type === "pipe") {
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
  {...register('roofWidth')}
/>
         </div>
<div>
<label>Длинна </label>
<input
  type="number"
  //value= {config[0].min}
  min={config[0].min}
  max={config[0].max}
  name="exampleRequired"
  {...register('roofLength')}
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