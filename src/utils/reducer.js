import uniqid from "uniqid";

export default function reducer(state, action) {
  switch (action.type) {
    case "setTask": {
      return { ...state, task: { text: action.payload, id: uniqid() } };
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
          ? { ...task, editStatus: true } : task;
      });

         return { ...state, list: updatedList };
    }
    case "updateTaskText":{
        return {...state, newText: action.payload}
    }
    case "updateList":{
        const editedList = state.list.map((task)=>{
            return task.id === action.payload ? {...task, text: state.newText, editStatus: false} : task
        });

        return {...state, list: editedList, newText: ""}
    }
  }
}
