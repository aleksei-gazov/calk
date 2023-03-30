import { Dispatch } from "redux"
import { v1 } from 'uuid'
import { initialTotalStateType } from "../totalReducer"


const initialstate: InitialTableStateType[] = []

export const tableReducer = (state = initialstate, action: ActionType): InitialTableStateType[] => {
  switch (action.type) {
case 'ADD_TABLE':
    return [...state,  {tableId: action.payload.tableId}]
case 'DELETE_CALCULATION':
  let stateCopy = state
    return stateCopy.splice(0,stateCopy.length)
      default: return state
  }
}

//actions
export const getPrice = (total: initialTotalStateType, total1: initialTotalStateType, total2: initialTotalStateType) => ({
  type: 'ADD_TABLE',
  payload: {
    tableId: v1(),
    total,
    total1,
    total2,
  }
} as const)
export const deleteCalculation = () => ({
  type: 'DELETE_CALCULATION',
} as const)

//types
export type InitialTableStateType = {
  tableId: string
}
 export type GetPriceType = ReturnType<typeof getPrice>
 export type DeleteCalculationType = ReturnType<typeof deleteCalculation>
type ActionType =  GetPriceType | DeleteCalculationType