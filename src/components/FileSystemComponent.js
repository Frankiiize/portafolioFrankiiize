import React from "react";
import FileIcon from "../assets/icons/FileIcon";


const FileSystemComponent = ({file, index, handleOpenFile}) => {
  console.log(file)
  return(
    <button
      onClick={ () => handleOpenFile(file)}
    >
      <div className="icon">
        {
          file.icon 
          ? (file.icon)
          : (<FileIcon />)
        }
      </div>
      <div className="file-name">
        <span>{file.title}</span>
        <span>.{file.extension}</span>
      </div>
    </button>
  );
};


export { FileSystemComponent };