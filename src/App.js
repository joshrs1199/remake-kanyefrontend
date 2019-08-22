import React from 'react';
import './App.css';
import AlbumContainer from './containers/AlbumContainer'

class App extends React.Component {
  
  state = {
    albums: []
  }

  componentDidMount(){
    fetch('http://localhost:3000/albums')
    .then((response) => {
      return response.json();
    }).then((allAlbums) => {
      this.setState({
        albums: allAlbums
      })
    })
  }

  render(){
    return (
      <div className="App">
        <AlbumContainer albums={this.state.albums}/>
      </div>
    )
  }
}

export default App;
