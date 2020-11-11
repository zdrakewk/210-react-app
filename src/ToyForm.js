import React, { Component } from 'react'
import { addToy } from './redux/toyActions'
import { connect } from "react-redux";


class ToyForm extends Component {
  state = {
    toyName: '',
    toyImage:''
   }



  handleInput = (e) => {
    this.setState({[e.target.name]: e.target.value}, () => console.log(this.state))
  }

  makeNewToy = () => {
     const serverData = {
      "name": this.state.toyName,
      "image": this.state.toyImage,
      "likes": 0
    }

    // this.props.addToyToToyArr(serverData).then( newToy => this.props.history.push(`/toys/${newToy.id}`) )
    // this.props.addToyToToyArr(serverData).then( newToy => this.props.history.push(`/toys`) )

    this.props.addToy(serverData, this.props.history )
    

    this.setState({
      toyName: '',
      toyImage:''
     })
  }

  render() {
    return (
      <div>
        <label>Name</label>
        <input name="toyName"
          onChange={this.handleInput}
          value={this.state.toyName}
        />

        <label>Image URL</label>
        <input name='toyImage'
          onChange={this.handleInput}
          value={this.state.toyImage}
        />
        <button onClick={this.makeNewToy}> Make New Toy!!</button>
      </div>
    );
  }
}

// function SearchBar() {
//   return (
//     <div id="search-bar">
//     <input />
//     <button>Search!</button>
//   </div>
//   )
// }
// export default SearchBar;



export default  connect(null, { addToy })(ToyForm);
