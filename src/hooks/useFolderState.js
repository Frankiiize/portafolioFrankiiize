import React, { useReducer, useState } from "react";
import { makeTextLines } from "../utils/makeCodeLines";
import { folders, contactData } from "../services/data";

const initialState = {
  folders : [],
}
const fileReducer = (state, action) => {
  const indexFolder = state.folders.findIndex((item) => item.id === action.payload.id);
  switch (action.type){
    case 'SHOW-FILE-SYSTEM':
      const folder = {...state.folders[indexFolder], showFolders: action.payload.showFolders} ;
      const newFolderState = state.folders.map((item) => {
        if(item.id === action.payload.id){
          item = folder
        }
        return item
      })
      return {
        ...state,
        folders: newFolderState
      }
    case 'SHOW-FOLDER':
      const newFolderCurrentFolder = state.folders.map((item) => {
        if(item.id === action.payload.id){
          item.currentFolder = action.payload.folder
        }
        return item
      })
      
      return{
        ...state,
        folders: newFolderCurrentFolder
      }
    case 'SHOW-FILES': 
    const currentFile = {
          text: makeTextLines(action.payload.file),
          title: action.payload.file.title,
          extension: action.payload.file.extension,
          show: true
          }
      return {
        ...state,
        currentFile
      }
    case 'LOAD-FOLDERS': 
    return {
      ...state,
      currentFile: false,
      folders: action.payload.map((item,index) =>  {
        return {
          folder: item.folders,
          id: item.id,
          showFolders: false,
          name: item.name,
          currentFolder:false,
        }
      } )
    }
    default: 
      return state;
  }
}

const useFolderState = () => {
  const [ state, dispatch ] = useReducer(fileReducer, initialState);
  useState(() => {
    dispatch({type:'LOAD-FOLDERS', payload: [{folders, name:'personal-info', id: 1}, {folders: contactData, name:'contact-data', id: 2}] })
  },[])
  const handleOpenFileSystem = (folder) => {
    dispatch({type: 'SHOW-FILE-SYSTEM', payload: folder})
  }
  const handleOpenFolder = (folder, id) => {
    dispatch({type: 'SHOW-FOLDER', payload: {folder,id}})
  }
  const handleOpenFile = (file, id) => {
    dispatch({type: 'SHOW-FILES', payload: {file,id}})
  }

  return {
    state,
    dispatch,
    handleOpenFileSystem,
    handleOpenFolder,
    handleOpenFile,
  }
}

export { useFolderState }