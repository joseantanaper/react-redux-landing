import {
  configureStore,
  ThunkAction,
  Action,
  applyMiddleware,
  getDefaultMiddleware,
} from '@reduxjs/toolkit'
import { logger } from './middleware'

import counterReducer from '../components/navbar/reducer/counter.slice'
import themeReducer from '../components/navbar/reducer/theme.slice'
import clockReducer from '../components/navbar/reducer/clock.slice'

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    theme: themeReducer,
    clock: clockReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
})

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>
