import { useState, useEffect } from 'react';
import './Entity.css';
import {EntityApi} from './botticelli_client';
import {makeName} from './util';
import {
  useHistory,
  useParams
} from "react-router-dom";

function Tag(tag) {
  return (
    <div key={tag.id} className="EntityTag">{tag.name}</div>
  );
}

function Fact(fact) {
  return (
    <li key={fact.id} className="EntityFact">{fact.text}</li>
  );
}

function BirthDeath(entity){
  if (!entity.is_real) {
    return null;
  }
  return (
    <li>Born: {entity.birth_year}</li>
  );

}

function Entity() {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [entity, replaceEntity] = useState(null);
  let history = useHistory();

  let { id } = useParams();

  useEffect(() => {
    var api = new EntityApi();
    api.getEntityById(id, (error, data, response) => {
      setIsLoaded(true);
      if (error) {
        setError(error);
      }
      else {
        replaceEntity(data);
      }
    });

  }, []);

  if (error) {
    return <div>Error: {error.message}</div>;
  } else if (!isLoaded) {
    return <div>Loading...</div>;
  } else if (entity) {

    return (
      <div>
      <div className="EntityNavigationCard">
      <button onClick={() => history.goBack()}>‹ Back</button>
      <button style={{float: "right"}}>Edit</button>
      </div>
      <div className="EntityCard">
      <div className="Row">
        <div className="EntityColumnLeft">
          <h1 title={"Alphbetized as: " + entity.alphabetized_as}>{makeName(entity)}</h1>
          <p><i>{entity.description}</i></p>
          <div className="Row">
            <div className="ColumnThird">{entity.is_real ? "Real" : "Fictional"}</div>
            <div className="ColumnThird">{entity.is_living ? "Living" : "Deceased"}</div>
            <div className="ColumnThird">{entity.gender}</div>
          </div>
        </div>
        <div className="EntityColumnRight">
          <div className="centered">
            <a href={entity.wikipedia_url}>
              <img className="EntityImage" alt={""} src={entity.image_url ? entity.image_url : "https://via.placeholder.com/512"}/>
            </a>
          </div>
          <div className="centered">
            <a href={entity.wikipedia_url}>
              {entity.wikipedia_url ? "Wikipedia page" : ""}
            </a>
            </div>
        </div>
      </div>
      <p />
      <div className="EntityTagRow">
        {entity.tags.map(Tag)}
      </div>
      <p />
      <ul className="EntityFactUL">
        {BirthDeath(entity)}
        {entity.facts.map(Fact)}
      </ul>
      </div>
      </div>
    );
  }
  else {
    return null;
  }
}

export default Entity;
