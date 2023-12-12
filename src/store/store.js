import { configureStore, combineReducers } from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

// Importação dos reducers
import cardReducer from './card/card';
import menuReducer from './menu/menu';

// Configuração do persist
const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['selectedCard'],
};

// Combinação de reducers
const rootReducer = combineReducers({
  selectedCard: cardReducer,
  menu: menuReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
});
