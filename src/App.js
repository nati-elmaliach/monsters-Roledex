import React , {Component} from 'react';
import  { CardList }  from './component/card-list/card.component';
import { SearchBox } from './component/search-box/search-bo.component';
import './App.css';

class App extends Component {

  constructor(){
    super();
    this.state = {
      monsters: [],
      searchField: ''
    }
  }

  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(users => this.setState({monsters:users}))
  }

  handleChange = e => {
    this.setState({searchField:e.target.value})
  }

  render() {
    //destructering using es9
    const { monsters , searchField } = this.state;

    //filter the array
    const filterdMonsters = monsters.filter( monster => 
      monster.name.toLowerCase().includes(searchField.toLowerCase())
      )

      return (
        <div className="App">
        <h1>Monster Rolodex</h1>
        <SearchBox 
          placeholder = 'search monsters' 
          handleChange = {this.handleChange}/>
        <CardList monsters = {filterdMonsters} />
        </div>
      );
    }
}

export default App;
