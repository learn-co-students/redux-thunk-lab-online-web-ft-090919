import React from 'react'

const CatList = props => {
    const renderCatImages = props.catPics.map(catImage => <img src={catImage.url} key={catImage.id} alt={catImage.id} />)

    return (
        <div>
            {renderCatImages}
        </div>
    )
}

export default CatList
