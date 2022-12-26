import { ADD_LIST, DELETE_LIST, EDIT_LIST } from "../action-types";

export const addCount = (data) => {
  return {
    type: ADD_LIST,
    payload: {
      id: new Date().getTime().toString(),
      data: data,
    },
  };
};
export const deleteCount = (id) => {
  return {
    type: DELETE_LIST,
    id,
  };
};

export const editCount = (id) => {
    return {
        type: EDIT_LIST,
        id:id
    }
}