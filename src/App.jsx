import React, {useState} from 'react';
import CardList from './CardList';
import SearchBox from "./SearchBox";
import {robots} from './robots'


function App(){

  const [robot, setRobot] = useState(robots);

  function handleChange(event) {
      const filteredRobots = robots.filter(rob => {
        return rob.name.toLowerCase().includes(event.target.value.toLowerCase())
      })
      setRobot(filteredRobots);
    }

  return (
      <div className='tc'>
        <h1>RoboFriends</h1>
        <SearchBox searchChange={handleChange} />
        <CardList  robots={robot} />
      </div>
    );
  }


export default App;
