// write your CatList component here
import React, { Component } from 'react'

class CatList extends Component {
    
    showCats = () => {
        if(this.props.loading) {
            return <p>Loading...</p>
        } else {
            return this.props.catPics.map(catPic => {
                return <img key={catPic.id} src={catPic.url} alt={catPic.url}/>
            })
        }
    }

    render () {
        return (
            <div>
                {this.showCats()}
            </div>
        )
    }
}

export default CatList