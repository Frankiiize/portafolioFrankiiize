import React from "react";

import { IdeLayout } from "../../layouts/IdeLayout";
import { FolderSystemComponent } from "../../components/FolderSystemComponent";
import { FileInfo } from "../../components/FileInfo";
import { useFolderState } from "../../hooks/useFolderState";


const AboutmePage = () => {
  const { state, handleOpenFileSystem, handleOpenFolder, handleOpenFile } = useFolderState();

  return (
    <IdeLayout 
      files={() => 
        <>
          {
            state.folders.map((item, index) => (
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
      currentFolder= {() => 
          <FileInfo 
            file={state.currentFile}
          />
      }
    />
  );
};



export default AboutmePage;