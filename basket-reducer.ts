
let initialState: InitialBasketStateType = {
  basket: [],
  isBasket: false,
}


export const basketReducer = (state = initialState, action: ActionType) => {
  console.log(state)
  switch(action.type) {
    case BasketAC.ADD_BASKET:
      return {...state, basket: [...state.basket, ...action.payload.total]}
    case BasketAC.IS_BASKET:
      return {...state, isBasket: !isBasket}
    default: return state
  }
}

export const addBasket = (total: BasketStateType[]) => ({
  type: BasketAC.ADD_BASKET,
  payload: {
total
  }
} as const)
export const isBasket = () => ({
  type: BasketAC.IS_BASKET,
} as const)

//types
export enum BasketAC {
  ADD_BASKET = 'ADD_BASKET',
  IS_BASKET = 'IS_BASKET'
} 

export type InitialBasketStateType = {
  basket: BasketStateType[] 
  isBasket: boolean 
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
export type IsBasket = ReturnType<typeof isBasket>


type ActionType = AddBasket | IsBasket