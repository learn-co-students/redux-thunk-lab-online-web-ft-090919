// write your CatList component here

import React from 'react';
import catsReducer from './reducers/catsReducer';

class CatList extends React.Component {
    listCats = () => {
        return this.props.catPics.map(cat => <img key={cat.id} src={cat.url} alt={cat.id} />)
    } 
    render() {
        return (
            <div>
                {this.listCats()}
            </div>
        )
    }
}

export default CatList;
