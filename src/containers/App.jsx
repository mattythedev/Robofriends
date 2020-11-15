import React, {useState, useEffect} from 'react';
import CardList from '../components/CardList';
import SearchBox from "../components/SearchBox";
import {robots} from '../robots';
import './App.css';
import Scroll from '../components/Scroll';

function App(){

  const [robot, setRobot] = useState([]);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(users => setRobot(users))
  }, []);

  function handleChange(event) {
      const filteredRobots = robots.filter(rob => {
        return rob.name.toLowerCase().includes(event.target.value.toLowerCase())
      })
      setRobot(filteredRobots);
    }
  if(robot.length === 0) {
    return <h1 className='tc f1'>Loading</h1>
  } else {
    return (
        <div className='tc'>
          <h1 className='f1'>RoboFriends</h1>
          <SearchBox searchChange={handleChange} />
          <Scroll>
            <CardList  robots={robot} />
          </Scroll>
        </div>
      );
  }
}


export default App;
