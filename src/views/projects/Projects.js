import React, { useEffect, useReducer, useState } from "react";
import { FilterProjects } from "../../components/FilterProjects";
import { ProjectCards } from "../../components/ProjectCards";
import { IdeLayout } from "../../layouts/IdeLayout";

import { getTecnologyPropertys } from "../../utils/utilFuncs"

const projects = [
  {
    id: 1,
    name: 'devsafio web',
    description: 'Proyecto para programa DLAB - Desafio Latam El proyecto consiste en una plataforma online orientada al uso de búsqueda de empleo y reclutamiento del rubro TI. Partiendo del perfil de cada usuario, test técnicos, encuestas, exhibiciones de código y material de apoyo. La web pretende poner en contacto a miles de postulantes y empresas.',
    tecnologies: getTecnologyPropertys('react', 'html', 'tailwind'),
    image: require('../../assets/images/devsafio.png'),
    repositoryPath: 'https://github.com/Frankiiize/DEVSAFIO',
    livePath: 'https://devsafio-web.vercel.app/'
  },
  {
    id: 2,
    name: 'test iAthlas',
    description: 'web app to get image data',
    tecnologies: getTecnologyPropertys('react', 'html', 'css'),
    image: 'https://i.ibb.co/nMzPWxn/test-i-athlas.png',
    repositoryPath: 'https://github.com/Frankiiize/test_iAthlas',
    livePath: 'https://test-i-athlas.vercel.app/'
  },
  {
    id: 3,
    name: 'dango test',
    description: 'basic e-commerce shopping cart app',
    tecnologies: getTecnologyPropertys('react', 'html', 'css'),
    image: 'https://i.ibb.co/n871VHD/dango-Test.png',
    repositoryPath: 'https://github.com/Frankiiize/dangoTest',
    livePath: 'https://dango-test-chi.vercel.app/'
  },
  {
    id: 4,
    name: 'file uploader server',
    description: 'Test on express server to upload images',
    tecnologies: getTecnologyPropertys('express'),
    image: 'https://i.ibb.co/FXvydqK/express-File-Uploader.png',
    repositoryPath: 'https://github.com/Frankiiize/fileupload-express-node',
    livePath: 'https://github.com/Frankiiize/fileupload-express-node'
  },
  {
    id: 5,
    name: 'change theme button',
    description: 'Animated button to change web theme, made with custom components & vanilla js',
    tecnologies: getTecnologyPropertys('vanillaJs', 'css'),
    image: 'https://i.ibb.co/Zc0nRHS/change-Theme-Btn.png',
    repositoryPath: 'https://github.com/Frankiiize/ChangeThemeBtn/blob/origin/README.md#built-with',
    livePath: 'https://frankiiize.github.io/ChangeThemeBtn/'
  },
  {
    id: 6,
    name: 'React-shop e-commerce',
    description: 'Example of a e-commerce, made with react. this a course of platzi frontend school',
    tecnologies: getTecnologyPropertys('react', 'html', 'css'),
    image: 'https://i.ibb.co/SJ9VWNV/react-Plazi-Ecommerce.png',
    repositoryPath: 'https://github.com/Frankiiize/React-Shop-Ecomerce',
    livePath: 'https://react-shop-ecomerce.vercel.app/'
  },
  {
    id: 7,
    name: 'social section',
    description: 'This is a solution to the Social proof section challenge on Frontend Mentor. Frontend Mentor challenges help you improve your coding skills by building realistic projects.',
    tecnologies: getTecnologyPropertys('html', 'css'),
    image: 'https://i.ibb.co/18ff6Jy/screencapture-frankiiize-github-io-social-Section-Frontend-Mentor-2022-10-10-13-06-19.png',
    repositoryPath: 'https://github.com/Frankiiize/socialSection-FrontendMentor',
    livePath: 'https://frankiiize.github.io/socialSection-FrontendMentor/'
  },
  {
    id: 8,
    name: 'petgram',
    description: 'his is a small example of a social network to share photos of pets, you can register log in, like shared photos and add them to your favourites. This project It is part of a course of platzi avanced react.',
    tecnologies: getTecnologyPropertys('html', 'css'),
    image: 'https://raw.githubusercontent.com/Frankiiize/PetGram/origin/src/assets/petgramScreenShot.jpg',
    repositoryPath: 'https://github.com/Frankiiize/PetGram',
    livePath: 'https://pet-gram-hsvg9hy2q-frankiiize.vercel.app/'
  },
  {
    id: 9,
    name: 'petgram',
    description: 'this is a solution to Space tourism multi-page website on Frontend Mentor. Frontend Mentor challenges help you improve your coding skills by building realistic projects.',
    tecnologies: getTecnologyPropertys('react', 'html', 'css'),
    image: 'https://i.ibb.co/Qr41GpV/screencapture-space-react-herokuapp-2022-10-11-18-39-18.png',
    repositoryPath: 'https://github.com/Frankiiize/space-react/blob/origin/README.md',
    livePath: 'https://space-react.herokuapp.com/'
  },
  {
    id: 10,
    name: "TODO's Machine",
    description: 'this is a solution to "Todo app" on Frontend Mentor.',
    tecnologies: getTecnologyPropertys('react', 'html', 'css'),
    image: 'https://i.ibb.co/WHjPgsJ/screencapture-frankiiize-github-io-todoapp-2022-10-11-18-53-51.png',
    repositoryPath: 'https://github.com/Frankiiize/todoapp',
    livePath: 'https://frankiiize.github.io/todoapp/'
  },
  {
    id: 11,
    name: "Batata Bit",
    description: 'this is a project from Platzi frontend career.',
    tecnologies: getTecnologyPropertys('html', 'css'),
    image: 'https://i.ibb.co/LdmcTZJ/screencapture-frankiiize-github-io-Batatabit-2022-10-11-19-07-22.png',
    repositoryPath: 'https://github.com/Frankiiize/Batatabit',
    livePath: 'https://frankiiize.github.io/Batatabit/'
  },
  {
    id: 12,
    name: "Simon says",
    description: 'simon says game.',
    tecnologies: getTecnologyPropertys('html', 'css', 'vanillaJs'),
    image: 'https://i.ibb.co/ZSW3d11/screencapture-frankiiize-github-io-simondice-2022-10-11-19-12-50.png',
    repositoryPath: 'https://github.com/Frankiiize/simondice',
    livePath: 'https://frankiiize.github.io/simondice/'
  },
  {
    id: 13,
    name: "Enchapados E-commerce",
    description: 'E-commerce "practice project", you can register and login, make a purchase, see your profile, add favorites products, admin role have a simple backoffice',
    tecnologies: getTecnologyPropertys('react', 'html', 'css', 'firebase'),
    image: 'https://i.ibb.co/MSyfN02/screencapture-enchapado-29a6f-web-app-2022-10-11-19-52-05.png',
    repositoryPath: 'https://github.com/Frankiiize/enchapa2ca',
    livePath: 'https://github.com/Frankiiize/enchapa2ca'
  },
  {
    id: 14,
    name: "Karduto",
    description: 'Shipments of remittances international. We offer financial operations between Chile, Peru and Venezuela, the rates are specified in the quote, just select the flag of origin and destination. Soon we will open Ecuador, the United States and Colombia',
    tecnologies: getTecnologyPropertys('html', 'css', 'jquery'),
    image: 'https://i.ibb.co/ggBnKz3/screencapture-karduto-2022-10-11-20-00-17.png',
    repositoryPath: 'private',
    livePath: 'https://www.karduto.com/'
  },
];

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
        return obj.id === action.payload.id;
      });
      if(!isTecActive){
        const checkState = [...state.checkSelections];
        const newState = [...checkState, action.payload];
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
    console.log(item)
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
      <ProjectCards 
        stateProjects={stateProjects}
        />
      )
    }
    />
  );
};

export default ProjectsPage;