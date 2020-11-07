import React from 'react';
import {robots} from './robots';
import Card from './Card';

class CardList extends React.Component {
  render() {
    return (
      robots.map(robot => {
        return <Card key={robot.id} id={robot.id} name={robot.name} email={robot.email}/>
      })
    );
  }
}

export default CardList;
