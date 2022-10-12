import React from "react";
import ExpressIcon from "../assets/icons/ExpressIcon";

import { iconList, tecIconList } from "../utils/iconList";

const FilterProjects = ({stateProjects , onChange, handleAllProjects, title, onClick }) => {
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
                   {iconList[0][item.icon]}
                  </div>
                  <span>
                    {item.tecName}
                  </span>
                </label>
              </li>
            ))
            }
          <li className="checkContainer__list__item">
            <input id="check-all" type="checkbox" onChange={() => handleAllProjects(stateProjects.filter)}/>
            <label htmlFor="check-all">All</label>
          </li>
        </ul>
      </div>
      )
    }
    </>
  );
};

export { FilterProjects };