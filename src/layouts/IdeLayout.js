import React from "react";

const IdeLayout = (props) =>{
  

  return(
    <section className={props.secondWindow ? 'ideLayout-secondWindow' : 'ideLayout'}>
      <div className={props.secondWindow ? 'ideLayout-secondWindow__files' : 'ideLayout__files'}>
          {
            props.files && (
                 props.files()
            )
          }
      </div>
      <div className={props.secondWindow ? 'ideLayout-secondWindow__code' : 'ideLayout__code'}>
       {
        !!props.windowOne && props.windowOne()
       }
      </div>
      {
        props.secondWindow &&
        <div className={props.secondWindow ? 'ideLayout-secondWindow__code-secondWindow' : 'ideLayout__code-secondWindow'}>
            {
              props.secondWindow()
            }
        </div>
      }
    </section>
  );
};


export { IdeLayout };