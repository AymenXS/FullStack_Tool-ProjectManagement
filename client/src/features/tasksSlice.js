const tasksReducer = (state = [], action) => {
  switch (action.type) {
    case 'ADD_TASK':
      return [...state, action.payload];
    // ... handle other actions
    default:
      return state;
  }
};

export default tasksReducer.reducer;