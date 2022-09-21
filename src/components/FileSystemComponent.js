import React, { useReducer } from "react";
import TringleIcon from "../assets/icons/TringleIcon";
import Chevron from "../assets/icons/Chevron";
import FileIcon from "../assets/icons/FileIcon";





const FileSystemComponent = ({state, title = 'undefined' }) => {
  const handleOpenFileSystem = () => {
    state.dispatch({type: 'SHOW-FILE-SYSTEM', payload: !state.openFiles.showFolders})
  }
  const handleOpenFolder = (folder) => {
    state.dispatch({type: 'SHOW-FOLDER', payload: folder})
  }
  const handleOpenFile = (file) => {
    state.dispatch({type: 'SHOW-FILES', payload: file})
  }
  console.log(state)
  return(
    <div className="fileSystem">
      <div className="fileSystem__btnContainer">
          <button
          className={!state.openFiles.showFolders ? 'close': undefined}
          onClick={handleOpenFileSystem} 
          >
            <p>{title}</p>
            <div className="tringleIcon">
              <TringleIcon width={16} heigth={16} />
            </div>
          </button>
      </div>
      <div className="fileSystem__filesContainer">
        {
          !!state.openFiles.showFolders && (
            <>
            {
              state.openFiles.folders.map((folder, index) => (
                <div key={`folder-${folder.name}-${index}`}>
                  <button 
                  className="fileSystem__filesContainer__file"
                  onClick={() => handleOpenFolder(folder)}
                  >
                    <div className="fileSystem__filesContainer__file-chevron">
                      <Chevron className={folder.id === state.openFiles.currentFolder?.id ? 'chevron-active' : undefined } width={16} heigth={16}/>
                    </div>
                    {folder.icon}
                    <p>{folder.name}</p>
                  </button>
                  {
                    state.openFiles.currentFolder.id === folder.id && (
                      
                      state.openFiles.currentFolder.info.map((file, index) => (
                        <button
                          key={`file-${file.title}-${index}`}
                          onClick={ () => handleOpenFile(file)}
                        >
                          <FileIcon />
                          <h3>{file.title}</h3>
                        </button>
                      ))
                    )
                  }
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

export { FileSystemComponent }