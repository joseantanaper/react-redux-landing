import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit'
import { RootState, AppThunk } from '@app/store'
import { fetchCount } from '@app/reducer/counter.api'

export enum CounterKey {
  COUNTER = 'counter',
}

export interface CounterState {
  value: number
  status: 'idle' | 'loading' | 'failed'
}

const INITIAL_STATE: CounterState = {
  value: Number(localStorage.getItem(CounterKey.COUNTER)) || 0,
  status: 'idle',
}

// The function below is called a thunk and allows us to perform async logic. It
// can be dispatched like a regular action: `dispatch(incrementAsync(10))`. This
// will call the thunk with the `dispatch` function as the first argument. Async
// code can then be executed and other actions can be dispatched. Thunks are
// typically used to make async requests.
export const incrementAsync = createAsyncThunk(
  'counter/fetchCount',
  async (amount: number) => {
    const response = await fetchCount(amount)
    // The value we return becomes the `fulfilled` action payload
    console.log('counterSlice', 'incrementAsync', amount, response.data)
    return response.data
  }
)

const counterSlice = createSlice({
  name: 'counter',
  initialState: INITIAL_STATE,
  reducers: {
    increment: (state) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.value += 1
      localStorage.setItem(CounterKey.COUNTER, String(Number(state.value)))
      console.log('counterSlice', 'increment', state.value)
    },
    decrement: (state) => {
      state.value -= 1
      localStorage.setItem(CounterKey.COUNTER, String(Number(state.value)))
      console.log('counterSlice', 'decrement', state.value)
    },
    // Use the PayloadAction type to declare the contents of `action.payload`
    incrementByAmount: (state, action: PayloadAction<number>) => {
      state.value += action.payload
      localStorage.setItem(CounterKey.COUNTER, String(Number(state.value)))
      console.log('counterSlice', 'incrementByAmount', state.value)
    },
    clear: (state) => {
      state.value = 0
      localStorage.setItem(CounterKey.COUNTER, String(Number(state.value)))
      console.log('counterSlice', 'clear', state.value)
    },
  },
  // The `extraReducers` field lets the slice handle actions defined elsewhere,
  // including actions generated by createAsyncThunk or in other slices.
  extraReducers: (builder) => {
    builder
      .addCase(incrementAsync.pending, (state) => {
        state.status = 'loading'
      })
      .addCase(incrementAsync.fulfilled, (state, action) => {
        state.status = 'idle'
        state.value += action.payload
        localStorage.setItem(CounterKey.COUNTER, String(Number(state.value)))
        console.log('counterSlice', 'extra', 'fulfilled', state.value)
      })
      .addCase(incrementAsync.rejected, (state) => {
        state.status = 'failed'
      })
  },
})

export const { increment, decrement, incrementByAmount, clear } =
  counterSlice.actions

// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state: RootState) => state.counter.value)`
export const selectCount = (state: RootState) => state.counter.value

// We can also write thunks by hand, which may contain both sync and async logic.
// Here's an example of conditionally dispatching actions based on current state.
export const incrementIfOdd =
  (amount: number): AppThunk =>
  (dispatch, getState) => {
    const currentValue = selectCount(getState())
    if (currentValue % 2 === 1) {
      dispatch(incrementByAmount(amount))
    }
  }
export default counterSlice.reducer
