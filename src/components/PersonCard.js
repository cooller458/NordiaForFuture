import React from 'react';
import './PersonCard.css';

function PersonCard({ personName, title,image }) {
    return (
        <div   className='card-container'>
            <div className='card-body' >
                <div className='card-title'>
                    {title}
                </div>
                <img className='card-image'  src={image}  />
            </div>
            <div className='card-footer'>
                <p className='card-footer-text'>{personName}</p>
            </div>
        </div>
    );
}

export default PersonCard;
