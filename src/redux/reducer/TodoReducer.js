const initialState = {
  todoList: []
};

const TodoReducer = (state = initialState, action) => {
  switch (action.type) {
    case "Update":
      return { ...state, todoList: action.payload };
    default:
      return state;
  }
};

export default TodoReducer;
