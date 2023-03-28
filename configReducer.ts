import { Dispatch } from "react"
// import { configAIP } from "./api"


const initialstate: InitialStateType[] = [
  {
    type: "size",
    key: "length",
    name: "Длина",
    min: 5,
    max: 50,
    step: 0.2
  },
  {
    type: "size",
    key: "width",
    name: "Ширина",
    min: 5,
    max: 25,
    step: 0.2
  },
  {
    type: "frame",
    key: "light",
    name: "Легкая",
    step: 1.2
  },
  {
    type: "frame",
    key: "standard",
    name: "Стандартная",
    step: 1
  },
  {
    type: "frame",
    key: "strong",
    name: "Усиленная",
    step: 0.8
  },
  {
    type: "material",
    key: "metal",
    name: "Метал"
  },
  {
    type: "material",
    key: "plastic",
    name: "Пластик"
  },
  {
    type: "fix",
    key: "plastic",
    name: "Пластик",
    value: 10
  },
  {
    type: "fix",
    key: "metal",
    name: "Металл",
    value: 5
  }
]

export type InitialStateType = {
  type: string
    key: string
    name: string
    min?: number
    max?: number
    step?: number
    value?: number
}
export const configReducer = (state= initialstate, action) => {
  switch(action.type) {
    default: return state
  }
}
// action
export const setConfig = (config: InitialStateType[]) => ({
  type: 'GET_CONFIG',
  payload: {
config
  }
})

export const getConfig = () => async(dispatch: Dispatch<any>) => {
 // let response = await configAIP.getConfigData()
 // dispatch(setConfig(response.data))
}

