import React from "react";
import FileIcon from "../assets/icons/FileIcon";
import { iconList } from "../utils/iconList";


const FileButton = ({file, index, handleOpenFile, id, component}) => {
  return(
    <>
      {
        component === 'buttom' && (
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
        )
       
        
      }
      {
        component === 'link' && (
          <a className="link" href={file.href} target='_blank'>
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
          </a>
        )
      }
    </>
  );
};


export { FileButton };