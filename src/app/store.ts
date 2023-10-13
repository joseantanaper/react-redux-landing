import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit"
import counterReducer from "../features/navbar/reducer/counter.slice"
import themeReducer from "../features/navbar/reducer/theme.slice"
import clockReducer from "../features/navbar/reducer/clock.slice"

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
