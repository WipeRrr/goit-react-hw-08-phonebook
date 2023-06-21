import { configureStore } from '@reduxjs/toolkit';
import { contactsReducer } from './contacts/sliceContacts';
import { filterReducer } from './contacts/sliceFilter';

export const store = configureStore({
  reducer: {
    contacts: contactsReducer,
    filter: filterReducer,
  },
});
