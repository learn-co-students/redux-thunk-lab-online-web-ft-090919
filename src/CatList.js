// write your CatList component here
import React, { Component } from 'react';

export default class CatList extends Component {
    render(){
        return(
            <ul>
                {this.props.catPics.map(cat => <li id={cat.id}><img src={cat.url}></img></li>)}
            </ul>
        )
    }
}