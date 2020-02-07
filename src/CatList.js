import React, { Component } from 'react';

class CatList extends Component {

  render() {
    const catList = this.props.catPics.map((pic,i) => {
      return (
        <img src={pic.url} alt={`cat photo number ${i+1}`} />
      )
    });

    return(
      <ul>
        {catList}
      </ul>
    );
  }
};

export default CatList;