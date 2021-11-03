import './List.css';
import { useState, useEffect, Component} from 'react';
import {EntityApi} from './botticelli_client';
import {makeName} from './util';
import {
  Link,
} from "react-router-dom";

function EntityListEntry(entity) {
  let target = "/entity/" + entity.id;
  return (
    <Link key={entity.id} to={target} style={{ color: 'inherit', textDecoration: 'inherit'  }}>
      <div className="LetterCardEntry">
        <div className="LetterCardName">
          {makeName(entity)}
        </div>
        <div className="LetterCardDesc">
          {entity.description}
        </div>
      </div>
    </Link>

  );
}

class LetterList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      expanded: false,
    };
  }


  render(){
    if (!this.props.entities){
      return null;
    }

    if (!this.state.expanded){
      return (
        <div className="LetterCard">
          <div className="LetterCardHeader" onClick={() => this.setState({expanded : true})}>
            <h2 className="LetterCardLetter">{this.props.k}</h2>
            <div className="LetterCardCenter"><hr /></div>
            <div className="LetterCardRight">{this.props.entities.length}</div>
            <div className="LetterCardChevron">&#x25BC;</div>
          </div>
        </div>
      );
    }
    else {
      return (
        <div className="LetterCard">
          <div className="LetterCardHeader" onClick={() => this.setState({expanded : false})}>
            <h2 className="LetterCardLetter">{this.props.k}</h2>
            <div className="LetterCardCenter"> </div>
            <div className="LetterCardRight">{this.props.entities.length}</div>
            <div className="LetterCardChevron">&#x25B2;</div>
          </div>
          <hr className="LetterCardLineExpanded" />
          {this.props.entities.sort(
            (left, right) => {
              return (left.surname < right.surname) ? -1 : 
                    ((left.surname > right.surname) ? 1  : 0);
          }).map(EntityListEntry)}
        </div>
      );
    }
  }
}


function List() {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [entityList, replaceAllEntities] = useState([]);

  useEffect(() => {
    var api = new EntityApi();
    api.getAllEntities({}, (error, data, response) => {
      setIsLoaded(true);
      if (error) {
        setError(error);
      }
      else {
        replaceAllEntities(data);
      }
    });

  }, []);

  if (error) {
    return <div>Error: {error.message}</div>;
  } else if (!isLoaded) {
    return <div>Loading...</div>;
  } else if (entityList) {
    let entityMap = new Map();

    for (const entity of entityList) {
      if (!entityMap.has(entity.alphabetized_as)){
        entityMap.set(entity.alphabetized_as, []);
      }

      entityMap.get(entity.alphabetized_as).push(entity);
    }

    let render_these = [];
    for (const c of "ABCDEFGHIJKLMNOPQRSTUVWXYZ"){
      if (entityMap.has(c)) {
        render_these.push(c);
      }
    }

    return (
      <div>{render_these.map((letter) => 
        <LetterList key={letter} entities={entityMap.get(letter)} k={letter}/>
      )}</div>
    );
  }
  else {
    return null;
  }
}

export default List;
