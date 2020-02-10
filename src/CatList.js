import React from 'react';

const CatList = (props) => {


  return (
    <div>
      <ul>
        {props.catPics.map(cat => <li key={cat.id}><img src={cat.url} alt={cat.id} /></li>)}
      </ul>
    </div>
  )
}

export default CatList
