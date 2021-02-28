import React, { Component } from "react";
import "../App.css";
import Nav from "./Nav";
import hogs from "../porkers_data";
import HogBrowser from "./HogBrowser";
import Filter from './Filter' 

class App extends Component {  

constructor () {
  super()
    this.state = {
      hogs: hogs,
      showGreasedOnly: false,
      sortBy: ''
    }
}

handleGreased = () => {
  this.setState({
    showGreasedOnly: !this.state.showGreasedOnly
  })

}

findHogsToShow = () => {
  let updatedHogs = this.state.hogs

  if (this.state.showGreasedOnly) {
    updatedHogs = updatedHogs.filter(hogObj => hogObj.greased)
  }

  if (this.state.sortBy === 'name'){

    updatedHogs.sort(function(hogA, hogB) {
      const nameA = hogA.name.toUpperCase();
      var nameB = hogB.name.toUpperCase();

      if (nameA < nameB) {
        return -1 ;
      }
      if (nameA > nameB) {
        return 1;
      }

      return 0;
    });

    } else if (this.state.sortBy ==='weight'){
      updatedHogs.sort(function (hogA, hogB){
        return hogA.weight - hogB.weight 
      })

    }
  return updatedHogs
}

updateSortBy = (e) => {
  this.setState({
    sortBy: e.target.value
  })
}

  render() {
    const filteredHogs = this.findHogsToShow()
    return (
      <div className="App">
        <Nav />
        <Filter handleGreased={this.handleGreased} updateSortBy={this.updateSortBy}/>
        <HogBrowser hogs={filteredHogs}/>
      </div>
      );

  }
}

export default App;
