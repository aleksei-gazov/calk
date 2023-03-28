import { combineReducers, legacy_createStore } from "redux";
import { configReducer } from "./configReducer";
import {TypedUseSelectorHook, useDispatch, useSelector} from "react-redux";
import { dataReducer } from "./dataReducer";
import { totalReducer } from "./totalReducer";

const rootReducer = combineReducers ({
  config: configReducer,
  data: dataReducer,
  total: totalReducer,
})

export const store = legacy_createStore(rootReducer)

export type AppRootStateType = ReturnType<typeof rootReducer>
export const useAppSelector: TypedUseSelectorHook<AppRootStateType> = useSelector