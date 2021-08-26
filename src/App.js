import React, { Component } from 'react';
import axios from 'axios';
import apiKey from './config';
import Search from './Search';
import Nav from './Nav';
import Result from './Result';

class App extends Component {

  constructor() {
    super();
    this.state = {
      photos: []
    };
  } 

  componentDidMount() {
    axios.get(`https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=cats%2C+dogs%2C+computer&per_page=24&format=json&nojsoncallback=1`)
    .then(response => {
      this.setState({
        photos: response.data.photos
      })
    })
    .catch(error => {
      // handle error
      console.log('Error fetching and parsing data', error);
    })
  }

  render(){
    return (
      <div class="container">
          <Search />
          <Nav />
          <Result data={this.state.photos.photo}/>
      </div>
    );
  }
}

export default App;
