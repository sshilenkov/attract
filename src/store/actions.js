export const selectCity = (city) => ({ type: 'SELECT_CITY', payload: city });
export const clickCheckbox = (id) => ({ type: 'CLICK_CHECKBOX', payload: id });
export const rangeSetPrice = (value) => ({ type: 'RANGE_SET_PRICE', payload: value });
export const applyFilter = () => ({ type: 'APPLY_FILTER' });