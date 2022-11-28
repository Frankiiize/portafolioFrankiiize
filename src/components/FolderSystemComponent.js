import React, { useReducer } from "react";
import TringleIcon from "../assets/icons/TringleIcon";
import Chevron from "../assets/icons/Chevron";
import { FileButton, FileSystemComponent } from "./FileButtom";
import FolderIcon from "../assets/icons/FolderIcon";
import { iconList } from "../utils/iconList";


const FolderSystemComponent = ({state,id,handleOpenFileSystem, handleOpenFolder, handleOpenFile,  title = 'undefined' }) => {
  return(
    <div className="folderSystem" >
      <div className="folderSystem__btnContainer">
          <button
          className={!state.showFolders ? 'close': undefined}
          onClick={() => handleOpenFileSystem({id: id, showFolders: !state.showFolders})} 
          >
            <p>{title}</p>
            <div className="tringleIcon">
              <div>
                {
                  (iconList[0]['tringleIcon'])
                }
              </div>
            </div>
          </button>
      </div>
      <div className="folderSystem__titleBottomStroke"></div>
      <div className="folderSystem__folderContainer">
        {
          !!state.showFolders && (
              state.folder.map((item, index) => ( 
                <div key={`folder-${item.id}-${index}`}>
                  <button 
                  className="folderSystem__folderContainer__folderBtn"
                  onClick={() => handleOpenFolder(item, id)}
                  >
                    <div className="folderSystem__folderContainer__folderBtn-chevron">
                      <Chevron className={item.id === state.currentFolder?.id ? 'chevron-active' : undefined } width={16} heigth={16}/>
                    </div>
                    {
                      item.icon 
                      ? (iconList[0][item.icon])
                      : <FolderIcon fill={'#E99287'} />
                    }
                    <p>{item.name}</p>
                  </button>
                  <div className="folderSystem__folderContainer__fileBtn">
                    {
                      state.currentFolder.id === item.id && (
                        state.currentFolder.info.map((file, index) => (
                          <div
                            key={`file-${item.id}-${id}${index}`}
                            >
                              {
                                  <FileButton 
                                     file={file}
                                     index={index}
                                     handleOpenFile={handleOpenFile}
                                     id={id}
                                     component={item.infoComponent}
                                   />
                              }
                            
                          </div>
                        ))
                      )
                    }
                  </div>
                </div>
                )
              )
          )
        }
      </div>
    </div>
  )
}

export { FolderSystemComponent }