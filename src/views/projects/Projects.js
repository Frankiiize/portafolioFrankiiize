import React, { useEffect, useReducer, useState } from "react";
import { IdeLayout } from "../../layouts/IdeLayout";
import { iconList } from "../../utils/iconList";

const tecsIds = {
  react: 1,
  html: 2,
  css: 3,
  shoppify: 4,
  vanillaJS: 5,
  tailwind: 6,
}

const projects = [
  {
    id: 1,
    name: 'projecto uno',
    description: 'Este es un ejemplo de un projecto que tenga listo para ser mostrado en mi portafolio',
    tecnologies: [{tecName: 'react', id: tecsIds['react'], icon: 'reactIcon'}, {tecName:'html', id : tecsIds['html'], icon: 'htmlIcon'}, {tecName:'css', id: tecsIds['css'], icon: 'cssIcon'}],
    image: require('../../assets/images/fotoproject.jpg'),
    path: 'www.google.com'
  },
  {
    id: 2,
    name: 'projecto dos',
    description: 'Este es un ejemplo de un projecto que tenga listo para ser mostrado en mi portafolio',
    tecnologies: [{tecName: 'react', id: tecsIds['react'], icon: 'reactIcon'}, {tecName:'html', id : tecsIds['html'], icon: 'htmlIcon'}, {tecName:'css', id: tecsIds['css'], icon: 'cssIcon'}],
    image: require('../../assets/images/fotoproject.jpg'),
    path: 'www.google.com'
  },
  {
    id: 3,
    name: 'projecto tres tailwind',
    description: 'Este es un ejemplo de un projecto que tenga listo para ser mostrado en mi portafolio',
    tecnologies: [{tecName:'shopify', id: tecsIds['shoppify'], icon: 'shopifyIcon'}, {tecName:'tailwind', id: tecsIds['tailwind'],icon: 'tailwindIcon'}],
    image: require('../../assets/images/fotoproject.jpg'),
    path: 'www.google.com'
  },
  {
    id: 4,
    name: 'projecto cuatro',
    description: 'Este es un ejemplo de un projecto que tenga listo para ser mostrado en mi portafolio',
    tecnologies: [{tecName:'vanilla.js', id: tecsIds['vanillaJS'], icon: 'vanillaJsIcon'}, {tecName:'html', id : tecsIds['html'],  icon: 'htmlIcon'}, {tecName:'css', id: tecsIds['css'], icon: 'cssIcon'}],
    image: require('../../assets/images/fotoproject.jpg'),
    path: 'www.google.com'
  },
  {
    id: 5,
    name: 'projecto cinco',
    description: 'Este es un ejemplo de un projecto que tenga listo para ser mostrado en mi portafolio',
    tecnologies: [{tecName:'vanilla.js', id: tecsIds['vanillaJS'], icon: 'vanillaJsIcon'}],
    image: require('../../assets/images/fotoproject.jpg'),
    path: 'www.google.com'
  },
  {
    id: 6,
    name: 'projecto seis tailwind',
    description: 'Este es un ejemplo de un projecto que tenga listo para ser mostrado en mi portafolio',
    tecnologies: [{tecName:'tailwind', id: tecsIds['tailwind'], icon: 'tailwindIcon'}],
    image: require('../../assets/images/fotoproject.jpg'),
    path: 'www.google.com'
  },
];

const initialState = {
  projects: [],
  filter: [],
  checkSelections: [],
  activeProjects: []
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
        filter: getTecnologies(action.payload),
      };
    case 'SELECT-PROJECT':
      let currentChecks = [];
      const isTecActive = state.checkSelections.some((obj) => {
        const objID = Object.values(obj)[1];
        return objID === action.payload.id;
      });
      if(!isTecActive){
        const checkState = [...state.checkSelections];
        const newState = [...checkState, action.payload];
        currentChecks = newState;
      }else {
        const findObj = state.checkSelections.filter((obj) => {
          const objID = Object.values(obj)[1];
          return objID !== action.payload.id;
        });
        currentChecks = findObj;
      };
      return{
        ...state,
       checkSelections : currentChecks
       
      };
    case 'SELECTED-PROJECTS':
      const activeTecnologiesID = action.payload.map((item) => item.id); 
      const allProjects =[ ...state.projects];
      const newState = allProjects.filter((item,index) => {
        const projectTecnologies = item.tecnologies;
        for (let i = 0; i < projectTecnologies.length; i++) {
          const projectTec = projectTecnologies[i];
          if(activeTecnologiesID.includes(projectTec.id)){
            return item;
          };
        };
      });
      
      return {
        ...state,
        activeProjects:  newState
      };
    default: 
      return state;
  };
}

const ProjectsPage = () =>{
  const [ state, dispatch ] = useReducer(reducer, initialState);
  
  useEffect(() => {
    dispatch({type: 'LOAD', payload: projects })
  },[]);

  useEffect(() => {
    dispatch({type: 'SELECTED-PROJECTS', payload: state.checkSelections})
  }, [state.checkSelections])


  const handleSelectedProjects = (item) => {
    dispatch({type: 'SELECT-PROJECT' , payload: item})
  }
 
  return (
    <IdeLayout
    files={() => (
      <ul style={{color:'white'}}>
        {
        state.filter.map((item,index) => (
          <li key={`${item.id}-{index}`}>
            {
              item.icon && (iconList[0][item.icon]) 
            }
            <input type="checkbox" value={item.id} onChange={() => handleSelectedProjects(item)}/>
            <label>{item.tecName}</label>
          </li>
        ))
        }
      </ul>
      )
    }
    windowOne={() => (
      <>
        {
          state.activeProjects.map((item,index) => (
            <div style={{color: 'white', fontSize: '18px'}} key={`${item.name}-${index}`}>
              <h2>{item.name}</h2>
              {
                item.tecnologies.map((tec) => (
                  <p key={tec.id}>{tec.tecName}</p>
                ))
              }
              <img src={item.image} alt={item.name}/>
              <p>{item.description}</p>
            </div>
          ))
        }
      </>
      )
    }
    />
  );
};

export default ProjectsPage;