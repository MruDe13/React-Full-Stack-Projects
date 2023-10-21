import { Component } from 'react';

import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor() {
    console.log('1');
    super();
    
    this.state = {
      monsters : [],
    }
  }

  componentDidMount() {
    console.log('3');
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => response.json())
      .then((users) => 
        this.setState(
          () => {
            return { monsters: users };
          },
          () => {
            console.log( this.state ); // figure out why it is consoled twice
          }
        )
      );
  }

  render() {
    console.log('2');
    return (
      <div className="App">
        { this.state.monsters.map((monster) => {
            return (
              <h1 key={monster.id}> {monster.name} </h1>
            );
          })
        };
      </div>
    );
  }
}


export default App;
