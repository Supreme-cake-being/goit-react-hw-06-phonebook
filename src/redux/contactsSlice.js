import { createSlice } from '@reduxjs/toolkit';

const initialState = [
  { id: 'serega', name: 'Serega Bublik', number: '228-69-47' },
  { id: 'id-2', name: 'Harry Squater', number: '239-93-21' },
  { id: 'id-3', name: 'Captain Jacked Sparrow', number: '432-34-56' },
  { id: 'id-4', name: 'Harry Shprotter', number: '432-98-09' },
];

const contactsSlice = createSlice({
  name: 'contacts',
  initialState,
  reducers: {
    addContact(state, action) {
      state.push(action.payload);
    },
    deleteContact(state, action) {
      const index = state.findIndex(
        contact => contact.id === action.payload.id
      );
      state.splice(index, 1);
    },
  },
});

export const { addContact, deleteContact } = contactsSlice.actions;
export const contactsReducer = contactsSlice.reducer;
