import { configureStore, ThunkAction, Action, combineReducers } from "@reduxjs/toolkit";
import menuSlice from './slices/menuSlice';
import cartSlice from "./slices/cartSlice";
import favoriteSlice from "./slices/favoriteSlice";
import storage from "redux-persist/lib/storage";
import { FLUSH, PAUSE, PERSIST, PURGE, REGISTER, REHYDRATE, persistReducer, persistStore } from "redux-persist";

const persistConfig = {
  key: 'next',
  storage,
  whitelist: ['favoriteSlice', 'cartSlice',] 
};

const rootReducer = combineReducers({
  menuSlice,
  cartSlice,
  favoriteSlice
});

const persistedReducer = persistReducer(persistConfig, rootReducer);


const makeStore = () =>
  configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({
        serializableCheck: {
          ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
        },
     }),
    devTools: true,
});

export const store = makeStore();

export const persistor = persistStore(store);


export type AppDispatch = typeof store.dispatch;
export type AppStore = ReturnType<typeof makeStore>;
export type AppState = ReturnType<AppStore["getState"]>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  AppState,
  unknown,
  Action
>;



