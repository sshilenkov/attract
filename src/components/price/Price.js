import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import './Price.sass';

import Title from '../title/Title';
import { Slider } from 'antd';
import 'antd/dist/antd.css';

import { rangeSetPrice, applyFilter } from 'store/actions';

const Price = () => {
    const dispatch = useDispatch();
    const price = useSelector(state => {
        return typeof state.price === 'string' ? JSON.parse(state.price) : state.price;
    });

    const setPrice = (e) => dispatch(rangeSetPrice(e));
    const setFilter = () => dispatch(applyFilter())

    return (
        <div className='price'>
            <Title title='Price' />
            <Slider
                onChange={setPrice}
                range
                min={0}
                max={250}
                step={1}
                value={price}
            />
            <div className='price__footer'>
                <div className='price__limit'>
                    <span className='price__min'>${price[0]}</span>
                    <span className='price__max'>${price[1]}</span>
                </div>
                <button onClick={setFilter} className="price__button">Filter</button>
            </div>
        </div>
    );
}

export default Price;