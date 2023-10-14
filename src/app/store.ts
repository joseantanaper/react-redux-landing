import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit"
import counterReducer from "../components/navbar/reducer/counter.slice"
import themeReducer from "../components/navbar/reducer/theme.slice"
import clockReducer from "../components/navbar/reducer/clock.slice"

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    theme: themeReducer,
    clock: clockReducer,
  },
})

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>
