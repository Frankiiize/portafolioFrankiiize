import React from "react";

const ProjectCards = ({stateProjects}) => {
  return(
    <div className="projectCardsContainer">
      {
        stateProjects.activeProjects.map((item,index) => (
          <div 
          className="projectCardsContainer__card"
          key={`${item.name}-${index}`}>
            <h2 className="projectCardsContainer__card__title">{item.name}</h2>
            <div className="projectCardsContainer__card__info">
              <div className="projectCardsContainer__card__info__image">
                <img src={item.image} alt={item.name}/>
              </div>
              <div className="projectCardsContainer__card__info__description">
                <p>{item.description}</p>
                <div className="projectCardsContainer__card__info__description__buttoms">
                  <div className="projectCardsContainer__card__info__description__buttoms__buttom">
                    <a target="_blank" href={item.repositoryPath}>repositorio</a>
                  </div>
                  <div className="projectCardsContainer__card__info__description__buttoms__buttom">
                    <a target="_blank" href={item.livePath}>live project</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))
      }
    </div>
  );
};

export { ProjectCards };