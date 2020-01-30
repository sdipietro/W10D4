export const allTodos = ({todos}) => {
  const todosArray = Object.keys(todos).map(todoKey => todos[todoKey] );
  return todosArray;
};