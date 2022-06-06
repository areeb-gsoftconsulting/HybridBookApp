import { createAsyncThunk ,createSlice, PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from '../store/store'

// Define a type for the slice state
interface LangState {
  isChinese: boolean,
}

// Define the initial state using that type
const initialState: LangState = {
    isChinese: false
}

export const langSlice = createSlice({
    name: 'lang',
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    langFlag: (state, action: PayloadAction<any>) => {
      state.isChinese = action.payload
      console.log(state.isChinese,",,");
      
    },
    
  },
})

export const { langFlag } = langSlice.actions

// Other code such as selectors can use the imported `RootState` type
export const selectLangFlag = (state: RootState) => state.lang.isChinese

export default langSlice.reducer