import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchCats } from './actions/catActions'
import CatList from './CatList'

class App extends Component {

  componentDidMount() {
    console.log(this.props)
    this.props.fetchCats()
  }

  renderCats = () => {
    if (this.props.catPics.length === 0){
      return <h2>Loading...</h2>
    }else {
      return <CatList catPics={this.props.catPics} />
    }
  }

  render() {
    console.log(this.props.loading) // log will fire every time App renders
    return (
      <div className="App">
        <h1>CatBook</h1>
        {this.renderCats()}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    catPics: state.cats,
    loading: state.loading
  }
}

const mapDispatchToProps = dispatch => {
  return {
    fetchCats: () => dispatch(fetchCats())
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(App)
