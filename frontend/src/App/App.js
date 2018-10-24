import React, { Component } from 'react';
import Refrigerator from '../Refrigerator/Refrigerator'
import ItemForm from '../ItemForm/ItemForm'
import './App.css';

class App extends Component {

  // will need to do a comp did mount to and do an axios get to get the data for the state from the db
  // refer to price.js from bitcoin
  
  constructor(props) {
    super(props)

    this.state = [{
      category: 'Meats',
      items: [{    
        name: "carrot",
        "expiration": "Nov 17, 2018",
        "quantity": 5,
        "freezer": false,
        "category": ""
      }]
    },
    {
      category: 'Dairy',
      items: [{
        name: "ice cream",
        "expiration": "Dec 3, 2018",
        "quantity": 1,
        "freezer": true,
        "category": ""
      }]
    }];
  }

  openForm() {
    var ai = document.querySelector('#additem');
    var aside = document.querySelector('aside');
    aside.classList.toggle("open");
    ai.classList.toggle("spin");
  }

  render() {
    return (
      <div>
        <header>
          <div id="additem" className="tooltip" onClick={this.openForm}>
            <i class="fas fa-plus"></i>
          </div>
          <h1><a href="/">Fridgify</a></h1>
          <div id="info" className="tooltip">
            <i class="far fa-lightbulb"></i>
          </div>
        </header>
      <ItemForm />
      <Refrigerator contents={this.state}/>
      </div>
    );
  }
}

export default App;
