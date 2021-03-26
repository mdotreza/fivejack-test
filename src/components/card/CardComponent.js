import React, { useEffect, useState } from 'react'


const Card = (props) => {
  const [selected, toggleSelected]= useState(true)
  const {title,price,total,image} = props;

  const handleClick = () =>{
      toggleSelected(!selected);
  }
    return(
        <div className="card">
          <div className="left">
            <div className="thumbnail">
              <img src={require('../../assets/images/'+ image+'').default}/>
            </div>
            <div className="description">
              <p className="title">{title}</p>
              <p className="price">{price}</p>
              <p className="total">{total}</p>
            </div>
          </div>
            <div className="toggle-container" onClick={handleClick}>
                <div className={`dialog-button ${selected ? "" : "disabled"}`}>
                <box-icon style={{ fill: selected ? '#999' : '#fbaccc', }} type='solid' name='heart'></box-icon>
                </div>
            </div>
        </div>
    );
}
export default Card;