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
        axios.get(`https://api.edamam.com/search?q=' + mushroom + '&app_id=b8fa8ec0&app_key=2e99e135530eaed01cb9620b24c1f1c0`)
          .then(res => {
            // const users = res.data;
            console.log (res.data);
    
          })
      }
    
  render() {
      return (
        
        <div className="App">
            <div>
                <h1>Open your consol</h1> 
            </div>
        </div>
        
      );
      }    
}



export default App;
