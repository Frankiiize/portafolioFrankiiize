import React from "react";

const IdeLayout = (props) =>{
  return(
    <section className="ideLayout">
      <div className="ideLayout__files">
          {
            props.files && (
                 props.files()
            )
          }
      </div>
      <div className="ideLayout__code">
       {
        !!props.windowOne && props.windowOne()
       }
      </div>
      <div className="ideLayout__code-secondWindow">
        <p>code2</p>
      </div>
    </section>
  );
};


export { IdeLayout };