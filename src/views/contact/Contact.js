import React, { useEffect, useReducer } from "react";
import { IdeLayout } from "../../layouts/IdeLayout";
import { FolderSystemComponent  } from "../../components/FolderSystemComponent";
import { useFolderState  } from "../../hooks/useFolderState";
import { contactData  } from "../../services/data";
import { ContacForm } from "../../components/ContactForm";
import { TextToCode } from "../../components/TextToCode";

const findMeAlsoIn = [
  {
    name: 'find-me-also-in',
    icon: undefined,
    info : [
      {
        title: 'Instagram',
        extension: 'com',
        icon: 'emailIcon',
        //text: ' Email me at frankiize@gmail.com'
      },
    ],
    id:4,
    show: false,
  },
 ]

const formInitialState = {
  _name: '',
  _email: '',
  _message: '',
  date: Date.now(),
}

const formReducer = (state, action) => {
  switch (action.type){
    case 'SET-NAME' :
      return{
        ...state,
        _name: action.payload,
      }
    case 'SET-EMAIL' :
      return{
        ...state,
        _email: action.payload,
      }
    case 'SET-MESSAGE' :
      return{
        ...state,
        _message: action.payload,
      }
    default: 
      return state;
  }
}
const ContactPage = () =>{
  const { state, handleOpenFileSystem, handleOpenFolder, handleOpenFile, dispatch } = useFolderState();
  useEffect(() => {
    dispatch({type:'LOAD-FOLDERS', payload: [{folders: contactData, name:'contact-data', id: 2}, {folders: findMeAlsoIn, name:'find-me-also-in', id: 3}] })
  },[]);
  const [ formState, formDispatch ] = useReducer(formReducer, formInitialState);

  const handleSetName = (string) => {
    formDispatch({type: 'SET-NAME',  payload: string})
  }
  const handleSetEmail = (string) => {
    formDispatch({type: 'SET-EMAIL',  payload: string})
  }
  const handleSetMessage = (string) => {
    formDispatch({type: 'SET-MESSAGE',  payload: string})
  }
  const onSubmitSForm = (states) => {
    console.log(formState)
  }

  const codeStrings = [
    {
      string: 'const button = document.querySelector("#sendBtn")'
    },
    {
      string: 'const message = { '
    },
    {
      string: 'name:',
      render: () => 
      <>
       <span>{formState._name}</span>
      </>
    },
    {
      string: 'email:',
      render: () => 
      <>
       <span>{formState._email}</span>
      </>
    },
    {
      string: 'message: ',
      render: () => 
      <>
        <span>{formState._message}</span>
      </>
    },
    {
      string: ' button.addEventListener("click", () form.send(message))',
    },


  ]


  return(
    <IdeLayout 
      files={() => 
        <>
          {
            state.folders.map((item) => (
              <FolderSystemComponent
                key={`${item.name}-${item.id}`}
                id={item.id}
                title={item.name}
                state= {item}
                handleOpenFileSystem={handleOpenFileSystem}
                handleOpenFolder={handleOpenFolder}
                handleOpenFile={handleOpenFile}
              />
            ))
          }
        </>
      }
      windowOne= {() => 
          <ContacForm 
            state={formState}
            handleSetName={handleSetName}
            handleSetEmail={handleSetEmail}
            handleSetMessage={handleSetMessage}
            onSubmitSForm={onSubmitSForm}
          />
      }
      secondWindow = {() => 
        <>
        {
          codeStrings.map((item, index) => (
            <TextToCode 
              key={`code-${index}`}
              string={item.string}
              render={item.render}
            />
          ))

        }
        </>
      }
    />
  );
}

export default ContactPage