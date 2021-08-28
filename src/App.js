import React, { Component } from 'react';
import {
  BrowserRouter,
  Route,
  Switch
} from 'react-router-dom';

import axios from 'axios';
import apiKey from './config';
import Search from './components/Search';
import Nav from './components/Nav';
import Result from './components/Result';

class App extends Component {

  constructor() {
    super();
    this.state = {
      photo: [],
      loading: true
    };
  } 

  componentDidMount() {
    //this.performSearch();
    axios.get(`https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=03ff894081a9dbfb3261a85b428c3c07&tags=cats%2C+dogs%2C+computer&format=json&nojsoncallback=1`)
    .then(response => {
      this.setState({
        photo: response.data.photos.photo,
        loading: false
      })
    })
    .catch(error => {
      // handle error
      console.log('Error fetching and parsing data', error);
    })
  }

  performSearch = (query ) => {
    axios.get(`https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=03ff894081a9dbfb3261a85b428c3c07&tags=${query}&format=json&nojsoncallback=1`)
    .then(response => {
      this.setState({
        photo: response.data.photos.photo,
        loading: false
      })
    })
    .catch(error => {
      // handle error
      console.log('Error fetching and parsing data', error);
    })
  }

  render(){
    return (
      <BrowserRouter>
        <div className="container">
          <Switch>
            <Route path="/" render={() => 
              {
                  (this.state.loading) ? <p>Loading...</p>
                : <Result data={this.state.photo}/>
              }
            } />
            <Search onSearch={this.performSearch}/>
            {/* <Nav /> */}

              {/* <Route path="/arkansas" render={this.performSearch}/> */}
            </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
