
export default function reducer(state, action) {
  switch (action.type) {
    case "setTask": {
      return { ...state, task: action.payload};
    }
    case "addTaskToList": {
      return { ...state, list: [...state.list, action.payload] };
    }
    case "deleteTask": {
      return {
        ...state,
        list: state.list.filter((task) => task.id !== action.payload),
      };
    }
    case "updateEditStatus": {
      const updatedList = state.list.map((task) => {
        return task.id === action.payload
          ? { ...task, editStatus: !task.editStatus }
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
          ? { ...task, text: state.newText, editStatus: false }
          : task;
      });

      return { ...state, list: editedList, newText: "" };
    }
  }
}
