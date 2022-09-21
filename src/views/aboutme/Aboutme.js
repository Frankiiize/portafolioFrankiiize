import React, { useReducer, useState } from "react";

import { IdeLayout } from "../../layouts/IdeLayout";
import { FileSystemComponent } from "../../components/FileSystemComponent";
import { FileInfo } from "../../components/FileInfo";

import FolderIcon from "../../assets/icons/FolderIcon";


const folders = [ 
  {
    name: 'bio',
    icon: <FolderIcon fill={'#E99287'} />,
    info : [
      {
        title: 'About me',
        text: '1I have 5 years of еxperience in wed development lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod consectetur adipiscing elit, sed do eiusmod consectetur adipiscing elit, sed do eiusmod consectetur adipiscing elit, sed do eiusmod'
      },
      {
        title: 'carrera',
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
        text: 'me interesa todo XD'
      },
      {
        title: 'otro archivo',
        text: 'otro archivo text text texttexttexttexttexttexttexttexttexttexttexttexttexttexttexttext text'
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

const initialState = {
  showFolders: false,
  folders : [],
  currentFolder: false,
  currentFile: false,
}

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
        currentFile: action.payload
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

const AboutmePage = () => {
  const [ openFiles, dispatch ] = useReducer(fileReducer, initialState);
  useState(() => {
    dispatch({type:'LOAD-FOLDERS', payload: folders })
  })
  return (
    <IdeLayout 
      files={() => 
        <FileSystemComponent
          title={'personal info'}
          state= {
            {
              openFiles,
              dispatch
            }
          }
        />
      }
      currentFolder= {() => 
        <FileInfo 
          file={openFiles.currentFile}
        />
      }
    />
  );
};



export default AboutmePage;