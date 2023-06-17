import { createSlice } from '@reduxjs/toolkit';
import { nanoid } from 'nanoid';
import { fetchAllContacts, fetchAddContacts, fetchDeleteContacts } from './contact-operations';

const initialState = {items: [], isLoading: false, error: null}

const contactSlice = createSlice({
  name: 'contacts',
  initialState,
  extraReducers: builder => {
    builder
      .addCase(fetchAllContacts.pending, store => {
        store.isLoading = true;
      })
      .addCase(fetchAllContacts.fulfilled, (store, { payload }) => {
        store.isLoading = false;
        store.items = payload;
      })
      .addCase(fetchAllContacts.rejected, (store, { payload }) => {
        store.isLoading = false;
        store.error = payload;
      })
      .addCase(fetchAddContacts.pending, store => {
        store.isLoading = true;
      })
      .addCase(fetchAddContacts.fulfilled, (store, { payload }) => {
        store.isLoading = false;
        store.items.push(payload);
      })
      .addCase(fetchAddContacts.rejected, (store, { payload }) => {
        store.isLoading = false;
        store.error = payload;
      })
      .addCase(fetchDeleteContacts.pending, store => {
        store.isLoading = true;
      })
      .addCase(fetchDeleteContacts.fulfilled, (store, { payload }) => {
        store.isLoading = false;
        const index = store.items.findIndex(item => item.id === payload);
        store.items.splice(index, 1);
      })
      .addCase(fetchDeleteContacts.rejected, (store, { payload }) => {
        store.isLoading = false;
        store.error = payload;
      });
  },
});

export default contactSlice.reducer;



// const contactSlice = createSlice({
//   name: 'contacts',
//   initialState: [],
//   reducers: {
//     addContact: {
//       reducer: (state, { payload }) => [...state, payload],

//       prepare: data => {
//         return { payload: { id: nanoid(), ...data } };
//       },
//     },
//     removeContact: (state, { payload }) =>
//       state.filter(contact => contact.id !== payload),
//   },
// });

// export const { addContact, removeContact } = contactSlice.actions;