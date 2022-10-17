import React, { useEffect } from "react";

import { IdeLayout } from "../../layouts/IdeLayout";
import { FolderSystemComponent } from "../../components/FolderSystemComponent";
import { FileInfo } from "../../components/FileInfo";
import { useFolderState } from "../../hooks/useFolderState";
import { folders, contactData } from "../../services/data";


const AboutmePage = () => {
  const { state, handleOpenFileSystem, handleOpenFolder, handleOpenFile, dispatch } = useFolderState();
  useEffect(() => {
    dispatch({type:'LOAD-FOLDERS', payload: [{folders, name:'personal-info', id: 1}, {folders: contactData, name:'contact-data', id: 2}] })
  },[])
  console.log(state.currentFile)
  return (
    <IdeLayout 
      files={() => 
        <>
          {
            state.folders.map((item) => (
              <FolderSystemComponent
                key={`${item.name}-${item.id}`}
                id={item.id}
                title={item.name}
                state= {item}
                handleOpenFileSystem={handleOpenFileSystem}
                handleOpenFolder={handleOpenFolder}
                handleOpenFile={handleOpenFile}
              />
            ))
          }
        </>
      }
      windowOne= {() => 
          <FileInfo 
            file={state.currentFile}
          />
      }
    />
  );
};



export default AboutmePage;