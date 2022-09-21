import React from "react";

const FileInfo = ({file}) => {
  console.log(file)
  return (
    <>
    {
      !!file && (
        <>
          <h1 style={{color: 'white'}}>{file.name}</h1>
          <p style={{color: 'white'}}>{file.text}</p>
        </>
      )
    }
    </>
  )
}

export { FileInfo };