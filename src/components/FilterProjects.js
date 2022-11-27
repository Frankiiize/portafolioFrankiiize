import React from "react";

import { iconList, newIconList } from "../utils/iconList";

const FilterProjects = ({stateProjects , onChange, handleAllProjects, title, onClick, isActiveCheck }) => {
  console.log(stateProjects)
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
                <input checked={stateProjects.checkSelections.some((activeCheck) => activeCheck.id === item.id )} id={`check-${item.id}`} type="checkbox" value={item.id} onChange={() => onChange(item)}/>
                <label htmlFor={`check-${item.id}`}>
                  <div className="checkContainer__list__item__icon">
                   {newIconList[0][item.icon]}
                  </div>
                  <span className={stateProjects.checkSelections.some((selected) => selected.id === item.id ) ? 'active': undefined}>
                    {item.tecName}
                  </span>
                </label>
              </li>
            ))
            }
          <li style={{display : 'none'}} className="checkContainer__list__item">
            <input checked={stateProjects.activeProjects.length === stateProjects.projects.length ? true : false} id="check-all" type="checkbox" onChange={() => handleAllProjects(stateProjects.filter)}/>
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