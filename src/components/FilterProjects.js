import React from "react";

import { iconList } from "../utils/iconList";


const FilterProjects = ({stateProjects , onChange, title, onClick }) => {
  return(
    <>
    
    <div className="folderSystem__btnContainer">
          <button
          className={!stateProjects.showProjects ? 'close': undefined}
          onClick={onClick} 
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
      stateProjects.showProjects && 
      (
        <div className="checkContainer">
        <ul className="checkContainer__list">
            {
            stateProjects.filter.map((item,index) => (
              <li className="checkContainer__list__item" key={`${item.id}-${index}`}>
                <input id={`check-${item.id}`} type="checkbox" value={item.id} onChange={() => onChange(item)}/>
                <label htmlFor={`check-${item.id}`}>
                  <div className="icon">
                    {
                      item.icon && (iconList[0][item.icon]) 
                    }
                  </div>
                  <span>
                    {item.tecName}
                  </span>
                </label>
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