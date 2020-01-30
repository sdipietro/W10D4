import * as TODOS from '../actions/todoActions';

const initialState = {
  1: {
    id: 1,
    title: "wash car",
    body: "with soap",
    done: false
  },
  2: {
    id: 2,
    title: "wash dog",
    body: "with shampoo",
    done: true
  }
};

const todosReducer = (state = initialState, action) => {
  let newState = {};
  
  Object.freeze(state);

  switch (action.type) {
    case TODOS.RECEIVE_TODOS:
      action.todos.forEach(todo => {
        newState[todo.id] = todo;
      });
      return newState;
    case TODOS.RECEIVE_TODO:
      const todo = {
        [action.todo.id]: action.todo
      };
      return Object.assign({}, state, todo);
    default:
      return state;
  }
};

export default todosReducer;