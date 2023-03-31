import { GetPriceType } from "./utils/table-reducer"



let initialState: initialTotalStateType = {

}


export const totalReducer = (state = initialState, action: ActionType): initialTotalStateType => {
  //  console.log(state)
  switch(action.type) {
    case 'ADD_TABLE':
      // console.log(action.payload.total)
    //  console.log(action.payload.tableId)
      return { [action.payload.Id]: [action.payload.total, action.payload.total1, action.payload.total2]}
    default: return state
  }
}

// export const toGetDataAC = (total: initialTotalStateType) => ({
//   type: TotalAC.TO_GET_DATA,
//   payload: {
// total
//   }
// })

//types
export enum TotalAC {
  TO_GET_DATA = 'TO_GET_DATA'
} 
export type TotalStateType = {
  productArea?: number
  cellSize?: null | string
  name: null | string 
unit: null | string
quantity: null | number
sum: null | number
}
export type initialTotalStateType = {
  [key: string]: Array<TotalStateType>
}
type ActionType = GetPriceType