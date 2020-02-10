// write your CatList component here

import React, { Component } from 'react'


class CatList extends Component {

    render() {
    return( 
            <div>
                {this.props.catPics.map(cat => { 
                    return (
                        <div key={cat.id}>
                        <img src={cat.url} alt={cat.id}></img>
                        </div>
                        )
                    })
                }
            </div>
        )
    }

}



export default CatList
