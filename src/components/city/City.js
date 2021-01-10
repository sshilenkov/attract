import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Select from 'react-select';
import './City.sass';

import Title from 'components/title/Title';

import { selectCity } from 'store/actions';

const City = ({ cities }) => {
    const citiesList = cities.map(city => {
        city.value = city.name;
        city.label = city.name;
        return city;
    });

    const customStyles = {
        indicatorSeparator: () => ({
            display: 'none'
        }),
        control: (provided) => ({
            ...provided,
            borderRadius: 0,
            color: '#4c505b',
            fontFamily: 'Raleway',
            fontSize: 15,
            fontWeight: 400,
        })
    }
    
    const dispatch = useDispatch();
    const city = useSelector(state => {
        return typeof state.city === 'string' ? JSON.parse(state.city) : state.city;
    });

    const setCity = (selectedOption) => dispatch(selectCity(selectedOption));

    return (
        <div className='city'>
            <Title title='City' />
            <Select
                styles={customStyles}
                isClearable={false}
                name='city'
                options={citiesList}
                onChange={setCity}
                value={city}
            />
        </div>
    );
}

export default City;