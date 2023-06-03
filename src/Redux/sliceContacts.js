import { createSlice } from '@reduxjs/toolkit';

import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import initialContacts from '../data/contacts';



const sliceContacts = createSlice({
  name: 'contacts',
  initialState: {
    contacts: initialContacts,
  },
  reducers: {
    deleteContact: (state, action) => {
      state.contacts = state.contacts.filter(el => el.id !== action.payload);
    },
    addContact: (state, action) => {
      state.contacts = [...state.contacts, action.payload];
    },
  },
});

const persistConfig = {
  key: 'contacts',
  storage,
};

export const contactsReducer = persistReducer(
  persistConfig,
  sliceContacts.reducer
);

export const { deleteContact, addContact } = sliceContacts.actions;
