import React from 'react';

const Card = ({imageUrl, title, text}) => {
    return(
        <div className='card'>
            <img className='card-img-top'
                src={imageUrl} />
            <div className='card-body'>
                <h3>{title}</h3>
                <p className='card-text'>
                    {text}
                </p>
            </div>
        </div>
    );
}

export default Card;