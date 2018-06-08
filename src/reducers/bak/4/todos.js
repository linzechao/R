const todos = (state = [], action) => {
  switch (action.type) {
    case 'ADD_TODO':
      return [
        ...state,
        {
          id: action.id,
          text: action.text,
          completed: false
        }
      ]
    case 'TOGGLE_TODO':
      return state.map(todo => {
        return (todo.id === action.id) ? ({
          // 这里不支持 ...todo
          id: todo.id,
          text: todo.text,
          completed: !todo.completed
        }) : todo
      })
    default:
      return state
  }
}

export default todos
