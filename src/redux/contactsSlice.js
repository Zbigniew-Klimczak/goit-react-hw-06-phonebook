import { createSlice, nanoid } from '@reduxjs/toolkit';
import { getLocalContacts, updateLocalContacts } from 'utils/LocalhostFunc';
const contactsInitialState = getLocalContacts();
const contactsSlice = createSlice({
  name: 'contacts',
  initialState: contactsInitialState,
  reducers: {
    addContact: {
      reducer(state, action) {
        state.push(action.payload);
        updateLocalContacts(state);
      },
      prepare(name, number) {
        return {
          payload: {
            name: name.trim(),
            number: number.trim(),
            id: nanoid(),
          },
        };
      },
    },
    deleteContact(state, action) {
      const index = state.findIndex(contact => contact.id === action.payload);
      state.splice(index, 1);
      updateLocalContacts(state);
    },
  },
});
export const { addContact, deleteContact } = contactsSlice.actions;
export const contactsReducer = contactsSlice.reducer;
