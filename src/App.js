import React, { Component } from 'react';
import axios from 'axios'; 


import './App.css';
// import UsersListFixed from './components/UsersListFixed';

class App extends Component {
  
      state = {
        users: []
      }

      componentDidMount() {
        //Change URL laaaaaaaaaaaaaaaaa
        axios.get(`https://jsonplaceholder.typicode.com/users/`)
          .then(res => {
            const users = res.data;
            console.log (res.data);
    
          })
      }
    
  render() {
      return (
        
        <div className="App">
            <div>
                
            </div>
        </div>
        
      );
      }    
}



export default App;
