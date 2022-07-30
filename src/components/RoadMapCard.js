import React from 'react';
import './PersonCard.css';

function RoadMapCard({ height, title,image }) {
    return (
        <div  style={{height:height}}  className='card-container'>
            <div className='card-body' >
                <div className='card-title'>
                    {title}
                </div>
                <img className='card-image'  src={image}  />
            </div>
         
        </div>
    );
}

export default RoadMapCard;
