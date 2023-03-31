
let initialState: InitialBasketStateType = {
  basket: [],
  isBasket: false,
}


export const basketReducer = (state = initialState, action: ActionType): InitialBasketStateType => {
   console.log(state)
  switch(action.type) {
    case 'ADD_BASKET':
       console.log(action.payload.total)
      return {...state, basket: [...state.basket, ...action.payload.total]}
    case BasketAC.IS_BASKET:
      return {...state, isBasket: action.value}
    default: return state
  }
}

export const addBasket = (total: BasketStateType[]) => ({
  type: 'ADD_BASKET',
  payload: {
total
  }
} as const)
export const isBasket = (value: boolean) => ({
  type: BasketAC.IS_BASKET,
  value
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