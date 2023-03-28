


let initialState = []

export const totalReducer = (state = initialState, action) => {
  switch(action.type) {
    default: return state
  }
}

export const toGetDataAC = () => ({
  type: TotalAC.TO_GET_DATA,
  payload: {
    
  }
})


export enum TotalAC {
  TO_GET_DATA = 'TO_GET_DATA'
} 