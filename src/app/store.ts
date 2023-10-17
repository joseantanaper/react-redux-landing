import {
  configureStore,
  ThunkAction,
  Action,
  applyMiddleware,
  getDefaultMiddleware,
} from '@reduxjs/toolkit'
import { logger } from './middleware'

import todosReducer from './reducer/todosSlice'
import counterReducer from './reducersOld/counter.slice'
// import clockReducer from './reducersOld/clock.slice'
import appReducer from './reducer/appSlice'

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    todos: todosReducer,
    app: appReducer,
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
