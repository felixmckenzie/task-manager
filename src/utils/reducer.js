
export default function reducer(state, action) {
  switch (action.type) {
    
    case "addTaskToList": {
      return { ...state, list: [...state.list, action.payload] };
    }
    case "deleteTask": {
      return {
        ...state,
        list: state.list.filter((task) => task.id !== action.payload),
      };
    }
    case "updateIsEditing": {
      const updatedList = state.list.map((task) => {
        return task.id === action.payload
          ? { ...task, isEditing: !task.isEditing }
          : task;
      });

      let taskToEdit = updatedList.find((task) => task.id === action.payload);

      return { ...state, list: updatedList, newText: taskToEdit.text };
    }
    case "updateTaskText": {
      return { ...state, newText: action.payload };
    }
    case "updateList": {
      const editedList = state.list.map((task) => {
        return task.id === action.payload
          ? { ...task, text: state.newText, isEditing: false }
          : task;
      });

      return { ...state, list: editedList, newText: "" };
    }
  }
}
