import { ADD_LIST, DELETE_LIST, EDIT_LIST } from "../action-types";

const initialState = {};

const todoReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_LIST:
      const { id, data } = action.payload;
      return {
        ...state,
        list: [
          ...state.list,
          {
            id: id,
            data: data,
          },
        ],
      };

    case DELETE_LIST:
      const newList = state.list.filter((elem) => elem.id !== action.id);
      return {
        ...state,
        list: newList,
      };

    // case EDIT_LIST:
    //   const editList= action.payload;
    //   let newEditList = state?.todos?.find((item) => item?.id === editList?.id);
    //   return {
    //     ...state,
    //     isEdit: action.isEdit,
    //     editTodo: newEditList,
    //   };
      
    default:
      return state;
  }
};

export default todoReducer;
