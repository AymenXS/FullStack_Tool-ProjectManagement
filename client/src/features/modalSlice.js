import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isOpen: false,
  isEditing: false,
  type: 'Project',
  _id: '',
  project: '',
  label: '',
  description: '',
  starting_date: new Date().toISOString().slice(0, 10),
  ending_date: new Date().toISOString().slice(0, 10),
};

const modalSlice = createSlice({
  name: 'modal',
  initialState,

  reducers: {
    openModal: (state) => {
      state.isOpen = true;
    },
    closeModal: (state) => {
      state.isOpen = false;
    },
    editActive: (state, { payload }) => {
      return { ...state, isEditing: true, ...payload };
    },
    editInactive: (state) => {
      state.isEditing = false;
    },
    changeType: (state, { payload }) => {
      state.type = payload;
    },
    setProject: (state, { payload }) => {
      state.project = payload;
    },
  },
});

export const { openModal, closeModal, editActive, editInactive, changeType, setProject } =
  modalSlice.actions;
export default modalSlice.reducer;
