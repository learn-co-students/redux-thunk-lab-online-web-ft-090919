import React, { Component } from 'react';

class App extends Component {   
  
  render() {
    return (
      <div>
        <h1>CatBook</h1>
        const mapStateToProps = state => {
  return {
    catPics: state.cats,
    loading: state.loading
  }
}
      </div>
    );
  }
}

export default App

