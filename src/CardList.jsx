import React from 'react';
import {robots} from './robots';
import Card from './Card';

function CardList() {
    return (
      robots.map(robot => {
        return <Card key={robot.id} id={robot.id} name={robot.name} email={robot.email}/>
      })
    );
  }

export default CardList;
