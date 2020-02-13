import React, { Component } from 'react';
import { connect } from 'react-redux'
import { fetchCats } from './actions/catActions'
import CatList from './CatList'

class App extends Component {   
  
  render() {
    return (
      <div>
        <h1>CatBook</h1>
        <CatList catPics={this.props.catImages}/>
      </div>
    );
  }

  componentDidMount() {
    this.props.fetchCats()
  }

}

const mapStateToProps = state => ({
  catImages: state.cats,
  loading: state.loading
})

const mapDispatchToProps = dispatch => ({
  fetchCats: () => dispatch(fetchCats())
})

export default connect (mapStateToProps, mapDispatchToProps)(App)

