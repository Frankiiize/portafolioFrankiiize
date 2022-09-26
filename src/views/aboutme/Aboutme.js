import React, { useReducer, useState } from "react";

import { IdeLayout } from "../../layouts/IdeLayout";
import { FolderSystemComponent } from "../../components/FolderSystemComponent";
import { FileInfo } from "../../components/FileInfo";

import FolderIcon from "../../assets/icons/FolderIcon";
import PhoneIcon from "../../assets/icons/PhoneIcon";
import EmailIcon from "../../assets/icons/EmailIcon";
import { useFolderState } from "../../hooks/useFolderState";


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
    icon: <FolderIcon fill={'#E99287'} />,
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
  showFolders: false,
  folders : [],
  currentFolder: false,
  currentFile: false,
}

const contactInitialState = {
  showFolders: false,
  folders : [],
  currentFolder: false,
  currentFile: false,
}

const AboutmePage = () => {
  const { state, dispatch } = useFolderState(initialState);
  const { state: contactState, dispatch: contactDispath } = useFolderState(contactInitialState);
  useState(() => {
    dispatch({type:'LOAD-FOLDERS', payload: folders })
    contactDispath({type: 'LOAD-FOLDERS', payload: contactData})
  })
  return (
    <IdeLayout 
      files={() => 
        <>
        <FolderSystemComponent
          title={'personal info'}
          state= {state}
          dispatch={dispatch}
        />
        <FolderSystemComponent 
          title={'contact'}
          state={contactState}
          dispatch={contactDispath}
        />
        </>
      }
      currentFolder= {() => 
        <>
        <FileInfo 
          file={state.currentFile}
          state={
            {
              state,
              dispatch
            }
          }
        />
        <FileInfo 
          file={contactState.currentFile}
          state={
            {
              contactState,
              contactDispath
            }
          }
        />
        </>
      }
    />
  );
};



export default AboutmePage;