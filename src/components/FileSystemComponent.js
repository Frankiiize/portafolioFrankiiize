import React from "react";
import FileIcon from "../assets/icons/FileIcon";
import { iconList } from "../utils/iconList";


const FileSystemComponent = ({file, index, handleOpenFile, id}) => {
  return(
    <button
      onClick={ () => handleOpenFile(file, id)}
    >
      <div className="icon">
        {
          file.icon 
          ? (iconList[0][file.icon])
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