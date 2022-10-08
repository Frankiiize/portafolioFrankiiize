import React, { useEffect, useReducer, useState } from "react";
import { FilterProjects } from "../../components/FilterProjects";
import { ProjectCards } from "../../components/ProjectCards";
import { IdeLayout } from "../../layouts/IdeLayout";

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
    name: 'devsafio web',
    description: 'Proyecto para programa DLAB - Desafio Latam El proyecto consiste en una plataforma online orientada al uso de búsqueda de empleo y reclutamiento del rubro TI. Partiendo del perfil de cada usuario, test técnicos, encuestas, exhibiciones de código y material de apoyo. La web pretende poner en contacto a miles de postulantes y empresas.',
    tecnologies: [{tecName: 'react', id: tecsIds['react'], icon: 'reactIcon'}, {tecName:'html', id : tecsIds['html'], icon: 'htmlIcon'}, {tecName:'tailwind', id: tecsIds['tailwind'], icon: 'tailwindIcon'}],
    image: require('../../assets/images/devsafio.png'),
    repositoryPath: 'https://github.com/Frankiiize/DEVSAFIO',
    livePath: 'https://devsafio-web.vercel.app/'
  },
  {
    id: 2,
    name: 'projecto dos',
    description: 'Este es un ejemplo de un projecto que tenga listo para ser mostrado en mi portafolio',
    tecnologies: [{tecName: 'react', id: tecsIds['react'], icon: 'reactIcon'}, {tecName:'html', id : tecsIds['html'], icon: 'htmlIcon'}, {tecName:'css', id: tecsIds['css'], icon: 'cssIcon'}],
    image: require('../../assets/images/fotoproject.jpg'),
    repositoryPath: 'www.google.com',
    livePath: 'www.google.com'
  },
  {
    id: 3,
    name: 'projecto tres tailwind',
    description: 'Este es un ejemplo de un projecto que tenga listo para ser mostrado en mi portafolio',
    tecnologies: [{tecName:'shopify', id: tecsIds['shoppify'], icon: 'shopifyIcon'}, {tecName:'tailwind', id: tecsIds['tailwind'],icon: 'tailwindIcon'}],
    image: require('../../assets/images/fotoproject.jpg'),
    repositoryPath: 'www.google.com',
    livePath: 'www.google.com'
  },
  {
    id: 4,
    name: 'projecto cuatro',
    description: 'Este es un ejemplo de un projecto que tenga listo para ser mostrado en mi portafolio',
    tecnologies: [{tecName:'vanilla.js', id: tecsIds['vanillaJS'], icon: 'vanillaJsIcon'}, {tecName:'html', id : tecsIds['html'],  icon: 'htmlIcon'}, {tecName:'css', id: tecsIds['css'], icon: 'cssIcon'}],
    image: require('../../assets/images/fotoproject.jpg'),
    repositoryPath: 'www.google.com',
    livePath: 'www.google.com'
  },
  {
    id: 5,
    name: 'projecto cinco',
    description: 'Este es un ejemplo de un projecto que tenga listo para ser mostrado en mi portafolio',
    tecnologies: [{tecName:'vanilla.js', id: tecsIds['vanillaJS'], icon: 'vanillaJsIcon'}],
    image: require('../../assets/images/fotoproject.jpg'),
    repositoryPath: 'www.google.com',
    livePath: 'www.google.com'
  },
  {
    id: 6,
    name: 'projecto seis tailwind',
    description: 'Este es un ejemplo de un projecto que tenga listo para ser mostrado en mi portafolio',
    tecnologies: [{tecName:'tailwind', id: tecsIds['tailwind'], icon: 'tailwindIcon'}],
    image: require('../../assets/images/fotoproject.jpg'),
    repositoryPath: 'www.google.com',
    livePath: 'www.google.com'
  },
];

const folders = [
  {
    name: 'projects',
    icon: 'tringleIcon',
    info: projects,
    id: 1,
    show: false,
  }
]

const initialState = {
  projects: [],
  filter: [],
  checkSelections: [],
  activeProjects: [],
  showProjects: false,
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
    const fetchData = () => {
      fetch('https://portafolio-black-iota.vercel.app/')
        .then((res) => {
          console.log(res.status)
        })
        .then((data) => console.log(data))
    }
    fetchData()
  },[])
  
  useEffect(() => {
    dispatch({type: 'LOAD', payload: projects })
   
  },[]);

  useEffect(() => {
    dispatch({type: 'SELECTED-PROJECTS', payload: stateProjects.checkSelections})
  }, [stateProjects.checkSelections])


  const handleSelectedProjects = (item) => {
    dispatch({type: 'SELECT-PROJECT' , payload: item})
  }
  const handleShowProjects = () => {
    dispatch({type:'SHOW-PROJECTS', payload: !stateProjects.showProjects })
  }
 
  return (
    <IdeLayout
    files={() => (
        <FilterProjects
          title={'Projects'}
          stateProjects={stateProjects}
          onChange={handleSelectedProjects}
          onClick={handleShowProjects}
        /> 
      )
    }
    windowOne={() => (
      <ProjectCards 
        stateProjects={stateProjects}
        />
      )
    }
    />
  );
};

export default ProjectsPage;