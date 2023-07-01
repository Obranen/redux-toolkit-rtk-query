import {IUser} from '../../models/IUser'
import {createSlice, PayloadAction} from '@reduxjs/toolkit'
import {fetchUsers} from './ActionCreators'

interface IUserState {
  users: IUser[]
  isLoading: boolean
  error: string
  count: number
}

const initialState: IUserState = {
  users: [],
  isLoading: false,
  error: '',
  count: 0
}

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    increment(state, action: PayloadAction<number>) {
      state.count += action.payload
    }
  },
  extraReducers: {
    [fetchUsers.pending.type]: (state) => {
      state.isLoading = true
    },
    [fetchUsers.rejected.type]: (state, action: PayloadAction<string>) => {
      state.isLoading = false
      state.error = action.payload
    },
    [fetchUsers.fulfilled.type]: (state, action: PayloadAction<IUser[]>) => {
      state.isLoading = false
      state.error = ''
      state.users = action.payload
    }
  }
})

export default userSlice.reducer