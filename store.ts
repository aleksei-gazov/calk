import { AnyAction,combineReducers, legacy_createStore, applyMiddleware } from "redux";
import { configReducer } from "./configReducer";
import {TypedUseSelectorHook, useDispatch, useSelector} from "react-redux";
import { dataReducer } from "./dataReducer";
import { totalReducer } from "./totalReducer";
import thunk, {ThunkDispatch} from 'redux-thunk';
import { tableReducer } from "./utils/table-reducer";
import { basketReducer } from "./basket-reducer";

const rootReducer = combineReducers ({
  config: configReducer,
  data: dataReducer,
  total: totalReducer,
  table: tableReducer,
  basket: basketReducer,
})

export const store = legacy_createStore(rootReducer, applyMiddleware(thunk))

export type AppRootStateType = ReturnType<typeof rootReducer>
export const useAppSelector: TypedUseSelectorHook<AppRootStateType> = useSelector
export type StoreType = typeof store
export type ThunkDispatchType = ThunkDispatch<StoreType, any, AnyAction>
export const useAppDispatch = () => useDispatch<ThunkDispatchType>()