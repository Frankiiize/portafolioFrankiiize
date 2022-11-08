import React, { useEffect, useReducer, useState } from "react";
import { FilterProjects } from "../../components/FilterProjects";
import { ProjectCards } from "../../components/ProjectCards";
import { IdeLayout } from "../../layouts/IdeLayout";
import { getAllProjects } from "../../services/projects/index"
import { tecIconList } from "../../utils/iconList";
import { getTecnologyPropertys } from "../../utils/utilFuncs"



const initialState = {
  projects: [],
  filter: [],
  checkSelections: [],
  activeProjects: [],
  showProjects: true,
  loading: true,
};

const reducer = (state, action) => {
  switch (action.type){
    
    case 'LOAD':
      const getTecnologies = (arr) => {
        let allTecnologies = [];
        for (let i = 0; i < arr.length; i++) {
          const projectTecnologies = arr[i].tecnologies;
          projectTecnologies.map((tec) => {
            if(allTecnologies.length <= 0){
              allTecnologies.push(tec);
            }else {
              const currentTecIDs = allTecnologies.map((item) => item.id);
              const isExist = currentTecIDs.includes(tec.id);
              if(!isExist) {
                allTecnologies.push(tec);
              };
            };
          });
        };
        return allTecnologies;
      }
      return {
        ...state,
        projects: action.payload,
        loading: false,
        filter: getTecnologies(action.payload),
      };
    case 'SELECT-PROJECT':
      let currentChecks = [];
      const isTecActive = state.checkSelections.some((obj) => {
        return obj.id === action.payload.id;
      });
      if(!isTecActive){
        const payload = {...action.payload, active: true}
        const checkState = [...state.checkSelections];
        const newState = [...checkState, payload];
        currentChecks = newState;
      }else {
        const findObj = state.checkSelections.filter((obj) => {
          return obj.id !== action.payload.id;
        });
        currentChecks = findObj;
      };
      return{
        ...state,
       checkSelections : currentChecks
       
      };
    case 'SELECT-ALL-PROJECTS': 
    const isCheckSelections = state.checkSelections.length <= 0;
    let allSelections = []
    if(isCheckSelections){
      allSelections = [...state.checkSelections , ...action.payload]
    }else {
      allSelections = [];
    }
    return {
      ...state,
      checkSelections: allSelections
    };
    case 'SELECTED-PROJECTS':
      const activeTecnologiesID = action.payload.map((item) => item.id); 
      const allProjects =[ ...state.projects];
      const newState = allProjects.filter((item,index) => {
        const projectTecnologies = item.tecnologies;
        for (let i = 0; i < projectTecnologies.length; i++) {
          const projectTec = projectTecnologies[i];
          if(activeTecnologiesID.includes(projectTec.id)){
            return item 
          }
         
        };
      });
      return {
        ...state,
        activeProjects:  newState
      };
    case 'SHOW-PROJECTS': 
      return{
        ...state,
        showProjects : action.payload
      };
    default: 
      return state;
  };
}

const ProjectsPage = () =>{
  const [ stateProjects, dispatch ] = useReducer(reducer, initialState);
  
  useEffect(() => {
   async function getData ()  {
      getAllProjects()
        .then((data) => {
          dispatch({type: 'LOAD', payload: data.data })
        }).catch((error) =>{
          debugger
          console.log(error)
        })
    }
    getData()
   
  },[]);

  useEffect(() => {
    dispatch({type: 'SELECTED-PROJECTS', payload: stateProjects.checkSelections})
  }, [stateProjects.checkSelections])

  const handleSelectedProjects = (item) => {
    dispatch({type: 'SELECT-PROJECT' , payload: item})
  }
  const handleShowProjects = () => {
    dispatch({type:'SHOW-PROJECTS', payload: !stateProjects.showProjects });
  }

  const handleAllProjects = (allCheckedSelections) => {
    dispatch({type: 'SELECT-ALL-PROJECTS', payload: allCheckedSelections})
  }
  return (
    <IdeLayout
    files={() => (
        <FilterProjects
          title={'Projects'}
          stateProjects={stateProjects}
          onChange={handleSelectedProjects}
          handleAllProjects={handleAllProjects}
          onClick={handleShowProjects}
        /> 
      )
    }
    windowOne={() => (
      
    <>
    {
      stateProjects.loading 
      ? <p>LOADING</p>
      : <ProjectCards 
          stateProjects={stateProjects}
        />
    }
      
    </>
      )
    }
    />
  );
};

export default ProjectsPage;