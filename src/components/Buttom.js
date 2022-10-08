import React from "react";

const Buttom = (props) => {
  return(
    <div className={props.typeClass === 'primary' ? 'primary' : 'secondary'}>
      <a target="_blank" href={props.path}>{props
      }</a>
    </div>
  );
};