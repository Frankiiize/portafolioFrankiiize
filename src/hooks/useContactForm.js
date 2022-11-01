import React, { useReducer } from "react";
import { contacSendEmail  } from "../services/contact ";
const formInitialState = {
  name: '',
  email: '',
  message: '',
  isSend: false,
  error: false,
  loading: false
};

function init(formInitialState) {
  return formInitialState;
}

const formReducer = (state, action) => {
  switch (action.type){
    case 'SET-NAME' :
      return{
        ...state,
        name: action.payload,
      };
    case 'SET-EMAIL' :
      return{
        ...state,
        email: action.payload,
      };
    case 'SET-MESSAGE' :
      return{
        ...state,
        message: action.payload,
      };
    case 'MESSAGE-SEND':
      return {
        ...state,
        name: '',
        email: '',
        message: '',
        isSend: action.payload.isSend,
        loading: action.payload.loading
      };
    case 'ERROR':
      return {
        ...state,
        error: action.payload.error,
        loading: action.payload.loading
      }
    case 'FORM-LOADING':
      return {
        ...state,
        loading: action.payload
      }
    case 'RESET':
      return init(action.payload);
    default: 
      return state;
  }
}
const useContactForm = () => {
  const [ formState, formDispatch ] = useReducer(formReducer, formInitialState, init);

  const handleSetName = (string) => {
    formDispatch({type: 'SET-NAME',  payload: string})
  }
  const handleSetEmail = (string) => {
    formDispatch({type: 'SET-EMAIL',  payload: string})
  }
  const handleSetMessage = (string) => {
    formDispatch({type: 'SET-MESSAGE',  payload: string})
  }
  const handleResetState = () => {
    formDispatch({type: 'RESET', payload: formInitialState})
  }
  const onSubmitSForm = (ev) => {
    ev.preventDefault();
    formDispatch({type: 'FORM-LOADING', payload: true})
    contacSendEmail(formState).then((res) => {
      console.log(res)
      if(res.status === 201){
        formDispatch({type: 'MESSAGE-SEND', payload: {loading: false, isSend: true}})
      }else {
        formDispatch({type: 'ERROR', payload: {loading: false , error: true}})
      }
    }).catch((error) => {
      formDispatch({type: 'ERROR', payload: {loading: false , error: true}})
      console.log(error)
    })
  }
  return {
    formState,
    formDispatch,
    handleSetEmail,
    handleSetMessage,
    handleSetName,
    onSubmitSForm,
    handleResetState
  }
}

export { useContactForm };