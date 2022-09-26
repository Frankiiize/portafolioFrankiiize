import React from "react";

const IdeLayout = (props) =>{
  return(
    <section className="ideLayout">
      <div className="ideLayout__files">
          {
            props.files && (
              <>
              {
                 props.files()
              }
              </>
            )
          }
      </div>
      <div className="ideLayout__code">
       {
        !!props.currentFolder && props.currentFolder()
       }
      </div>
      <div className="ideLayout__code-secondWindow">
        <p>code2</p>
      </div>
    </section>
  );
};


export { IdeLayout };