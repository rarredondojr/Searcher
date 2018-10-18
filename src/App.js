import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props){
    super(props);
    this.state={
      searchString:'',
      content:document.getElementById('content').getElementsByTagName("p"),
      searchResults:[]
    }
    this.handleChange = this.handleChange.bind(this);

  }
  handleChange = (e) =>{
    this.setState({searchString:e.target.value,searchResults:[]})
    if(e.target.value != '')
      this.handleSearch(e.target.value);
  }
  
  handleSearch(searchText){
    let results = []
    var tags = this.state.content;
    var found;
    
    for (var i = 0; i < tags.length; i++) {
      if (tags[i].textContent.includes(searchText)){

        results.push(tags[i].innerHTML)
      }
    }
    this.setState({
      searchResults:[...results]
    })
  }
  render() {
    return (
      <div className="container">
        <div className="row">
          <input id="search" type="text" value={this.state.searchString} onChange={this.handleChange}></input>
        </div>
        <div className="row">
          <ul id="results">{this.state.searchResults.map(function(i) {return <li>{i}</li>;})}</ul>
        </div>
      </div>
    );
  }
}

export default App;
