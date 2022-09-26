import React from "react";
import { IdeLayout } from "../../layouts/IdeLayout";

const projects = [
  {
    id: 1,
    name: 'projecto uno',
    description: 'Este es un ejemplo de un projecto que tenga listo para ser mostrado en mi portafolio',
    tecnologies: ['react', 'html', 'css'],
    image: '../../assets/images/fotoproject.jpg'
  },
  {
    id: 2,
    name: 'projecto dos',
    description: 'Este es un ejemplo de un projecto que tenga listo para ser mostrado en mi portafolio',
    tecnologies: ['shoppify', 'html', 'css'],
    image: '../../assets/images/fotoproject.jpg'
  },
  {
    id: 3,
    name: 'projecto uno',
    description: 'Este es un ejemplo de un projecto que tenga listo para ser mostrado en mi portafolio',
    tecnologies: ['vanilla.js', 'html', 'css'],
    image: '../../assets/images/fotoproject.jpg'
  },
]

const ProjectsPage = () =>{
  return (
    <IdeLayout
    files={() => 
      <h1>hola</h1>
    }
    />
  );
};

export default ProjectsPage;