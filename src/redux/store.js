import { configureStore } from '@reduxjs/toolkit';
import { contactsReducer } from './contactsSlice';
import { filterReducer } from './filterSlice';
import { formReducer } from './formSlice';

export const store = configureStore({
  reducer: {
    filter: filterReducer,
    contacts: contactsReducer,
    form: formReducer,
  },
});
