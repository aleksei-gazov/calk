
export type initialTotalStateType = {
  productArea?: number
  cellSize?: null | string
  name: null | string 
unit: null | string
quantity: null | number
sum: null | number
}

let initialState: initialTotalStateType[] = []


export const totalReducer = (state = initialState, action) => {
  switch(action.type) {
    case TotalAC.TO_GET_DATA:
    console.log(action.payload.total)
      return [...state, action.payload.total]
    default: return state
  }
}

export const toGetDataAC = (total: initialTotalStateType) => ({
  type: TotalAC.TO_GET_DATA,
  payload: {
total
  }
})


export enum TotalAC {
  TO_GET_DATA = 'TO_GET_DATA'
} 