import React, { useReducer } from "react";
import TringleIcon from "../assets/icons/TringleIcon";
import Chevron from "../assets/icons/Chevron";
import { FileSystemComponent } from "./FileSystemComponent";





const FolderSystemComponent = ({state,dispatch, title = 'undefined' }) => {
  const handleOpenFileSystem = () => {
    dispatch({type: 'SHOW-FILE-SYSTEM', payload: !state.showFolders})
  }
  const handleOpenFolder = (folder) => {
    dispatch({type: 'SHOW-FOLDER', payload: folder})
  }
  const handleOpenFile = (file) => {
    dispatch({type: 'SHOW-FILES', payload: file})
  }
  return(
    <div className="folderSystem">
      
      <div className="folderSystem__btnContainer">
          <button
          className={!state.showFolders ? 'close': undefined}
          onClick={handleOpenFileSystem} 
          >
            <p>{title}</p>
            <div className="tringleIcon">
              <TringleIcon width={16} heigth={16} />
            </div>
          </button>
      </div>
      <div className="folderSystem__titleBottomStroke"></div>
      <div className="folderSystem__folderContainer">
        {
          !!state.showFolders && (
            <>
            {
              state.folders.map((folder, index) => (
                <div key={`folder-${folder.name}-${index}`}>
                  <button 
                  className="folderSystem__folderContainer__folderBtn"
                  onClick={() => handleOpenFolder(folder)}
                  >
                    <div className="folderSystem__folderContainer__folderBtn-chevron">
                      <Chevron className={folder.id === state.currentFolder?.id ? 'chevron-active' : undefined } width={16} heigth={16}/>
                    </div>
                    {folder.icon}
                    <p>{folder.name}</p>
                  </button>
                  <div className="folderSystem__folderContainer__fileBtn">
                    {
                      state.currentFolder.id === folder.id && (
                        state.currentFolder.info.map((file, index) => (
                          <div
                            key={`file-${file.title}-${index}`}
                            >
                            <FileSystemComponent 
                              file={file}
                              index={index}
                              handleOpenFile={handleOpenFile}
                            />
                          </div>
                        ))
                      )
                    }
                  </div>
                </div>
                
              ))
            }
            </>
          )
        }
      </div>
    </div>
  )
}

export { FolderSystemComponent }