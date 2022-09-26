import React, { useReducer } from "react";
import { makeTextLines } from "../utils/makeCodeLines";

const fileReducer = (state, action) => {
  switch (action.type){
    case 'SHOW-FILE-SYSTEM':
      return {
        ...state,
        showFolders: action.payload,
      }
    case 'SHOW-FOLDER':
      return{
        ...state,
        currentFolder: {
          ...action.payload,
          show: true,
        }
      }
    case 'SHOW-FILES': 
      return {
        ...state,
        currentFile: {
          text: makeTextLines(action.payload),
          title: action.payload.title,
          extension: action.payload.extension
        }
      }
    case 'LOAD-FOLDERS': 
    return {
      ...state,
      folders: action.payload
    }
    default: 
      return state;
  }
}

const useFolderState = (initialState) => {
  const [ state, dispatch ] = useReducer(fileReducer, initialState);



  return {
    state,
    dispatch
  }
}

export { useFolderState }