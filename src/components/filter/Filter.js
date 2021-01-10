import React from 'react';
import { useSelector } from 'react-redux';
import './Filter.sass';

import City from 'components/city/City';
import Categories from 'components/categories/Categories';
import Price from 'components/price/Price';
import Card from 'components/card/Card';

import citiesList from 'data/citiesList';

const Filter = () => {
  const items = useSelector(state => state.items);

  return (
    <div className='filter'>
      <div className='filter__container'>
        <div className='filter__sidebar'>
          <City cities={citiesList} classes={'filter__element cities__list'} />
          <Categories />
          <Price />
        </div>
        <div className='filter__content'>
          {items.map(item => <Card item={item} key={item.id} />)}
        </div>
      </div>
    </div>
  );
}

export default Filter;