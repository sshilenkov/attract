import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import './Categories.sass';

import Title from '../title/Title';
import Checkbox from '../checkbox/Checkbox';

import { clickCheckbox } from 'store/actions';
import categoriesList from 'data/category';

const Categories = () => {
    const dispatch = useDispatch();
    const selectedCategories = useSelector(state => {
        return typeof state.categories === 'string' ? JSON.parse(state.categories) : state.categories;
    });

    const setCategory = (e) => dispatch(clickCheckbox(e.target.id));
    let isSelected = (id) => selectedCategories.includes(id.toString());

    return (
        <div className='categories'>
            <Title title='Categories' />
            <div className='categories__block'>
                {categoriesList.map(category => {
                    return <Checkbox
                                key={category.id}
                                onClick={() => setCategory}
                                isChecked={isSelected}
                                id={category.id}
                                text={category.name}
                            />
                })}
            </div>
        </div>
    );
}

export default Categories;