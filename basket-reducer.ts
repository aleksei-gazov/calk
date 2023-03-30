
let initialState: BasketStateType[] = []


export const basketReducer = (state = initialState, action: ActionType) => {
  console.log(state)
  switch(action.type) {
    case BasketAC.ADD_BASKET:
      return [...state, ...action.payload.total]
    default: return state
  }
}

export const addBasket = (total: BasketStateType[]) => ({
  type: BasketAC.ADD_BASKET,
  payload: {
total
  }
} as const)

//types
export enum BasketAC {
  ADD_BASKET = 'ADD_BASKET'
} 

export type BasketStateType = {
  productArea?: number
  cellSize?: null | string
  name: null | string 
unit: null | string
quantity: null | number
sum: null | number
}

export type AddBasket = ReturnType<typeof addBasket>


type ActionType = AddBasket