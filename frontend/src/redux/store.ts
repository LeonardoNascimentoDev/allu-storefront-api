import { configureStore, StateFromReducersMapObject } from '@reduxjs/toolkit'

const reducer = {
  cart: Object
}

const store = configureStore({
  reducer,
})

export type RootState = StateFromReducersMapObject<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export default store
