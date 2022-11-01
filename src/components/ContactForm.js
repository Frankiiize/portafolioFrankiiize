import React from "react";
import { ButtonComponent } from "./ButtonComponent";
const ContacForm = ({state, handleSetName, handleSetEmail, handleSetMessage, onSubmitSForm}) => {
  return(
    <form className="contactForm">
      <label>
        <span>_name</span>
        <input
          type="text" 
          onChange={(ev) => handleSetName(ev.target.value)}
          />
      </label>
      <label>
        <span>_email</span>
        <input 
          type="email" 
          onChange={(ev) => handleSetEmail(ev.target.value)}
          /> 
      </label>
      <label>
        <span>_message</span>
        <textarea
          onChange={(ev) => 
          handleSetMessage(ev.target.value)}
          >
        </textarea>
      </label>
      <div className="contactForm__btn">
        
          <ButtonComponent 
            onClick={(ev) => onSubmitSForm(ev)}
            text={'submit-message'}
            type={'button'}
            classes={'primary'}
          />
      </div>
    </form>
  );
};

export { ContacForm };