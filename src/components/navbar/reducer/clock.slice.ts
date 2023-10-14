import { createSlice } from "@reduxjs/toolkit"
import { RootState } from "../../../app/store"

const storeClockMode = "clockmode"

export interface ClockState {
  value: 0 | 1
}

const initialState: ClockState = {
  value: Number(localStorage.getItem(storeClockMode) || 0) as 0 | 1,
}

export const clockSlice = createSlice({
  name: "clock",
  initialState,
  // The `reducers` field lets us define reducers and generate associated actions
  reducers: {
    modeToggle: (state) => {
      state.value = state.value === 0 ? 1 : 0
      localStorage.setItem(storeClockMode, String(state.value))
      console.log("clockSlice", state.value)
    },
  },
})

export const { modeToggle } = clockSlice.actions

// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state: RootState) => state.counter.value)`
export const selectClockMode = (state: RootState) => state.clock.value

export default clockSlice.reducer
