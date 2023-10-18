import {
  configureStore,
  ThunkAction,
  Action,
  applyMiddleware,
  getDefaultMiddleware,
} from '@reduxjs/toolkit'
import { logger } from './middleware'

import todosReducer from './reducer/todos.slice'
import counterReducer from './reducer/counter.slice'
import appReducer from './reducer/app.slice'

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
