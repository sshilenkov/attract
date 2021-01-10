import React from 'react';
import './Card.sass';

import img1 from './1.png';
import img2 from './2.png';
import img3 from './3.png';

import categoriesList from 'data/category';
import citiesList from 'data/citiesList';

const Card = ({ item }) => {
    const imgs = [
        img1,
        img2,
        img3
    ]

    function randomInt(min, max) {
        return Math.floor(Math.random() * (max - min + 1) + min);
    }

    return (
        <div className='card'>
            <div className='card__img-holder'>
                <img className='card__img' src={imgs[randomInt(0, 2)]} alt='product' /> {/* random picture */}
                <span className='card__location'>{citiesList[item.city - 1].name}</span>
            </div>
            <div className='card__description'>
                <h4 className='card__title'>{item.name}</h4>
                <div className='card__footer'>
                    <div className='card__category'>{categoriesList[item.category - 1].name}</div>
                    <div className='card__price'>${item.price}</div>
                </div>
            </div>
        </div>
    );
}

export default Card;