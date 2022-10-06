import React, { useState } from "react";

import { iconList } from "../utils/iconList";


const FilterProjects = ({stateProjects , onChange, title }) => {
  const [ showProjects, setShowProjects ] = useState(false)
  return(
    <>
    
    <div className="folderSystem__btnContainer">
          <button
          className={!showProjects ? 'close': undefined}
          onClick={() => setShowProjects(!showProjects)} 
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
    {
      showProjects && 
      (
        <div className="checkContainer">
        <ul className="checkContainer__list">
            {
            stateProjects.filter.map((item,index) => (
              <li className="checkContainer__list__item" key={`${item.id}-${index}`}>
                <input id={`check-${item.id}`} type="checkbox" value={item.id} onChange={() => onChange(item)}/>
                <div className="checkContainer__list__item-icon">
                  {
                    item.icon && (iconList[0][item.icon]) 
                  }
                </div>
                <label htmlFor={`check-${item.id}`}>{item.tecName}</label>
              </li>
            ))
            }
        </ul>
      </div>
      )
    }
 
    </>
  );
};

export { FilterProjects };