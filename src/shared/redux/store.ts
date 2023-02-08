import { configureStore } from "@reduxjs/toolkit";
import todoReducer, { StateProps } from './slicers/todoSlicer'
import storage from 'redux-persist/lib/storage'
import persistReducer from "redux-persist/es/persistReducer";
import persistStore from "redux-persist/es/persistStore";

const persistConfig = {
  key: 'root',
  storage
}

const persistedReducer = persistReducer(persistConfig, todoReducer)

export const store = configureStore({
  reducer: {
    todos: persistedReducer,
  },
})

export const persistor = persistStore(store)

export type RootState = {
  todos: StateProps;
}

export type AppDispatch = typeof store.dispatch