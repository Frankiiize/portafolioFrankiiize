import React, { useReducer, useState } from "react";
import { makeTextLines } from "../utils/makeCodeLines";
import FolderIcon from "../assets/icons/FolderIcon";
import PhoneIcon from "../assets/icons/PhoneIcon";
import EmailIcon from "../assets/icons/EmailIcon";
const folders = [ 
  {
    name: 'bio',
    icon: <FolderIcon fill={'#E99287'} />,
    info : [
      {
        title: 'Aboutme',
        extension: 'txt',
        text: '1I have 5 years of еxperience in wed development lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod consectetur adipiscing elit, sed do eiusmod consectetur adipiscing elit, sed do eiusmod consectetur adipiscing elit, sed do eiusmod'
      },
      {
        title: 'Aboutme',
        extension: 'txt',
        text: '1I have 5 years of еxperience in wed development lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod consectetur adipiscing elit, sed do eiusmod consectetur adipiscing elit, sed do eiusmod consectetur adipiscing elit, sed do eiusmod'
      },
      {
        title: 'Aboutme',
        extension: 'txt',
        text: '1I have 5 years of еxperience in wed development lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod consectetur adipiscing elit, sed do eiusmod consectetur adipiscing elit, sed do eiusmod consectetur adipiscing elit, sed do eiusmod'
      },
      {
        title: 'carrera',
        extension: 'txt',
        text: 'mi carrera esta super cool'
      }
    ],
    id:1,
    show: false,
  },
  {
    name: 'interests',
    icon: <FolderIcon fill={'#43D9AD'} />,
    info : [
      {
        title: 'interest',
        extension: 'txt',
        text: 'me interesa todo XD'
      },
      {
        title: 'otro-archivo',
        extension: 'txt',
        text: 'otro archivo text text tex tt ext text'
      }
    ],
    id:2,
    show: false,
  },
  {
    name: 'education',
    icon: <FolderIcon fill={'#3A49A4'} />,
    info : [
      {
        title: 'Gabito school for programers who shit all',
        text: 'NO SEAS ESTUPIDO FRAN!'
      },
     
    ],
    id:3,
    show: false,
  },

]
const contactData = [
  {
    name: 'contact',
    icon: undefined,
    info : [
      {
        title: 'frankiize@gmail',
        extension: 'com',
        icon: <EmailIcon />,
        text: ' Email me at frankiize@gmail.com'

      },
      {
        title: '+56964409213',
        extension: '',
        icon: <PhoneIcon />,
        text: ' Call me at +56964409213'
      },
     
    ],
    id:4,
    show: false,
  },
]

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