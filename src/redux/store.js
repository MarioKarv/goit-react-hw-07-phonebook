import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import { persistStore } from 'redux-persist';

import reducer from './reducer';


export const store = configureStore({
  reducer: reducer,
  middleware: getDefaultMiddleware({
    serializableCheck: false,
  }),
});
export const persistor = persistStore(store);