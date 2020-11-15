import React from 'react';
import Card from './Card';

function CardList(props) {
    return (
      props.robots.map(robot => {
        return <Card key={robot.id} id={robot.id} name={robot.name} email={robot.email}/>
      })
    );
  }

export default CardList;
