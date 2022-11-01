import React from "react";

const ButtonComponent = (props) => {
  return(
    <button
      className={props.classes === 'primary' ? 'primary' : 'secondary'}
      type={props.type}
      onClick={props.onClick}
    >
      {props.text}
    </button>
  );
};

export { ButtonComponent };