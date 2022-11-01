import React from "react";
import { ButtonComponent } from "./ButtonComponent";

const SuccessEmail = ({onClick}) => {
  return(
    <div className="success">
      <h1>Thank You <span>​🤟</span></h1>
      <p>Your message has been accepted. You will recieve answer really soon!</p>
      <ButtonComponent 
        onClick={onClick}
        text={'send-a-new-email'}
        type={'button'}
        classes={'primary'}
      />
    </div>
  );
};


export { SuccessEmail };