import { saveState } from "./local-storage";


export default function reducer(state, action) {
  switch (action.type) {
    
    case "addTaskToList": {
      const newState = { ...state, list: [...state.list, action.payload] };
      saveState(newState)
      return newState
    }
    case "deleteTask": {
      const newState = {
        ...state,
        list: state.list.filter((task) => task.id !== action.payload),
      };
      saveState(newState)
      return newState
    }
    case "updateIsEditing": {
      const updatedList = state.list.map((task) => {
        return task.id === action.payload
          ? { ...task, isEditing: !task.isEditing }
          : task;
      });

      const taskToEdit = updatedList.find((task) => task.id === action.payload);

    const  newState = { ...state, list: updatedList, newText: taskToEdit.text };
      saveState(newState);
      return newState
    }
    case "updateTaskText": {
      const newState = { ...state, newText: action.payload };
      saveState(newState)
      return newState
    }
    case "updateList": {
      const editedList = state.list.map((task) => {
        return task.id === action.payload
          ? { ...task, text: state.newText, isEditing: false }
          : task;
      });

      const newState = { ...state, list: editedList, newText: "" };
      saveState(newState)
      return newState
    }
    default:
      return state
  }
 
}
