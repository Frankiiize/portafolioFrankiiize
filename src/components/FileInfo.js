import React, { useState } from "react";

const FileInfo = ({file}) => {

  const lines = file.text;

  return (
    <>
    {
      !!file && (
        <div className="fileInfo">
         
          {
           lines.map((e, index) => (
            <div key={`line-${e.id}`}>
              <div className="fileInfo__lines" >
                <p className="fileInfo__lines-number">{e.id}</p>
                <div className="fileInfo__lines-code">
                  {
                    e.id === 1 
                    ? (
                      <>
                        <span>/**</span>
                        <p>{e.text}</p>
                      </>
                      )
                    : (
                      <>
                        <span>*</span>
                        <p>{e.text}</p>
                      </>
                      )
                  }
                
                </div>
              </div>
              <div className="fileInfo__lines-lastLine">
                {
                  e.id === lines.length && (
                    <>
                      <p className="fileInfo__lines-number">{e.id + 1}</p>
                      <p>*/</p>
                    </>
                  )
                }
              </div>
            </div>
           ))
          }
        </div>
      )
    }
    </>
  )
}



export { FileInfo };