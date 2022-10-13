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
                <div  className="projectCardsContainer__card__info__description__text">
                  <p>{item.description}</p>
                </div>
              <div className="projectCardsContainer__card__info__description__buttoms">
                <div className={item.repositoryPath === 'private' ? 'projectCardsContainer__card__info__description__buttoms-block': "projectCardsContainer__card__info__description__buttoms__buttom"}>
                  {
                    item.repositoryPath === 'private'
                    ? <a ></a>
                    : <a target="_blank" href={item.repositoryPath}>repositorio</a>
                  }
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